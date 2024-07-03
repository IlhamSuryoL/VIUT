import { View, Text } from 'react-native'
import React from 'react'
import ViewBlack from '../components/ViewBlack'
import SurveyDone from '../components/SurveyDone'
import Button from '../components/Button'

const QuestionSurveyDoneScreen = ({ navigation }) => {
  return (
    <ViewBlack>
      <SurveyDone />
      <Button text={"Survey NPS"} style={{ backgroundColor: '#25AE74', marginTop: 60 }} onPress={() => navigation.navigate("NPSQuestionScreen")} />
    </ViewBlack>
  )
}

export default QuestionSurveyDoneScreen