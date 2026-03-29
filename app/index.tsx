import Parrafo from "@shared/components/Parrrafo";
import Titulo from "@shared/components/Titulo";
import { View } from "react-native";

export default function Home() {
    return (
        <View>
            <Titulo>Hello world</Titulo>
            <Parrafo>
                Hola a todos
            </Parrafo>
        </View>
    );
}
