import { View, Platform } from "react-native";
import useTheme from "../theme/useTheme";

import NavbarItem from "./NavbarItem";
import { IonicIconName } from "../theme/colores";

type TLink = {
    url: string;
    label: string;
    icono: IonicIconName;
};

const links: TLink[] = [
    {
        url: "/",
        label: "General",
        icono: "home",
    },
    {
        url: "/configuracion",
        label: "Configuracion",
        icono: "build-outline",
    },
];

export default function Navbar() {
    const { theme } = useTheme();

    return (
        <View style={{ alignItems: "center" }}>
            <View
                style={{
                    backgroundColor: theme.navbar,
                    borderColor: theme.border,
                    borderWidth: 1,
                    borderRadius: 80,
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    height: 66,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    shadowColor: theme.shadow,
                    ...Platform.select({
                        ios: {
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                        },
                        android: {
                            elevation: 3,
                        },
                    }),
                }}
            >
                {links.map((link) => (
                    <NavbarItem key={link.url} {...link} />
                ))}
            </View>
        </View>
    );
}
