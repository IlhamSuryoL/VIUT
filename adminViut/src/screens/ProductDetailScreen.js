import { View, Text, FlatList } from 'react-native'
import React from 'react'
import WrapperView from '../components/WrapperView'
import TextPrimary from '../components/TextPrimary'
import CardGrey from '../components/CardGrey'
import TextSmall from '../components/TextSmall'
import formatTextStyle from '../styles/formatTextStyle'
import colors from '../styles/colors'
import ProductImage from '../components/ProductImage'

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params
  const _renderParticipantItem = (participant) => {
    return (
      <CardGrey>
        <TextPrimary text={participant.name} style={{ color: '#000', textAlign: 'start' }} />
        <TextSmall text={`VIAT-Q : ${participant.viat_score}`} />
        <TextSmall text={`NPS : ${participant.nps_score}`} />
      </CardGrey>
    )
  }
  const averageVIAT = (users) => {
    if (!users) return "0"
    const totalUser = users.length
    let totalVIAT = 0
    users.map(user => {
      totalVIAT += user.viat_score
    });
    const total = totalVIAT / totalUser
    return total.toFixed(2)
  }
  const averageNPS = (users) => {
    if (!users) return "0"
    const totalUser = users.length
    let promoter = 0
    let detractor = 0
    users.map(user => {
      if (user.nps_score > 8) promoter++
      if (user.nps_score < 7) detractor++
    });
    let persenPromotor = (promoter / totalUser) * 100
    let persenDetector = (detractor / totalUser) * 100
    return persenPromotor - persenDetector
  }
  const _renderTotalScore = (label, score) => {
    return (
      <View style={{ backgroundColor: colors.blue, flex: 1, alignItems: 'center', borderRadius: 10, padding: 7 }}>
        <Text style={formatTextStyle({
          color: '#fff',
          fontSize: 16,
          fontWeight: '700'
        })}>{label}</Text>
        <Text style={formatTextStyle({
          color: '#fff',
          fontSize: 24,
          fontWeight: '700'
        })}>{score}</Text>
      </View>
    )
  }
  return (
    <WrapperView>
      <FlatList
        keyExtractor={(i, index) => index.toString()}
        data={product?.users || []}
        renderItem={({ item }) => _renderParticipantItem(item)}
        ListHeaderComponent={<View style={{ marginBottom: 20 }}>
          <TextPrimary text={product.product_name} style={{ color: '#000' }} />
          <View style={{ flexDirection: 'row', flex: 1, marginTop: 19, marginBottom: 26 }}>
            <ProductImage uri={product.product_image_url} />
            <View style={{ padding: 10, borderWidth: 1, borderColor: "#000", borderRadius: 10, flex: 1, marginLeft: 16 }}>
              <TextSmall text={product.product_description} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {_renderTotalScore("Rata-rata VIAT-Q", averageVIAT(product?.users))}
            <View style={{ width: 15 }} />
            {_renderTotalScore("Rata-rata NPS", averageNPS(product?.users) + "%")}
          </View>
        </View>}
        ItemSeparatorComponent={<View style={{ height: 20 }} />}
      />
    </WrapperView>
  )
}

export default ProductDetailScreen