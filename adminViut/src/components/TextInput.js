import { View, Text, TextInput } from 'react-native'
import React from 'react'

const TextInputWithLabel = ({ label, iconLeft, placeholder, containerStyle, labelStyle, containerInputStyle, multiline, inputStyle, numberOfLines }) => {
  return (
    <View style={containerStyle}>
      <Text style={[{ color: '#fff', marginBottom: 5 }, labelStyle]}>{label}</Text>
      <View style={[{ backgroundColor: '#E6E6E7', borderRadius: 10, paddingVertical: 22, flexDirection: 'row', paddingHorizontal: 20 }, containerInputStyle]}>
        {iconLeft}
        <TextInput style={[{ marginLeft: 12, flex: 1 }, inputStyle]} placeholder={placeholder} placeholderTextColor="#AAA9A9"
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
      </View>
    </View>
  )
}

export default TextInputWithLabel