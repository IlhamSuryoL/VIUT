import { View, Text } from 'react-native'
import React from 'react'

const CardGrey = ({ children }) => {
  return (
    <View style={{ borderRadius: 10, backgroundColor: '#E9E8E2', borderColor: '#000', padding: 13, borderWidth: 1 }}>
      {children}
    </View>
  )
}

export default CardGrey