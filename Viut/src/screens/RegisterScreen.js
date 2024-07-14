import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import colors from '../styles/colors'
import Button from '../components/Button'
import ButtonAuthLink from '../components/ButtonAuthLink'
import formatTextStyle from '../styles/formatTextStyle'
import TextInput from '../components/TextInput'
import { Entypo, FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AUTH, FIRE_DB } from '../../firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import FullLoading from '../components/FullLoading'
import { useSetAtom } from 'jotai'
import { userAtom } from '../store'

const COLOR_ICON = "#B9B8B8"
const RegisterScreen = ({ navigation }) => {
  const setUser = useSetAtom(userAtom)

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [loading, setLoading] = useState(false)
  const onRegister = () => {
    setLoading(true)
    if (!data.name) {
      Alert.alert("", "Nama tidak boleh kosong")
      return;
    }
    if (!data.email) {
      Alert.alert("", "Email tidak boleh kosong")
      return;
    }
    if (!data.password) {
      Alert.alert("", "Password tidak boleh kosong")
      return;
    }
    createUserWithEmailAndPassword(AUTH, data.email, data.password)
      .then(async (userCredential) => {
        const uid = await userCredential.user.uid;
        const user = {
          uid: uid,
          name: data.name,
          email: data.email,
        }
        await setDoc(doc(FIRE_DB, "users", uid), user);
        setUser(user)
        setLoading(false)
        setData({
          name: "",
          email: "",
          password: ""
        })

        navigation.reset({
          index: 0,
          routes: [{ name: 'HomeScreen' }],
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Alert.alert("Error", errorMessage)
        setLoading(false)
      });
  }
  return (
    <View style={{ backgroundColor: colors.black, flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={[formatTextStyle({ color: '#fff', fontSize: 24, fontWeight: '700' }), { textAlign: 'center', marginBottom: 60 }]} accessibilityLabel='Halaman register' accessible>Register</Text>
      <TextInput label={"Nama"}
        placeholder={"Masukkan nama anda"}
        iconLeft={<FontAwesome6 name="user" size={24} color={COLOR_ICON} accessibilityLabel="icon nama" />}
        value={data.name}
        onChangeText={(text) => {
          setData((prevState) => ({
            ...prevState,
            ['name']: text,
          }));
        }}
      />
      <TextInput label={"Email"}
        placeholder={"Masukkan Email anda"}
        iconLeft={<Entypo name="email" size={24} color={COLOR_ICON} accessibilityLabel="icon email" />}
        containerStyle={{ marginTop: 20 }}
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
      <Button text="Daftar" style={{ width: 239, alignSelf: 'center', marginVertical: 40 }} onPress={() => onRegister()}
        accessibilityLabel={"Register"}
        accessibilityHint={"Klik untuk melanjutkan proses register"}
        accessibilityRole={"button"}
      />
      <ButtonAuthLink text="Sudah memiliki akun?" cta="Login" onPress={() => navigation.navigate("LoginScreen")}
        accessibilityHint={"Klik untuk pindah ke halaman login"}
        accessibilityRole={"button"}
      />
      {loading && <FullLoading />}
    </View>
  )
}

export default RegisterScreen