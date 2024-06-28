import { View, Text, Pressable } from 'react-native'
import React from 'react'
import TextPrimary from './TextPrimary'
import colors from '../styles/colors'

const Button = ({
  onPress,
  style,
  text,
  iconLeft
}) => {
  return (
    <Pressable style={[{
      backgroundColor: colors.blue,
      paddingVertical: 20,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }, style]} onPress={onPress}>
      {iconLeft}
      <TextPrimary text={text} />
    </Pressable>
  )
}

export default Button