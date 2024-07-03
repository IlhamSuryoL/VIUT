import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import ViewBlack from '../components/ViewBlack'
import TextSmall from '../components/TextSmall'
import colors from '../styles/colors'
import TextPrimary from '../components/TextPrimary'
import RadioButton from '../components/RadioButton'
import NextButton from '../components/NextButton'
const copyBeforeSelect = "Terdapat beberapa pilihan produk, silahkan pilih produk yang ingin anda uji"
const copyAfterSelect = "Tekan tombol selanjutnya untuk memulai penilaian"
const HomeScreen = ({ navigation }) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(null)
  const _renderProductItem = (index) => {
    return (<Pressable
      onPress={() => setSelectedProductIndex(index)}
      style={{
        paddingHorizontal: 19, paddingVertical: 8, borderRadius: 10,
        backgroundColor: colors.blue, marginBottom: 30, flexDirection: 'row', alignItems: 'center', flex: 1
      }}>
      <RadioButton active={index === selectedProductIndex} />
      <View style={{ flex: 1, marginLeft: 19 }}>
        <TextPrimary text={"Anda sudah memilih produk,Terdapat skala nilai 1 sampai 5"} style={{ textAlign: 'flex-start', marginBottom: 5 }} numberOfLines={1} ellipsizeMode="tail" />
        <TextSmall text="Anda sudah memilih produk,
Terdapat skala nilai 1 sampai 5
Nilai 1 tidak setuju dan nilai 5 setuju Tekan tombol mulai untuk mengisi penilaian"
          numberOfLines={3} ellipsizeMode="tail"
        />
      </View>
    </Pressable>)
  }
  return (
    <ViewBlack>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3]}
        renderItem={({ index }) => _renderProductItem(index)}
        ListHeaderComponent={<TextSmall style={{ marginBottom: 30 }} text={"Anda ingin menguji apa?"} />}
        ListFooterComponent={
          <>
            <View style={{ paddingHorizontal: 26, backgroundColor: '#1B478D', height: 131, justifyContent: 'center' }}>
              <TextSmall style={{ textAlign: 'center' }} text={selectedProductIndex === null ? copyBeforeSelect : copyAfterSelect} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 26, height: 80 }}>
              {selectedProductIndex !== null &&
                <NextButton onPress={() => navigation.navigate("StartSurveyScreen")} />
              }
            </View>
          </>
        }
      />

    </ViewBlack>
  )
}

export default HomeScreen