import { ReactNode, useState } from "react";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import usePersistedState from "../../hooks/usePersistedState";
import { DarkTheme, LightTheme } from "../../theme";
import { SettingsContext, Theme } from "./context";

type Props = {
  children: ReactNode;
};

const SettingsProvider = ({ children }: Props) => {
  const [theme, setTheme] = usePersistedState<Theme>('theme', 'light');
  const [lang, setLang] = useState('en');

  const oppositeTheme = theme === 'light' ? 'dark' : 'light';
  const selectedTheme = theme === 'light' ? LightTheme : DarkTheme;

  const { breakpoints } = selectedTheme;
  const isSmDown = useMediaQuery(breakpoints.down('sm'));
  const isMdDown = useMediaQuery(breakpoints.down('md'));

  const toggleTheme = () => setTheme(oppositeTheme);

  // useEffect(() => {
  // const userBrowserTheme = window.matchMedia('(prefers-color-scheme: dark)');
  //   const changeTheme = (isDarkTheme: boolean) => {
  //     if (isDarkTheme) {
  //       setTheme('dark');
  //     } else {
  //       setTheme('light');
  //     };
  //   };

  //   changeTheme(userBrowserTheme.matches);

  // }, []);


  const providerValues: SettingsContext = {
    theme,
    oppositeTheme,
    toggleTheme,
    isSmDown,
    isMdDown,
    lang,
    setLang
  };

  return (
    <SettingsContext.Provider value={providerValues}>
      <ThemeProvider theme={selectedTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
