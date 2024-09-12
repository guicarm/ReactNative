import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export default function Home() {

    const { theme } = useTheme()
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme === 'light' ? '#fff' : '#333',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

