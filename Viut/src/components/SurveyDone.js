import { View, Text } from 'react-native'
import React from 'react'
import TextSmall from './TextSmall'
import TextPrimary from './TextPrimary'
import colors from '../styles/colors'
import { userAtom } from '../store'
import { useAtomValue } from 'jotai'

const SurveyDone = ({ labelTop, labelBottom, totalScore }) => {
  const user = useAtomValue(userAtom)
  return (
    <View>
      <TextSmall text={labelTop} style={{ textAlign: 'center' }} />
      <View style={{ paddingHorizontal: 28, paddingVertical: 14, backgroundColor: colors.blue, borderRadius: 10, marginVertical: 80 }}>
        <TextPrimary text={user?.name || ""} />
        <TextPrimary text={`Score : ${totalScore}`} />
      </View>
      <TextSmall text={labelBottom} style={{ textAlign: 'center' }} />
    </View>
  )
}

export default SurveyDone