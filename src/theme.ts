export type ThemeId = "dark" | "light";

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
    id: "dark",
    name: "Dark",
    tag: "Obsidian Slate",
    primaryColor: "#3B82F6",
    accentColor: "#60A5FA",
    bgMain: "#09090B",
  },
  {
    id: "light",
    name: "Light",
    tag: "Clean Paper",
    primaryColor: "#2563EB",
    accentColor: "#3B82F6",
    bgMain: "#FAFAFA",
  },
];

const THEME_STORAGE_KEY = "color-scheme";

export const getSystemTheme = (): ThemeId => {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return "dark";
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

export const getSavedTheme = (): ThemeId => {
  if (typeof window === "undefined") return "dark";
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === "dark" || saved === "light") {
      return saved;
    }
  } catch {
    // Ignore storage errors
  }
  return getSystemTheme();
};

export const toggleThemePreference = (currentRendered: ThemeId): ThemeId => {
  const target: ThemeId = currentRendered === "dark" ? "light" : "dark";
  const system = getSystemTheme();
  try {
    if (target !== system) {
      localStorage.setItem(THEME_STORAGE_KEY, target);
    } else {
      localStorage.removeItem(THEME_STORAGE_KEY);
    }
  } catch {
    // Ignore storage errors
  }
  applyTheme(target);
  return target;
};

export const applyTheme = (themeId: ThemeId, persist = false) => {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", themeId);

  if (persist) {
    const system = getSystemTheme();
    try {
      if (themeId !== system) {
        localStorage.setItem(THEME_STORAGE_KEY, themeId);
      } else {
        localStorage.removeItem(THEME_STORAGE_KEY);
      }
    } catch {
      // Ignore storage errors
    }
  }

  let stored: string | null = null;
  try {
    stored = localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    // Ignore
  }

  const metaScheme = document.querySelector('meta[name="color-scheme"]');
  if (metaScheme) {
    metaScheme.setAttribute(
      "content",
      stored === "dark" || stored === "light" ? stored : "light dark",
    );
  }

  const activeTheme = THEMES.find((t) => t.id === themeId);
  if (activeTheme) {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", activeTheme.bgMain);
    }
  }
};
