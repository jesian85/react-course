import { useCallback, useState } from "react";
import { ThemeContext } from "./context";

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({ themeName: 'light' });
    const changeTheme = useCallback((theme) => setTheme(theme), []);
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};