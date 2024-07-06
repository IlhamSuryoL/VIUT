import { View, Text } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import Button from '../components/Button'
import ButtonAuthLink from '../components/ButtonAuthLink'
import formatTextStyle from '../styles/formatTextStyle'
import TextInput from '../components/TextInput'
import { Entypo, FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const COLOR_ICON = "#B9B8B8"
const RegisterScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: colors.black, flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={[formatTextStyle({ color: '#fff', fontSize: 24, fontWeight: '700' }), { textAlign: 'center', marginBottom: 60 }]} accessibilityLabel='Halaman register' accessible>Register</Text>
      <TextInput label={"Nama"}
        placeholder={"Masukkan nama anda"}
        iconLeft={<FontAwesome6 name="user" size={24} color={COLOR_ICON} accessibilityLabel="icon nama" />}
      />
      <TextInput label={"Email"}
        placeholder={"Masukkan Email anda"}
        iconLeft={<Entypo name="email" size={24} color={COLOR_ICON} accessibilityLabel="icon email" />}
        containerStyle={{ marginTop: 20 }}
      />
      <TextInput label={"password"}
        placeholder={"Masukkan password anda"}
        iconLeft={<MaterialIcons name="lock-outline" size={24} color={COLOR_ICON} accessibilityLabel="icon password" />}
        containerStyle={{ marginTop: 20 }}
      />
      <Button text="Daftar" style={{ width: 239, alignSelf: 'center', marginVertical: 40 }} onPress={() => navigation.navigate('HomeScreen')}
        accessibilityLabel={"Register"}
        accessibilityHint={"Klik untuk melanjutkan proses register"}
        accessibilityRole={"button"}
      />
      <ButtonAuthLink text="Sudah memiliki akun?" cta="Login" onPress={() => navigation.navigate("LoginScreen")}
        accessibilityHint={"Klik untuk pindah ke halaman login"}
        accessibilityRole={"button"}
      />
    </View>
  )
}

export default RegisterScreen