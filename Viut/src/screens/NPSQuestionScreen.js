import { View, Text } from 'react-native'
import React, { useState } from 'react'
import ViewBlack from '../components/ViewBlack'
import TextSmall from '../components/TextSmall'
import ButtomView from '../components/ButtomView'
import ChoosePoint from '../components/ChoosePoint'

const NPSQuestionScreen = ({ navigation }) => {
  const [selectedPoint, setSelectedPoint] = useState(null)
  return (
    <ViewBlack>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TextSmall text="Anda sudah memilih produk,
Terdapat skala nilai 1 sampai 5
Nilai 1 tidak setuju dan nilai 5 setuju Tekan tombol mulai untuk mengisi penilaian"
          style={{ textAlign: 'center', marginBottom: 50 }}
        />
        <ChoosePoint hideEndText selectedPoint={selectedPoint} setSelectedPoint={(index) => setSelectedPoint(index)} />
        <ChoosePoint startIndex={6} hideStartText selectedPoint={selectedPoint} setSelectedPoint={(index) => setSelectedPoint(index)} />
      </View>
      <ButtomView navigation={navigation} nextScreen={"NPSSurveyScreen"} />
    </ViewBlack>
  )
}

export default NPSQuestionScreen