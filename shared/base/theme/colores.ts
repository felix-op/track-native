import { createContext } from "react";
import { Ionicons } from "@expo/vector-icons";

export const COLORES = {
    light: {
        name: "light",
        label: "Tema Claro",
        colores: {
            background: '#ddd',
            opcionBackground: '#bbb',
            opcionPressed: '#ccc',
            navbar: '#bbb',
            navbarButton: '#bbb',
            navbarButtonPressed: '#ccc',
            shadow: '#000000',
            text: '#333',
            textSecondary: '#555',
            primary: '#2F7172',
            border: '#aaa',
        },
    },
    dark: {
        name: "dark",
        label: "Tema Oscuro",
        colores: {
            background: '#3B404D',
            opcionBackground: '#4B505D',
            opcionPressed: '#2B303D',
            navbar: '#4B505D',
            navbarButton: '#4B505D',
            navbarButtonPressed: '#3B404D',
            shadow: '#000000',
            text: '#DFE9ED',
            textSecondary: '#bbb',
            primary: '#4F9192',
            border: '#666',
        },
    },
} as const;

// Tipos
export type ThemeKey = keyof typeof COLORES;

// Definición de la estructura de colores
export interface ColorAttributes {
    background: string;
    opcionBackground: string;
    opcionPressed: string;
    navbar: string;
    navbarButton: string;
    navbarButtonPressed: string;
    shadow: string;
    text: string;
    textSecondary: string,
    primary: string;
    border: string;
    // Agrega aquí más tokens (secondary, error, surface, etc.)
}

export interface ThemeContextType {
    theme: ColorAttributes;
    themeName: string;
    currentThemeKey: ThemeKey;
    setTheme: (nextTheme: ThemeKey) => void;
}

export type IonicIconName = keyof typeof Ionicons.glyphMap;

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;
