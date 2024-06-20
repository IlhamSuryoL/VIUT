import { View, Text, Pressable } from 'react-native'
import React from 'react'
import TextPrimary from './TextPrimary'
import colors from '../styles/colors'

const Button = ({
  onPress,
  style,
  text
}) => {
  return (
    <Pressable style={[{
      backgroundColor: colors.blue,
      paddingVertical: 20,
      borderRadius: 10
    }, style]}>
      <TextPrimary text={"Login"} />
    </Pressable>
  )
}

export default Button