import { View, Text } from 'react-native'
import React from 'react'
import formatTextStyle from '../styles/formatTextStyle'

const TextSmall = ({ text }) => {
  return (
    <Text style={[formatTextStyle({
      color: '#000',
      fontSize: 16,
      fontWeight: '400'
    })]}>{text}</Text>
  )
}

export default TextSmall