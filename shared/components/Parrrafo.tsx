import useTheme from "@shared/base/theme/useTheme";
import { ReactNode } from "react";
import { Text } from "react-native";

type ParrafoProps = {
    children: ReactNode;
};

export default function Parrafo({ children }: ParrafoProps) {
    const { theme } = useTheme();
    return (
        <Text style={{ color: theme.textSecondary, fontSize: 16 }}>
            {children}
        </Text>
    );
}
