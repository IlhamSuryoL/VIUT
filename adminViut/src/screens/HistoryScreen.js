import { View, Text, FlatList } from 'react-native'
import React from 'react'
import WrapperView from '../components/WrapperView'
import TextPrimary from '../components/TextPrimary'
import ProductImage from '../components/ProductImage'
import TextSmall from '../components/TextSmall'

const HistoryScreen = ({ navigation }) => {
  const _renderHistoryItem = (product) => {
    return (
      <View style={{ borderWidth: 1, borderColor: 'grey', borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10 }}>
        <TextPrimary style={{ color: '#000', textAlign: 'flex-start' }} text={product.createAt} />
        <View style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: 'grey', paddingTop: 18 }}>
          <ProductImage />
          <View style={{ marginLeft: 19 }}>
            <TextPrimary style={{ color: '#000', textAlign: "flex-start" }} text={product.productName} />
            <TextSmall text={`Peserta ${product.participant}`} />
            <TextSmall text={`Skor VIAT-Q : ${product.scoreQuestion}`} />
            <TextSmall text={`Skor NPS : ${product.scoreNps}`} />
          </View>
        </View>
      </View>
    )
  }
  return (
    <WrapperView>
      <FlatList
        data={[1, 2, 4]}
        renderItem={() => _renderHistoryItem({
          createAt: "14 April 2024",
          productName: "kacamata",
          participant: 1,
          scoreQuestion: 2,
          scoreNps: 4
        })}
        ItemSeparatorComponent={<View style={{ height: 23 }} />}
        ListHeaderComponent={<TextPrimary style={{ color: '#000', marginBottom: 23 }} text={"Riwayat Penilaian Produk Anda"} />}
      />
    </WrapperView>
  )
}

export default HistoryScreen