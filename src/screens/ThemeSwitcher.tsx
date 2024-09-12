import { Button, Text, View } from "react-native";
import { useTheme } from "../hooks/useTheme";

export default function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme()
    return (
        <View>
            <Text>Tema Atual: {theme}</Text>
            <Button title="Alterar Tema " onPress={toggleTheme} />
        </View>
    )
}