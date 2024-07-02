import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import StartSurveyScreen from './src/screens/StartSurveyScreen';
import ViatQuestionScreen from './src/screens/ViatQuestionScreen';
import QuestionSurveyDoneScreen from './src/screens/QuestionSurveyDoneScreen';
import NPSSurveyScreen from './src/screens/NPSSurveyScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <NPSSurveyScreen />
    </SafeAreaView>
  );
}


