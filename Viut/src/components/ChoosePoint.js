import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import RadioButton from './RadioButton'
import TextPrimary from './TextPrimary'
import TextSmall from './TextSmall'

const ChoosePoint = ({ hideStartText, hideEndText, startIndex = 1, selectedPoint, setSelectedPoint }) => {
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
        {Array.from({ length: 5 }).map((item, index) => {
          const point = index + startIndex
          return <Pressable key={point} style={{ marginBottom: 6, marginHorizontal: 5 }} onPress={() => setSelectedPoint(point)}>
            <RadioButton size={45} active={selectedPoint == point} onPress={() => setSelectedPoint(point)} accessibilityLabel={"Skor yang anda berikan adalah " + point} accessibilityHint={"klik ditombol kanan bawah untuk proses selanjutnya"} />
            <TextPrimary text={point} style={{ marginTop: 8 }} accessibilityLabel={"Skor yang anda berikan adalah " + point} accessibilityHint={"klik ditombol kanan bawah untuk proses selanjutnya"} />
          </Pressable>
        }
        )}
      </View>
    </View>
  )
}

export default ChoosePoint