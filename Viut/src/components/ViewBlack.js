import { View, Text } from 'react-native'
import React from 'react'
import colors from '../styles/colors'

const ViewBlack = ({ children }) => {
  return (
    <View style={{ backgroundColor: colors.black, flex: 1, paddingHorizontal: 20, paddingTop: 35 }}>
      {children}
    </View>
  )
}

export default ViewBlack