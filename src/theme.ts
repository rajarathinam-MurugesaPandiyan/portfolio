export type ThemeId =
  | "electric-cyan"
  | "amber-ember"
  | "emerald-matrix"
  | "linear-indigo";

export interface ThemeOption {
  id: ThemeId;
  name: string;
  tag: string;
  primaryColor: string;
  accentColor: string;
  bgMain: string;
}

export const THEMES: ThemeOption[] = [
  {
    id: "electric-cyan",
    name: "Electric Cyan",
    tag: "Systems & Cloud",
    primaryColor: "#0EA5E9",
    accentColor: "#06B6D4",
    bgMain: "#0B0F19",
  },
  {
    id: "amber-ember",
    name: "Amber Ember",
    tag: "Studio Portrait",
    primaryColor: "#EA580C",
    accentColor: "#F59E0B",
    bgMain: "#0E121B",
  },
  {
    id: "emerald-matrix",
    name: "Emerald Terminal",
    tag: "Reliability & Uptime",
    primaryColor: "#10B981",
    accentColor: "#34D399",
    bgMain: "#090D12",
  },
  {
    id: "linear-indigo",
    name: "Linear Indigo",
    tag: "Modern Product",
    primaryColor: "#6366F1",
    accentColor: "#A855F7",
    bgMain: "#0A0B12",
  },
];

const THEME_STORAGE_KEY = "rr_portfolio_theme";

export const getSavedTheme = (): ThemeId => {
  if (typeof window === "undefined") return "electric-cyan";
  const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeId | null;
  if (saved && THEMES.some((t) => t.id === saved)) {
    return saved;
  }
  return "electric-cyan";
};

export const applyTheme = (themeId: ThemeId) => {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", themeId);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, themeId);
  } catch {
    // Ignore storage errors in restrictive environments
  }

  // Update mobile browser chrome bar theme-color
  const activeTheme = THEMES.find((t) => t.id === themeId);
  if (activeTheme) {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", activeTheme.bgMain);
    }
  }
};
