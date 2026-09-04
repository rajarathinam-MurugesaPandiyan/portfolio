import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";
import React from "react";

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn();
  callback: any;
  options: any;
  constructor(callback: any, options: any) {
    this.callback = callback;
    this.options = options;
  }
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

// Mock window.scrollTo
Object.defineProperty(window, "scrollTo", {
  writable: true,
  value: vi.fn(),
});

// Mock Element.prototype.scrollIntoView
Element.prototype.scrollIntoView = vi.fn();

// Mock @lottiefiles/react-lottie-player
vi.mock("@lottiefiles/react-lottie-player", () => ({
  Player: ({ autoplay, loop, src, ...rest }: any) =>
    React.createElement("div", { "data-testid": "lottie-player", ...rest }),
}));
