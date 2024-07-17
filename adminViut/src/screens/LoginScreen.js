import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../styles/colors'
import Button from '../components/Button'
import formatTextStyle from '../styles/formatTextStyle'
import TextInput from '../components/TextInput'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import FullLoading from '../components/FullLoading'
import { AUTH, FIRE_DB } from '../../firebaseConfig'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

const COLOR_ICON = "#B9B8B8"
const LoginScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  useEffect(() => {
    getCurrentUser()
  }, [])

  const getCurrentUser = () => {
    setLoading(true)
    onAuthStateChanged(AUTH, async (user) => {
      setLoading(false)
      if (user) {
        const uid = user.uid;
        const docRef = doc(FIRE_DB, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data()
          if (data?.admin) {
            navigation.reset({
              index: 0,
              routes: [{ name: 'HomeScreen' }],
            });
          } else {
            setTimeout(() => {
              signOut(AUTH).then(() => { }).catch(() => {
                Alert.alert("", "Logout gagal")
              });
            }, 2000);
            Alert.alert("", "Kamu bukan admin")
          }
        }
      }
    });
  }

  const prosesLogin = () => {
    setLoading(true)
    signInWithEmailAndPassword(AUTH, data.email, data.password)
      .then((userCredential) => {
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        const errorMessage = error.message;
        Alert.alert("Error", errorMessage)
      });
  }
  return (
    <View style={{ backgroundColor: colors.black, flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={[formatTextStyle({ color: '#fff', fontSize: 24, fontWeight: '700' }), { textAlign: 'center', marginBottom: 60 }]}>Login</Text>
      <TextInput label={"Email"}
        placeholder={"Masukkan Email anda"}
        iconLeft={<Entypo name="email" size={24} color={COLOR_ICON} />}
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
        iconLeft={<MaterialIcons name="lock-outline" size={24} color={COLOR_ICON} />}
        containerStyle={{ marginTop: 20 }}
        value={data.password}
        onChangeText={(text) => {
          setData((prevState) => ({
            ...prevState,
            ['password']: text,
          }));
        }}
      />
      <Button text="Login" style={{ width: 239, alignSelf: 'center', marginVertical: 40 }} onPress={() => prosesLogin()} />
      {loading && <FullLoading />}
    </View>
  )
}

export default LoginScreen