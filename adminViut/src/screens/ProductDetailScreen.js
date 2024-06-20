import { View, Text, FlatList } from 'react-native'
import React from 'react'
import WrapperView from '../components/WrapperView'
import TextPrimary from '../components/TextPrimary'
import CardGrey from '../components/CardGrey'
import TextSmall from '../components/TextSmall'
import formatTextStyle from '../styles/formatTextStyle'
import colors from '../styles/colors'
import ProductImage from '../components/ProductImage'

const ProductDetailScreen = () => {
  const _renderParticipantItem = (participant) => {
    return (
      <CardGrey>
        <TextPrimary text={participant.participantName} style={{ color: '#000', textAlign: 'start' }} />
        <TextSmall text={`VIAT-Q : ${participant.questionScore}`} />
        <TextSmall text={`NPS : ${participant.npsScore}`} />
      </CardGrey>
    )
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
        data={[1, 2, 3]}
        renderItem={() => _renderParticipantItem({
          participantName: "Test",
          questionScore: 2,
          npsScore: 23
        })}
        ListHeaderComponent={<View style={{ marginBottom: 20 }}>
          <TextPrimary text={"Naviku"} style={{ color: '#000' }} />
          <View style={{ flexDirection: 'row', flex: 1, marginTop: 19, marginBottom: 26 }}>
            <ProductImage />
            <View style={{ padding: 10, borderWidth: 1, borderColor: "#000", borderRadius: 10, flex: 1, marginLeft: 16 }}>
              <TextSmall text={"Aplikasi untuk membantu navigasi penyandang tunanetra Aplikasi untuk membantu navigasi penyandang tunanetra Aplikasi untuk membantu navigasi penyandang tunanetra"} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {_renderTotalScore("Rata-rata VIAT-Q", "4.5")}
            <View style={{ width: 15 }} />
            {_renderTotalScore("Rata-rata NPS", "80")}
          </View>
        </View>}
        ItemSeparatorComponent={<View style={{ height: 20 }} />}
      />
    </WrapperView>
  )
}

export default ProductDetailScreen