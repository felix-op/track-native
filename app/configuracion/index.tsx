import { View } from "react-native";
import Opcion from "./components/Opcion";
import useTheme from "@shared/base/theme/useTheme";
import { useCallback } from "react";

export default function VistaConfiguracion() {
    const { themeName, setTheme } = useTheme();

    const toggleTheme = useCallback(() => {
        console.log("Tema: ", themeName)
        if (themeName==="light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, [themeName, setTheme]);

    return (
        <View>
            <Opcion
                label={themeName==="light" ? "Tema Oscuro" : "Tema Claro"}
                icon={themeName==="light" ? "moon-outline" : "sunny-outline"}
                onPress={toggleTheme}
            />
        </View>
    );
}
