import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Styles from '../styles/Styles'
import { AntDesign } from '@expo/vector-icons';

const NextButton = ({ onPress }) => {
  return (
    <Pressable style={[Styles.bottomButtonStyle, { backgroundColor: '#25AE74' }]} onPress={onPress} accessibilityLabel='tombol next' accessibilityRole='button' accessibilityHint='klik untuk ke halaman selanjutnya' >
      <AntDesign name="arrowright" size={80} color="white" />
    </Pressable>
  )
}

export default NextButton