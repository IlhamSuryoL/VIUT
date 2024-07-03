import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
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
            name='RegisterScreen'
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
              title: "Beranda",
              headerBackVisible: false,
              headerTitleAlign: 'center',
            }}
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
    </SafeAreaView>
  );
}


