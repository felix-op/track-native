import { Link, usePathname } from "expo-router";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "@shared/base/theme/useTheme";
import { IonicIconName } from "shared/base/theme/colores";

type NavbarItemProps = {
    url: string;
    label: string;
    icono: IonicIconName;
};

export default function NavbarItem({ url, label, icono }: NavbarItemProps) {
    const { theme } = useTheme();
    const pathname = usePathname();

    return (
        <Link href={url}>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:pathname === url ? theme.navbarButtonPressed : theme.navbar,
                    borderRadius: 80,
                    padding: 4,
                    height: 60,
                    width: 60,
                }}
            >
                <Ionicons
                    name={icono}
                    size={25}
                    color={pathname === url ? theme.primary : theme.text}
                />
            </View>
        </Link>
    );
}
