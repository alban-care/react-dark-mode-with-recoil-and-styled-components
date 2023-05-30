# Build React dark mode with recoil and styled-components

## Description

How to build a dark mode with [recoiljs](https://recoiljs.org/) and [styled-components](https://styled-components.com/)

## First step : Create a React project with vite and install dependencies

Create a React project with [vite](https://vitejs.dev/)

```bash
pnpm create vite
```

Go to the project folder

```bash
cd <project-name>
```

Install dependencies, recoil and styled-components

```bash
pnpm i recoil styled-components@v6.0.0-rc.2
```

start the project in development mode

```bash
pnpm dev
```

## Second step : Create recoil atoms and selectors

Create recoil atoms and selectors in `src/store/index.ts`

```ts
import { atom, selector } from "recoil";

export const themeState = atom<"light" | "dark">({
  key: "themeState",
  default: "light",
});

export const themeSelector = selector<"light" | "dark">({
  key: "themeSelector",
  get: ({ get }) => {
    const theme = get(themeState);
    return theme;
  },
});
```

## Third step : Create recoil provider

Create recoil provider in `src/main.tsx`

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/index.tsx";
import { RecoilRoot } from "recoil";

const root = document.getElementById("root");

ReactDOM.createRoot(root as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
```

## Fourth step : Create styled-components theme

Create styled-components theme in `src/styles/theme.ts`

```ts
export const lightTheme = {
  colors: {
    background: "#fff",
    text: "#000",
  },
};

export const darkTheme = {
  colors: {
    background: "#000",
    text: "#fff",
  },
};
```

## Fifth step : Create styled-components global styles

Create styled-components global styles in `src/styles/GlobalStyles.ts`

```ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
`;
```

## Sixth step : Create styled-components theme provider

Create styled-components theme provider in `src/styles/ThemeProvider.tsx`

```tsx
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { useRecoilValue } from "recoil";
import { themeSelector } from "../store";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = useRecoilValue(themeSelector);

  return (
    <StyledThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {children}
    </StyledThemeProvider>
  );
};
```

## Seventh step : Wrap the App with ThemeProvider and add global styles

Wrap App with ThemeProvider in `src/main.tsx`

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/index.tsx";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "./styles/ThemeProvider";
import { GlobalStyles } from "./styles/GlobalStyles.ts";

const root = document.getElementById("root");

ReactDOM.createRoot(root as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
```

## Eighth step : Create a switch dark mode toggle button

Create dark mode toggle button in `src/components/DarkModeSwitchButton/index.tsx`

```tsx

```

## Ninth step : Import DarkModeToggle component in App

Import DarkModeToggle component in App in `src/components/App/index.tsx`

```tsx
import React from "react";
import DarkModeSwitchButton from "../DarkModeSwitchButton";
import styled from "styled-components";

const Main = styled.main`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.25s linear;
`;

function App(): React.ReactElement {
  return (
    <Main>
      <h1>React dark mode</h1>
      <h2>Using Recoil js & styled-components</h2>
      <DarkModeSwitchButton />
    </Main>
  );
}

export default App;
```

## Tenth step (bonus) : Get user's prefers color scheme

Get user's prefers color scheme in `src/store/index.ts`

```ts
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
```

Enjoy your dark mode 🌙
