import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Styles from '../styles/Styles';

const HomeButton = () => {
  return (
    <View style={[Styles.bottomButtonStyle, { backgroundColor: '#F4B739' }]}>
      <MaterialCommunityIcons name="home-outline" size={80} color="black" />
    </View>
  )
}

export default HomeButton