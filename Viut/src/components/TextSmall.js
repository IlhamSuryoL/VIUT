import { View, Text } from 'react-native'
import React from 'react'
import formatTextStyle from '../styles/formatTextStyle'

const TextSmall = (props) => {
  return (
    <Text
      {...props}
      style={[formatTextStyle({
        color: '#fff',
        fontSize: 18,
        fontWeight: '400'
      }), props.style]}>{props.text}</Text>
  )
}

export default TextSmall