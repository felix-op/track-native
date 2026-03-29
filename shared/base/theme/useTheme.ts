/**
 * Hook personalizado con validación de nulidad.
 */

import { useContext } from "react";
import ThemeContext, { ThemeContextType } from "./colores";

export default function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error(
            "useTheme debe ser utilizado dentro de un ThemeProvider",
        );
    }
    return context;
}
