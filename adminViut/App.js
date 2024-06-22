import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import ListProductScreen from './src/screens/ListProductScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import HistoryScreen from './src/screens/HistoryScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      {/* <ProductDetailScreen /> */}
      <HistoryScreen />
    </SafeAreaView>
  );
}
