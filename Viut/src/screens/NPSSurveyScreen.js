import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import SurveyDone from '../components/SurveyDone'
import ViewBlack from '../components/ViewBlack'
import Button from '../components/Button'
import FullLoading from '../components/FullLoading'
import { FIRE_DB } from '../../firebaseConfig'
import { questionAtom, userAtom } from '../store'
import { useAtomValue } from 'jotai'
import { doc, getDoc, updateDoc } from 'firebase/firestore'

const NPSSurveyScreen = ({ route, navigation }) => {
  const { productId, npsScore, viatScore } = route.params
  const questions = useAtomValue(questionAtom)
  const user = useAtomValue(userAtom)

  const [loading, setLoading] = useState(false)

  const saveData = async () => {
    setLoading(true)
    const productRef = doc(FIRE_DB, "products", productId);
    const productSnap = await getDoc(productRef);

    if (productSnap.exists()) {
      const product = productSnap.data()
      const users = product?.users || []
      const participantIds = product?.participant_ids || []

      participantIds.push(user.uid)

      const currentUser = {
        id: user.uid,
        name: user.name,
        email: user.email,
        nps_score: npsScore,
        viat_score: viatScore,
        questions: questions
      }
      users.push(currentUser)

      const data = {
        participant_ids: participantIds,
        update_at: Date.now(),
        users: users
      }
      await updateDoc(productRef, data);
      Alert.alert("", "Data survey berhasil disimpan")
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }],
      });
    } else {
      Alert.alert("", "Skor survey gagal di simpan")
    }
    setLoading(false)
  }
  return (
    <ViewBlack accessible>
      <SurveyDone labelTop={"Anda telah menyelesaikan Survey NPS! Berikut hasil penilaiannya"} labelBottom={"Anda Telah menyelesaikan semua survey tekan selesai untuk kembali ke beranda"}
        totalScore={npsScore || ""}
      />
      <Button text={"SELESAI"} style={{ marginTop: 60, backgroundColor: '#F4B739' }} textStyle={{ color: '#000' }} accessibilityRole={'button'} accessibilityHint={"Klik untuk menyelesaikan survey"} onPress={() => saveData()} />
      {loading && <FullLoading />}
    </ViewBlack>
  )
}

export default NPSSurveyScreen