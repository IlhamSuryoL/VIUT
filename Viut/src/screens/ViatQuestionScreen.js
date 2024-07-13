import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import ViewBlack from '../components/ViewBlack'
import TextSmall from '../components/TextSmall'
import ButtomView from '../components/ButtomView'
import ChoosePoint from '../components/ChoosePoint'
import { useAtom, useAtomValue } from 'jotai'
import { questionAtom } from '../store'

const ViatQuestionScreen = ({ navigation, route }) => {
  const [questions, setQuestion] = useAtom(questionAtom)
  const [selectedPoint, setSelectedPoint] = useState(null)
  const [indexQuestion, setIndexQuestion] = useState(0)
  const { productId } = route.params
  const onProsesSurvey = () => {
    if (indexQuestion >= questions.length - 1) {
      navigation.navigate("QuestionSurveyDoneScreen", {
        productId
      })
    } else {
      if (!selectedPoint) {
        Alert.alert("", "Sebelum melanjutkan silahkan berikan penilaian anda")
        return;
      }
      setIndexQuestion((prev) => prev + 1)
      setSelectedPoint(null)
    }
  }

  const addScoreToQuestion = (score) => {
    setQuestion((questions) => {
      const tampQuestion = [...questions]
      tampQuestion[indexQuestion] = {
        ...tampQuestion[indexQuestion],
        score: score
      }
      return tampQuestion
    })
  }

  return (
    <ViewBlack accessible>
      <View style={{ flex: 1, justifyContent: "center" }} >
        <TextSmall text={questions[indexQuestion].question}
          style={{ textAlign: 'center', marginBottom: 50 }}
        />
        <ChoosePoint selectedPoint={selectedPoint} setSelectedPoint={(point) => {
          addScoreToQuestion(point)
          setSelectedPoint(point)
        }} />
      </View>
      <ButtomView navigation={navigation} onPressNextButton={() => onProsesSurvey()} onPressBackButton={() => {
        if (indexQuestion <= 0) {
          navigation.goBack()
        } else {
          setIndexQuestion((prev) => prev - 1)
        }
      }} />
    </ViewBlack>
  )
}

export default ViatQuestionScreen