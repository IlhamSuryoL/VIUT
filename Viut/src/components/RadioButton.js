import { View, Text, Pressable } from 'react-native'
import React from 'react'
import colors from '../styles/colors'

const RadioButton = ({ size = 24, active, onPress, accessibilityLabel,
  accessibilityHint,
  accessibilityRole }) => {
  return (
    <Pressable onPress={onPress} style={{
      backgroundColor: active ? colors.blue : "#fff", width: size, height: size,
      borderWidth: 1, borderColor: '#fff', borderRadius: size / 2
    }} accessibilityHint={accessibilityHint} accessibilityLabel={accessibilityLabel} accessibilityRole={accessibilityRole} />
  )
}

export default RadioButton