import { View, Text, Pressable } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import formatTextStyle from '../styles/formatTextStyle'

const ButtonAuthLink = ({ text, cta, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={[formatTextStyle({ color: '#A89B9B', fontSize: 16, fontWeight: '400' }), { textAlign: 'center' }]}>{text} <Text style={formatTextStyle({ color: colors.blue, fontSize: 16, fontWeight: '700' })}>{cta}</Text></Text>
    </Pressable>
  )
}

export default ButtonAuthLink