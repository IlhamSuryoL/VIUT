import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Styles from '../styles/Styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BackButton = () => {
  return (
    <Pressable style={[Styles.bottomButtonStyle, { backgroundColor: '#D63231' }]}>
      <View style={{ transform: [{ rotateX: '180deg' }, { rotateZ: '180deg' }], width: 80, height: 80 }}>
        <MaterialCommunityIcons name="share-outline" size={80} color="#fff" />
      </View>
    </Pressable>
  )
}

export default BackButton