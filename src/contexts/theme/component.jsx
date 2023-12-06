import { useCallback, useState } from "react";
import { ThemeContext } from "./context";
import { DARK_THEME, LIGHT_THEME } from "./constants";


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({ themeName: LIGHT_THEME });
    const changeTheme = useCallback(() =>
        setTheme(theme => ({ themeName: theme.themeName === LIGHT_THEME ? DARK_THEME : LIGHT_THEME })), 
        []);
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};