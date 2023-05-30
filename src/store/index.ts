import { atom, selector } from "recoil";

const getPrefersColorScheme = () => {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

export const themeState = atom<"light" | "dark">({
  key: "themeState",
  default: getPrefersColorScheme(),
});

export const themeSelector = selector<"light" | "dark">({
  key: "themeSelector",
  get: ({ get }) => {
    const theme = get(themeState);
    return theme;
  },
});
