import { View, Text, TextInput } from 'react-native'
import React from 'react'

const TextInputWithLabel = ({ label, iconLeft, placeholder, containerStyle }) => {
  return (
    <View style={containerStyle}>
      <Text style={{ color: '#fff', marginBottom: 5 }}>{label}</Text>
      <View style={{ backgroundColor: '#E6E6E7', borderRadius: 10, paddingVertical: 22, flexDirection: 'row', paddingHorizontal: 20 }}>
        {iconLeft}
        <TextInput style={{ marginLeft: 12 }} placeholder={placeholder} placeholderTextColor="#AAA9A9" />
      </View>
    </View>
  )
}

export default TextInputWithLabel