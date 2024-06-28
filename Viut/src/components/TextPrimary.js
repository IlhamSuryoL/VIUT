import { View, Text } from 'react-native'
import React from 'react'
import formatTextStyle from '../styles/formatTextStyle'

const TextPrimary = (props) => {
  return (
    <Text
      {...props}
      style={[
        formatTextStyle({
          color: '#fff',
          fontSize: 18,
          fontWeight: '700'
        })
        , {
          textAlign: 'center',
        }, props.style]}
    >{props.text}</Text>

  )
}

export default TextPrimary