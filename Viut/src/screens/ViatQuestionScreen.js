import { View, Text } from 'react-native'
import React, { useState } from 'react'
import ViewBlack from '../components/ViewBlack'
import TextSmall from '../components/TextSmall'
import ButtomView from '../components/ButtomView'
import ChoosePoint from '../components/ChoosePoint'

const ViatQuestionScreen = ({ navigation }) => {
  const [selectedPoint, setSelectedPoint] = useState(null)
  return (
    <ViewBlack>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TextSmall text="Pertanyaan bla bla bla bla bla"
          style={{ textAlign: 'center', marginBottom: 50 }}
        />
        <ChoosePoint selectedPoint={selectedPoint} setSelectedPoint={(point) => setSelectedPoint(point)} />
      </View>
      <ButtomView nextScreen={"QuestionSurveyDoneScreen"} navigation={navigation} />
    </ViewBlack>
  )
}

export default ViatQuestionScreen