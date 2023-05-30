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
