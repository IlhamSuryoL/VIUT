import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ViewBlack from '../components/ViewBlack'
import TextSmall from '../components/TextSmall'
import colors from '../styles/colors'
import TextPrimary from '../components/TextPrimary'
import RadioButton from '../components/RadioButton'

const HomeScreen = () => {
  const _renderProductItem = () => {
    return (<View style={{
      paddingHorizontal: 19, paddingVertical: 8, borderRadius: 10,
      backgroundColor: colors.blue, marginBottom: 30, flexDirection: 'row', alignItems: 'center', flex: 1
    }}>
      <RadioButton active={true} />
      <View style={{ flex: 1, marginLeft: 19 }}>
        <TextPrimary text={"Anda sudah memilih produk,Terdapat skala nilai 1 sampai 5"} style={{ textAlign: 'flex-start', marginBottom: 5 }} numberOfLines={1} ellipsizeMode="tail" />
        <TextSmall text="Anda sudah memilih produk,
Terdapat skala nilai 1 sampai 5
Nilai 1 tidak setuju dan nilai 5 setuju Tekan tombol mulai untuk mengisi penilaian"
          numberOfLines={3} ellipsizeMode="tail"
        />
      </View>
    </View>)
  }
  return (
    <ViewBlack>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3]}
        renderItem={() => _renderProductItem()}
        ListHeaderComponent={<TextSmall style={{ marginBottom: 30 }} text={"Anda ingin menguji apa?"} />}
        ListFooterComponent={<View style={{ paddingHorizontal: 26, backgroundColor: '#1B478D', height: 131, justifyContent: 'center' }}>
          <TextSmall style={{ textAlign: 'center' }} text={"Terdapat beberapa pilihan produk, silahkan pilih produk yang ingin anda uji"} />
        </View>}
      />

    </ViewBlack>
  )
}

export default HomeScreen