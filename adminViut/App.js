import { StatusBar } from 'expo-status-bar';
import { Alert, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import ListProductScreen from './src/screens/ListProductScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import AddProduct from './src/screens/AddProduct';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import colors from './src/styles/colors';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { signOut } from 'firebase/auth';
import { AUTH } from './firebaseConfig';
import { Entypo } from '@expo/vector-icons';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <ActionSheetProvider>
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
              options={({ navigation }) => ({
                title: "Home",
                headerBackVisible: false,
                headerTitleAlign: 'center',
                headerRight: () => (
                  <Pressable onPress={() => {
                    Alert.alert(
                      "",
                      "Yakin anda mau logout",
                      [
                        {
                          text: "Cancel",
                          style: "cancel"
                        },
                        {
                          text: "Yakin", onPress: () => {
                            signOut(AUTH).then(() => {
                              navigation.reset({
                                index: 0,
                                routes: [{ name: 'LoginScreen' }],
                              });
                            }).catch(() => {
                              Alert.alert("", "Logout gagal")
                            });
                          }
                        }
                      ]
                    );
                  }}>
                    <Entypo name="log-out" size={24} color="white" />
                  </Pressable>
                )
              })}
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
      </ActionSheetProvider>
    </SafeAreaView>
  );
}
