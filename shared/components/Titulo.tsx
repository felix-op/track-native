import useTheme from "@shared/base/theme/useTheme";
import { ReactNode } from "react";
import { Text } from "react-native";

type TituloProps = {
    children: ReactNode;
};

export default function Titulo({ children }: TituloProps) {
    const { theme } = useTheme();
    return (
        <Text style={{ color: theme.text, fontSize: 30, fontWeight: "bold" }}>
            {children}
        </Text>
    );
}
