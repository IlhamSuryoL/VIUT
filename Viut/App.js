import { StatusBar } from 'expo-status-bar';
import { Alert, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import StartSurveyScreen from './src/screens/StartSurveyScreen';
import ViatQuestionScreen from './src/screens/ViatQuestionScreen';
import QuestionSurveyDoneScreen from './src/screens/QuestionSurveyDoneScreen';
import NPSSurveyScreen from './src/screens/NPSSurveyScreen';
import NPSQuestionScreen from './src/screens/NPSQuestionScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from './src/styles/colors';
import { Provider } from 'jotai';
import OuthLoadngScreen from './src/screens/AuthLoadngScreen';
import AuthLoadngScreen from './src/screens/AuthLoadngScreen';
import { Entypo } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
import { AUTH } from './firebaseConfig';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Provider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='AuthLoadngScreen' screenOptions={{
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
              name='AuthLoadngScreen'
              component={AuthLoadngScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='LoginScreen'
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='RegisterScreen'
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='HomeScreen'
              component={HomeScreen}
              options={({ navigation }) => ({
                title: "Beranda",
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
              name="StartSurveyScreen"
              component={StartSurveyScreen}
              options={{
                title: "Survey",
                headerBackVisible: false,
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="ViatQuestionScreen"
              component={ViatQuestionScreen}
              options={{
                title: "Survey",
                headerBackVisible: false,
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="QuestionSurveyDoneScreen"
              component={QuestionSurveyDoneScreen}
              options={{
                title: "VIAT-Q Survey",
                headerBackVisible: false,
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="NPSQuestionScreen"
              component={NPSQuestionScreen}
              options={{
                title: "NPS Survey",
                headerBackVisible: false,
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="NPSSurveyScreen"
              component={NPSSurveyScreen}
              options={{
                title: "NPS Survey",
                headerBackVisible: false,
                headerTitleAlign: 'center',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}


