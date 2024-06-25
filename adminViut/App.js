import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import ListProductScreen from './src/screens/ListProductScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import AddProduct from './src/screens/AddProduct';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import colors from './src/styles/colors';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{
          headerStyle: {
            backgroundColor: colors.blue,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 24,
          },
        }}>
          <Stack.Screen
            name='LoginScreen'
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
              title: "Home",
              headerBackVisible: false,
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name='AddProduct'
            component={AddProduct}
            options={{ title: "Tambah Produk", }}
          />
          <Stack.Screen
            name='HistoryScreen'
            component={HistoryScreen}
            options={{ title: "Riwayat" }}
          />
          <Stack.Screen
            name='ListProductScreen'
            component={ListProductScreen}
            options={{ title: "Lihat Produk" }}
          />
          <Stack.Screen
            name='ProductDetailScreen'
            component={ProductDetailScreen}
            options={{ title: "Detail produk" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
