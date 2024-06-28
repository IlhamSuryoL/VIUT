import { View, Text } from 'react-native'
import React from 'react'
import formatTextStyle from '../styles/formatTextStyle'

const TextPrimary = ({ text, style }) => {
  return (
    <Text style={[
      formatTextStyle({
        color: '#fff',
        fontSize: 18,
        fontWeight: '700'
      })
      , {
        textAlign: 'center',
      }, style]}>{text}</Text>

  )
}

export default TextPrimary