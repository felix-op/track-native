import MainLayout from "@shared/base/layout/MainLayout";
import { ThemeProvider } from "@shared/base/theme/ThemeProvider";
import { Slot } from "expo-router";

export default function RootLayout() {
    return (
        <ThemeProvider>
            <MainLayout>
                <Slot />
            </MainLayout>
        </ThemeProvider>
    );
}
