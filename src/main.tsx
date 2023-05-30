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
