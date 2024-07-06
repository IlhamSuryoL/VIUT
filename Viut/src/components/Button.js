import { View, Text, Pressable } from 'react-native'
import React from 'react'
import TextPrimary from './TextPrimary'
import colors from '../styles/colors'

const Button = ({
  onPress,
  style,
  text,
  iconLeft,
  textStyle,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole
}) => {
  return (
    <Pressable style={[{
      backgroundColor: colors.blue,
      paddingVertical: 20,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }, style]} onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole={accessibilityRole}
    >
      {iconLeft}
      <TextPrimary text={text} style={textStyle} />
    </Pressable>
  )
}

export default Button