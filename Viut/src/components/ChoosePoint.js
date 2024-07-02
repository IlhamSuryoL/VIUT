import { View, Text, FlatList } from 'react-native'
import React from 'react'
import RadioButton from './RadioButton'
import TextPrimary from './TextPrimary'
import TextSmall from './TextSmall'

const ChoosePoint = ({ hideStartText, hideEndText, startIndex = 1, selectedIndex }) => {
  return (
    <View>
      <View style={{ flexDirection: 'row', marginBottom: 8, justifyContent: 'space-between' }}>
        {!hideStartText && <TextSmall text="Tidak setuju" />}
        {(!hideStartText || !hideEndText) && <View />}
        {!hideEndText && <TextSmall text="Setuju" />}
      </View>
      <View style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between'
      }}>
        {Array.from({ length: 5 }).map((item, index) => <View key={index + startIndex} style={{ marginBottom: 6, marginHorizontal: 5 }}>
          <RadioButton size={55} active={selectedIndex == index} />
          <TextPrimary text={index + startIndex} style={{ marginTop: 8 }} />
        </View>
        )}
      </View>
    </View>
  )
}

export default ChoosePoint