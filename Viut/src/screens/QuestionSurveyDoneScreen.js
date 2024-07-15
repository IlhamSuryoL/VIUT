import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ViewBlack from '../components/ViewBlack'
import SurveyDone from '../components/SurveyDone'
import Button from '../components/Button'
import { useAtomValue } from 'jotai'
import { questionAtom } from '../store'

const QuestionSurveyDoneScreen = ({ navigation, route }) => {
  const questions = useAtomValue(questionAtom)
  const { productId } = route.params
  const [totalScore, setTotalScore] = useState(null)
  const calculateScore = (questions) => {
    const total = questions.reduce((sum, question) => sum + question.score, 0);
    const length = questions.length
    setTotalScore(total / length)
  }
  useEffect(() => {
    calculateScore(questions)
  }, [questions])

  return (
    <ViewBlack accessible>
      <SurveyDone labelTop={"Anda telah menyelesaikan Survey VIAT-Q ini! Berikut hasil penilaiannya"} labelBottom={"Silahkan melanjutkan penilaian untuk Survey NPS"}
        totalScore={totalScore || ""}
      />
      <Button text={"Survey NPS"} style={{ backgroundColor: '#25AE74', marginTop: 60 }}
        onPress={() => navigation.navigate("NPSQuestionScreen", {
          productId,
          viatScore: totalScore
        })}
        accessibilityRole={"button"} accessibilityHint={"klik untuk melanjutkan survey nps"} />
    </ViewBlack>
  )
}

export default QuestionSurveyDoneScreen