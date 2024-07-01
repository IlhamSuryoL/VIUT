import { View, Text } from 'react-native'
import React from 'react'
import ViewBlack from '../components/ViewBlack'
import TextSmall from '../components/TextSmall'
import ButtomView from '../components/ButtomView'
import ChoosePoint from '../components/ChoosePoint'

const ViatQuestionScreen = () => {
  return (
    <ViewBlack>
      <View>
        <TextSmall text="Anda sudah memilih produk,
Terdapat skala nilai 1 sampai 5
Nilai 1 tidak setuju dan nilai 5 setuju Tekan tombol mulai untuk mengisi penilaian"
          style={{ textAlign: 'center' }}
        />
        <ChoosePoint />
      </View>
      <ButtomView />
    </ViewBlack>
  )
}

export default ViatQuestionScreen