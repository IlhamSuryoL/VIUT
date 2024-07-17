import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import WrapperView from '../components/WrapperView'
import TextPrimary from '../components/TextPrimary'
import ProductImage from '../components/ProductImage'
import TextSmall from '../components/TextSmall'
import FullLoading from '../components/FullLoading'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { FIRE_DB } from '../../firebaseConfig'

const HistoryScreen = ({ navigation }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const getProducts = async () => {
    setLoading(true)
    const tampData = []
    const querySnapshot = await getDocs(query(collection(FIRE_DB, "products"), orderBy("update_at", "desc")));
    querySnapshot.forEach((doc) => {
      const product = doc.data()
      if (product?.users) {
        product.users.forEach((user) => {
          tampData.push({
            id: doc.id,
            ...product,
            ...user
          })
        })
      }
    });
    setData(tampData)
    setLoading(false)
  }
  useEffect(() => {
    getProducts()
  }, [])

  const _renderHistoryItem = (product) => {
    return (
      <View style={{ borderWidth: 1, borderColor: 'grey', borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10 }}>
        <TextPrimary style={{ color: '#000', textAlign: 'flex-start' }} text={product.createAt} />
        <View style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: 'grey', paddingTop: 18 }}>
          <ProductImage uri={product.product_image_url} />
          <View style={{ marginLeft: 19 }}>
            <TextPrimary style={{ color: '#000', textAlign: "flex-start" }} text={product.product_name} />
            <TextSmall text={product?.name || ""} />
            <TextSmall text={`Skor VIAT-Q : ${product.viat_score}`} />
            <TextSmall text={`Skor NPS : ${product.nps_score}`} />
          </View>
        </View>
      </View>
    )
  }
  return (
    <WrapperView>
      <FlatList
        keyExtractor={(i, index) => index.toString()}
        data={data}
        renderItem={({ item }) => _renderHistoryItem(item)}
        ItemSeparatorComponent={<View style={{ height: 23 }} />}
        ListHeaderComponent={<TextPrimary style={{ color: '#000', marginBottom: 23 }} text={"Riwayat Penilaian Produk Anda"} />}
      />
      {loading && <FullLoading />}
    </WrapperView>
  )
}

export default HistoryScreen