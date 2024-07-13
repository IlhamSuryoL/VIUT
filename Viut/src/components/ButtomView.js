import { View, Text } from 'react-native'
import React from 'react'
import BackButton from './BackButton'
import HomeButton from './HomeButton'
import NextButton from './NextButton'

const ButtomView = ({ navigation, onPressNextButton, onPressBackButton }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
      <BackButton onPress={() => onPressBackButton ? onPressBackButton() : navigation.goBack()} />
      <HomeButton onPress={() => navigation.navigate("HomeScreen")} />
      <NextButton onPress={onPressNextButton} />
    </View>
  )
}

export default ButtomView