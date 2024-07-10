import { View, Text, Image, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import WrapperView from '../components/WrapperView'
import TextPrimary from '../components/TextPrimary'
import CardGrey from '../components/CardGrey'
import formatTextStyle from '../styles/formatTextStyle'
import ProductImage from '../components/ProductImage'
import TextSmall from '../components/TextSmall'
import { collection, getDocs } from "firebase/firestore";
import { FIRE_DB } from '../../firebaseConfig'
import moment from 'moment'

const ListProductScreen = ({ navigation }) => {
  const [data, setData] = useState([])
  const getProducts = async () => {
    const tampData = []
    const querySnapshot = await getDocs(collection(FIRE_DB, "products"));
    querySnapshot.forEach((doc) => {
      tampData.push({
        id: doc.id,
        ...doc.data()
      })
    });
    setData(tampData)
  }
  useEffect(() => {
    getProducts()
  }, [])

  const _renderProductItem = (product) => {
    const participant = product?.users?.length || 0
    return (
      <Pressable onPress={() => navigation.navigate("ProductDetailScreen", {
        product: product
      })}>
        <CardGrey>
          <View style={{ flexDirection: 'row' }}>
            <ProductImage uri={product.product_image_url} />
            <View style={{ marginLeft: 8 }}>
              <TextPrimary text={product.product_name} style={{ color: '#000', textAlign: 'start', marginBottom: 5 }} />
              <TextSmall text={product.product_description} />
              <TextSmall text={moment(product.create_at).format("MM/DD/YYYY")} />
              <TextSmall text={`Dinilai oleh ${participant} peserta`} />
            </View>
          </View>
        </CardGrey>
      </Pressable>
    )
  }
  return (
    <WrapperView>
      <FlatList
        ListHeaderComponent={<TextPrimary text={"Daftar Produk Anda"} style={{ color: '#000', marginBottom: 19 }} />}
        ItemSeparatorComponent={<View style={{ height: 27 }} />}
        data={data}
        renderItem={({ item }) => _renderProductItem(item)}
        showsVerticalScrollIndicator={false}
      />
    </WrapperView>
  )
}

export default ListProductScreen