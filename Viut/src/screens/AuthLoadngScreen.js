import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../styles/colors'
import { onAuthStateChanged } from 'firebase/auth'
import { AUTH, FIRE_DB } from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { useSetAtom } from 'jotai'
import { userAtom } from '../store'

const AuthLoadngScreen = ({ navigation }) => {
  const setUser = useSetAtom(userAtom)
  useEffect(() => {
    getCurrentUser()
  }, [])

  const getCurrentUser = () => {
    onAuthStateChanged(AUTH, async (user) => {
      if (user) {
        const uid = user.uid;
        const docRef = doc(FIRE_DB, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data()
          setUser(data)
          navigation.reset({
            index: 0,
            routes: [{ name: 'HomeScreen' }],
          });
        } else {
          console.log("No such document!");
          navigation.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }],
          });
        }
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'LoginScreen' }],
        });
      }
    });

  }
  return (
    <View style={{ flex: 1, backgroundColor: colors.black, justifyContent: 'center' }}>
      <ActivityIndicator size="large" color={colors.blue} />
    </View>
  )
}

export default AuthLoadngScreen