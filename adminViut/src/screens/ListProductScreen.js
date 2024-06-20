import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import WrapperView from '../components/WrapperView'
import TextPrimary from '../components/TextPrimary'
import CardGrey from '../components/CardGrey'
import formatTextStyle from '../styles/formatTextStyle'
import ProductImage from '../components/ProductImage'
import TextSmall from '../components/TextSmall'

const ListProductScreen = () => {
  const _renderText = (label) => {
    return <Text style={[formatTextStyle({
      color: '#000',
      fontSize: 16,
      fontWeight: '400'
    })]}>{label}</Text>
  }
  const _renderProductItem = (product) => {
    return (
      <CardGrey>
        <View style={{ flexDirection: 'row' }}>
          <ProductImage />
          <View style={{ marginLeft: 8 }}>
            <TextPrimary text={product.productName} style={{ color: '#000', textAlign: 'start', marginBottom: 5 }} />
            <TextSmall text={product.productDescription} />
            <TextSmall text={product.createAt} />
            <TextSmall text={`Dinilai oleh ${product.participant} peserta`} />
          </View>
        </View>
      </CardGrey>
    )
  }
  return (
    <WrapperView>
      <FlatList
        ListHeaderComponent={<TextPrimary text={"Daftar Produk Anda"} style={{ color: '#000', marginBottom: 19 }} />}
        ItemSeparatorComponent={<View style={{ height: 27 }} />}
        data={[1, 2, 3]}
        renderItem={() => _renderProductItem({
          productName: "Test",
          productDescription: "Halo",
          createAt: "12/12/2024",
          participant: 3
        })}
      />
    </WrapperView>
  )
}

export default ListProductScreen