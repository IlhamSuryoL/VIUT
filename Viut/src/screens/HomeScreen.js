import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import ViewBlack from '../components/ViewBlack'
import TextSmall from '../components/TextSmall'
import colors from '../styles/colors'
import TextPrimary from '../components/TextPrimary'
import RadioButton from '../components/RadioButton'
import NextButton from '../components/NextButton'
import FullLoading from '../components/FullLoading'
import { getDocs, query, collection, orderBy, doc, getDoc } from 'firebase/firestore'
import { FIRE_DB } from '../../firebaseConfig'
import { useAtomValue, useSetAtom } from 'jotai'
import { questionAtom, userAtom } from '../store'
const copyBeforeSelect = "Terdapat beberapa pilihan produk, silahkan pilih produk yang ingin anda uji"
const copyAfterSelect = "Tekan tombol selanjutnya untuk memulai penilaian"

const HomeScreen = ({ navigation }) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(null)
  const [selectedId, setSelectedId] = useState(null)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const setQuestion = useSetAtom(questionAtom)
  const user = useAtomValue(userAtom)

  useEffect(() => {
    getProducts()
    getQuestion()
  }, [])

  const getQuestion = async () => {
    const tampData = []
    const docRef = doc(FIRE_DB, "viut_app", "viat_questions");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      docSnap.data().data.forEach((question) => {
        tampData.push({
          question: question,
          score: 0
        })
      })
      setQuestion(tampData)
    } else {
      console.log("No such document!");
    }
  }

  const getProducts = async () => {
    setLoading(true)
    const tampData = []
    const querySnapshot = await getDocs(query(collection(FIRE_DB, "products"), orderBy("create_at", "desc")));
    querySnapshot.forEach((doc) => {
      const product = doc.data()
      if (product?.participant_ids && product?.participant_ids.includes(user.uid)) return;
      tampData.push({
        id: doc.id,
        ...product
      })
    });
    setData(tampData)
    setLoading(false)
  }
  const _renderProductItem = (item, index) => {
    return (<Pressable
      onPress={() => {
        setSelectedId(item.id)
        setSelectedProductIndex(index)
      }}
      style={{
        paddingHorizontal: 19, paddingVertical: 8, borderRadius: 10,
        backgroundColor: colors.blue, marginBottom: 30, flexDirection: 'row', alignItems: 'center', flex: 1
      }}>
      <RadioButton active={index === selectedProductIndex} />
      <View style={{ flex: 1, marginLeft: 19 }}>
        <TextPrimary text={item.product_name} style={{ textAlign: 'flex-start', marginBottom: 5 }} numberOfLines={1} ellipsizeMode="tail" />
        <TextSmall text={item.product_description}
          numberOfLines={3} ellipsizeMode="tail"
        />
      </View>
    </Pressable>)
  }
  return (
    <ViewBlack accessible={true} accessibilityHint={"anda berada di halaman beranda"} >
      <FlatList
        accessibilityLabel='silahkan pilih list produk yang ingin anda uji'
        accessibilityRole='list'
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ index, item }) => _renderProductItem(item, index)}
        ListHeaderComponent={<TextSmall style={{ marginBottom: 30 }} text={"Anda ingin menguji apa?"} accessibilityRole="text" />}
        ListFooterComponent={
          <>
            <View style={{ paddingHorizontal: 26, backgroundColor: '#1B478D', height: 131, justifyContent: 'center' }}>
              <TextSmall style={{ textAlign: 'center' }} text={selectedProductIndex === null ? copyBeforeSelect : copyAfterSelect} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 26, height: 80 }}>
              {selectedProductIndex !== null &&
                <NextButton onPress={() => navigation.navigate("StartSurveyScreen", {
                  productId: selectedId
                })} />
              }
            </View>
          </>
        }
      />
      {loading && <FullLoading />}
    </ViewBlack>
  )
}

export default HomeScreen