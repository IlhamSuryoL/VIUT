import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import colors from '../styles/colors'
import Button from '../components/Button'
import ButtonAuthLink from '../components/ButtonAuthLink'
import formatTextStyle from '../styles/formatTextStyle'
import TextInput from '../components/TextInput'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { AUTH } from '../../firebaseConfig'
import FullLoading from '../components/FullLoading'

const COLOR_ICON = "#B9B8B8"
const LoginScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const prosesLogin = () => {
    setLoading(true)
    signInWithEmailAndPassword(AUTH, data.email, data.password)
      .then((userCredential) => {
        setLoading(false)
        const user = userCredential.user;
      })
      .catch((error) => {
        setLoading(false)
        const errorMessage = error.message;
        Alert.alert("Error", errorMessage)
      });
  }
  return (
    <View style={{ backgroundColor: colors.black, flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={[formatTextStyle({ color: '#fff', fontSize: 24, fontWeight: '700' }), { textAlign: 'center', marginBottom: 60 }]} accessibilityLabel='Halaman login' accessible>Login</Text>
      <TextInput label={"Email"}
        placeholder={"Masukkan Email anda"}
        iconLeft={<Entypo name="email" size={24} color={COLOR_ICON} accessibilityLabel="icon email" />}
        value={data.email}
        onChangeText={(text) => {
          setData((prevState) => ({
            ...prevState,
            ['email']: text,
          }));
        }}
      />
      <TextInput label={"password"}
        placeholder={"Masukkan password anda"}
        iconLeft={<MaterialIcons name="lock-outline" size={24} color={COLOR_ICON} accessibilityLabel="icon password" />}
        containerStyle={{ marginTop: 20 }}
        value={data.password}
        onChangeText={(text) => {
          setData((prevState) => ({
            ...prevState,
            ['password']: text,
          }));
        }}
      />
      <Button text="Login" style={{ width: 239, alignSelf: 'center', marginVertical: 40 }}
        accessibilityLabel={"Login"}
        accessibilityHint={"Klik untuk melanjutkan proses login"}
        accessibilityRole={"button"}
        onPress={() => prosesLogin()} />
      <ButtonAuthLink text="Belum memiliki akun?" cta="Daftar" onPress={() => navigation.navigate("RegisterScreen")}
        accessibilityHint={"Klik untuk pindah ke halaman register"}
        accessibilityRole={"button"}
      />
      {loading && <FullLoading />}
    </View>
  )
}

export default LoginScreen