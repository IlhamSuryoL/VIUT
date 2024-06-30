import { View, Text } from 'react-native'
import React from 'react'
import Styles from '../styles/Styles'
import { AntDesign } from '@expo/vector-icons';

const NextButton = () => {
  return (
    <View style={[Styles.bottomButtonStyle, { backgroundColor: '#25AE74' }]}>
      <AntDesign name="arrowright" size={80} color="white" />
    </View>
  )
}

export default NextButton