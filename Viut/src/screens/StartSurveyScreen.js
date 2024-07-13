import { View, Text } from 'react-native'
import React from 'react'
import ViewBlack from '../components/ViewBlack'
import TextSmall from '../components/TextSmall'
import Button from '../components/Button'
import BackButton from '../components/BackButton'
import HomeButton from '../components/HomeButton'
import NextButton from '../components/NextButton'
import ButtomView from '../components/ButtomView'

const StartSurveyScreen = ({ navigation, route }) => {
  const { productId } = route.params
  const onStartSurvey = () => {
    navigation.navigate("ViatQuestionScreen", {
      productId
    })
  }
  return (
    <ViewBlack>
      <View style={{ justifyContent: 'space-around', flex: 1 }} accessible>
        <TextSmall text="Anda sudah memilih produk,
Terdapat skala nilai 1 sampai 5
Nilai 1 tidak setuju dan nilai 5 setuju Tekan tombol mulai untuk mengisi penilaian"
          style={{ textAlign: 'center' }}
        />
        <Button text="Mulai" style={{ width: 239, alignSelf: 'center', marginVertical: 40 }} onPress={() => onStartSurvey()} />
        <TextSmall text="Anda bisa kembali untuk memilih ulang produk "
          style={{ textAlign: 'center' }}
        />
      </View>
      <ButtomView navigation={navigation}
        onPressNextButton={() => onStartSurvey()} />
    </ViewBlack>
  )
}

export default StartSurveyScreen