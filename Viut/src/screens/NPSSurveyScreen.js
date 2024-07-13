import { View, Text } from 'react-native'
import React from 'react'
import SurveyDone from '../components/SurveyDone'
import ViewBlack from '../components/ViewBlack'
import Button from '../components/Button'

const NPSSurveyScreen = ({ route }) => {
  const { productId, score } = route.params
  return (
    <ViewBlack accessible>
      <SurveyDone labelTop={"Anda telah menyelesaikan Survey NPS! Berikut hasil penilaiannya"} labelBottom={"Anda Telah menyelesaikan semua survey tekan selesai untuk kembali ke beranda"}
        totalScore={score || ""}
      />
      <Button text={"SELESAI"} style={{ marginTop: 60, backgroundColor: '#F4B739' }} textStyle={{ color: '#000' }} accessibilityRole={'button'} accessibilityHint={"Klik untuk menyelesaikan survey"} />
    </ViewBlack>
  )
}

export default NPSSurveyScreen