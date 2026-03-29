import { ReactNode } from "react";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import useTheme from "../theme/useTheme";
import Navbar from "./Navbar";

type MainLayoutProps = {
    children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
    const { theme } = useTheme();

    return (
        <SafeAreaProvider>
            <StatusBar style="auto" />

            <SafeAreaView
                style={{
                    backgroundColor: theme.background,
                    justifyContent: "space-between",
                    flex: 1,
                    padding: 20,
                }}
            >
                <View style={{ flex: 1 }}>
                    {children}
                </View>
                <Navbar />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
