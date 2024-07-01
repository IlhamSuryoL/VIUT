import { View, Text, FlatList } from 'react-native'
import React from 'react'
import RadioButton from './RadioButton'
import TextPrimary from './TextPrimary'

const ChoosePoint = () => {
  return (
    <View style={{
      flexDirection: "row",
      flexWrap: "wrap"
    }}>
      {[1, 2, 3, 1, 1, 1, 1, 1, 1,].map((item, index) => <View>
        <RadioButton size={55} />
        <TextPrimary text={index + 1} style={{ marginTop: 8 }} />
      </View>
      )}
      <View style={{ backgroundColor: 'red' }}>
        <FlatList
          data={[1, 2, 3, 1, 1, 1, 1, 1, 1,]}
          horizontal

          // style={{ flexWrap: 'wrap', }}
          // contentContainerStyle={{ alignItems: 'flex-start' }}
          ItemSeparatorComponent={<View style={{ width: 11 }} />}
          renderItem={({ index }) => <View>
            <RadioButton size={55} />
            <TextPrimary text={index + 1} style={{ marginTop: 8 }} />
          </View>}
        />
      </View>
    </View>
  )
}

export default ChoosePoint