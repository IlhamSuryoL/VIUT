import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Styles from '../styles/Styles';

const HomeButton = ({ onPress }) => {
  return (
    <Pressable style={[Styles.bottomButtonStyle, { backgroundColor: '#F4B739' }]} onPress={onPress}>
      <MaterialCommunityIcons name="home-outline" size={80} color="black" />
    </Pressable>
  )
}

export default HomeButton