import { ReactNode, useCallback, useMemo, useState } from "react";
import ThemeContext, { COLORES, ThemeKey } from "./colores";

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [themeKey, setThemeKey] = useState<ThemeKey>("light");

    /**
     * Cambia el tema validando que la key exista.
     * Aunque TS previene errores en compilación, esto maneja entradas dinámicas.
     */
    const changeTheme = useCallback((nextTheme: ThemeKey) => {
        if (!COLORES[nextTheme]) {
            console.warn(
                `[ThemeProvider]: El tema "${nextTheme}" no existe en la configuración.`,
            );
            return;
        }
        setThemeKey(nextTheme);
    }, []);

    // Memoización del valor del contexto para evitar re-renders en los consumidores
    const value = useMemo(
        () => ({
            theme: COLORES[themeKey].colores,
            themeName: COLORES[themeKey].name,
            currentThemeKey: themeKey,
            setTheme: changeTheme,
        }),
        [themeKey, changeTheme],
    );

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
