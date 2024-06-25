import { View, Text } from 'react-native'
import React from 'react'
import TextPrimary from '../components/TextPrimary'
import WrapperView from '../components/WrapperView'
import Button from '../components/Button'
import { AntDesign, Octicons, Ionicons } from '@expo/vector-icons';

const buttonStyle = { justifyContent: 'flex-start' }
const iconStyle = { marginHorizontal: 15 }
const HomeScreen = ({ navigation }) => {
  return (
    <WrapperView>
      <TextPrimary style={{ color: '#000', marginBottom: 60 }} text={"Selamat Datang di Dashboard Admin"} />
      <Button text={"Tambah Produk"}
        style={buttonStyle}
        iconLeft={<AntDesign name="pluscircleo" size={50} color="#fff" style={iconStyle}
        />}
        onPress={() => navigation.navigate("AddProduct")}
      />
      <Button text={"Lihat Produk"} style={[{ marginVertical: 30 }, buttonStyle]}
        iconLeft={<Ionicons name="eye-outline" size={50} color="#fff" style={iconStyle} />}
        onPress={() => navigation.navigate("ListProductScreen")}
      />
      <Button text={"Riwayat"}
        style={buttonStyle}
        iconLeft={<Octicons name="history" size={50} color="#fff" style={iconStyle} />}
        onPress={() => navigation.navigate("HistoryScreen")}
      />
    </WrapperView>
  )
}

export default HomeScreen