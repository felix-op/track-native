import useTheme from "@shared/base/theme/useTheme";
import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IonicIconName } from "@shared/base/theme/colores";

type OpcionProps = {
    label: string;
    icon: IonicIconName;
    onPress: () => void;
};

export default function Opcion({ label, icon, onPress }: OpcionProps) {
    const { theme } = useTheme();

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => ({
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 10,
                height: 60,
                backgroundColor: pressed
                    ? theme.opcionPressed
                    : theme.opcionBackground,
            })}
        >
            <Ionicons name={icon} size={25} color={theme.text} />
            <Text
                style={{ color: theme.text, fontWeight: "bold", fontSize: 16 }}
            >
                {label}
            </Text>
        </Pressable>
    );
}
