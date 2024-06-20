import { View, Text } from 'react-native'
import React from 'react'

const WrapperView = ({ children }) => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 20, paddingTop: 35 }}>
      {children}
    </View>
  )
}

export default WrapperView