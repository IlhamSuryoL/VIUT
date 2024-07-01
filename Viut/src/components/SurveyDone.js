import { View, Text } from 'react-native'
import React from 'react'
import TextSmall from './TextSmall'
import TextPrimary from './TextPrimary'
import colors from '../styles/colors'

const SurveyDone = () => {
  return (
    <View>
      <TextSmall text="Anda telah menyelesaikan Survey VIAT-Q ini! Berikut hasil penilaiannya" style={{ textAlign: 'center' }} />
      <View style={{ paddingHorizontal: 28, paddingVertical: 14, backgroundColor: colors.blue, borderRadius: 10, marginVertical: 80 }}>
        <TextPrimary text={"Nama user"} />
        <TextPrimary text={"Score : 5"} />
      </View>
      <TextSmall text="Silahkan melanjutkan penilaian untuk Survey NPS" style={{ textAlign: 'center' }} />
    </View>
  )
}

export default SurveyDone