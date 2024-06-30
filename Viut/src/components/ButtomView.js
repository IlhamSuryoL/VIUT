import { View, Text } from 'react-native'
import React from 'react'
import BackButton from './BackButton'
import HomeButton from './HomeButton'
import NextButton from './NextButton'

const ButtomView = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
      <BackButton />
      <HomeButton />
      <NextButton />
    </View>
  )
}

export default ButtomView