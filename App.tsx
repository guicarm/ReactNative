import { StyleSheet } from 'react-native';
import { ThemeProvider } from './src/context/ThemeContext';
import Home from './src/screens/Home';

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
