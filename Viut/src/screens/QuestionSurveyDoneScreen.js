import { View, Text } from 'react-native'
import React from 'react'
import ViewBlack from '../components/ViewBlack'
import SurveyDone from '../components/SurveyDone'
import Button from '../components/Button'

const QuestionSurveyDoneScreen = ({ navigation }) => {
  return (
    <ViewBlack accessible>
      <SurveyDone labelTop={"Anda telah menyelesaikan Survey VIAT-Q ini! Berikut hasil penilaiannya"} labelBottom={"Silahkan melanjutkan penilaian untuk Survey NPS"} />
      <Button text={"Survey NPS"} style={{ backgroundColor: '#25AE74', marginTop: 60 }} onPress={() => navigation.navigate("NPSQuestionScreen")} accessibilityRole={"button"} accessibilityHint={"klik untuk melanjutkan survey nps"} />
    </ViewBlack>
  )
}

export default QuestionSurveyDoneScreen