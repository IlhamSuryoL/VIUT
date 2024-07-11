import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import colors from '../styles/colors'

const FullLoading = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.4)',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}>
      <ActivityIndicator size="large" color={colors.blue} />
    </View>
  )
}

export default FullLoading