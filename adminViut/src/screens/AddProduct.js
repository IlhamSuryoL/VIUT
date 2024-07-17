import { View, Text, ToastAndroid, Alert } from 'react-native'
import React, { useState } from 'react'
import WrapperView from '../components/WrapperView'
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import formatTextStyle from '../styles/formatTextStyle';
import TextPrimary from '../components/TextPrimary';
import TextInputWithLabel from '../components/TextInput';
import colors from '../styles/colors';
import Button from '../components/Button';
import UploadImageButton from '../components/UploadImageButton';
import { addDoc, collection } from 'firebase/firestore'
import { FIRE_DB, FIRE_STORAGE } from '../../firebaseConfig'
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import FullLoading from '../components/FullLoading';

const AddProduct = () => {
  const [data, setData] = useState({
    name: '',
    description: '',
    image: ''
  });
  const [loading, setLoading] = useState(false)

  const addProduct = async () => {
    if (!data.image) {
      Alert.alert("", "Gambar produk tidak boleh kosong")
      return;
    }
    if (!data.name) {
      Alert.alert("", "Nama produk tidak boleh kosong")
      return;
    }
    if (!data.description) {
      Alert.alert("", "Deskripsi produk tidak boleh kosong")
      return;
    }
    setLoading(true)
    const imageUrl = await uploadImage()
    if (!imageUrl) {
      setLoading(false)
      Alert.alert("", "Upload gambar gagal, kurangi ukuran file")
      return;

    }
    try {
      const docRef = await addDoc(collection(FIRE_DB, 'products'), {
        product_name: data.name,
        product_description: data.description,
        product_image_url: imageUrl,
        create_at: Date.now(),
        update_at: Date.now(),
      });
      Alert.alert("Sukses !!", "Produk berhasil disimpan")
      setData({
        description: "",
        name: "",
        image: ""
      })
      setLoading(false)
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      setLoading(false)
      console.error('Error adding document: ', e);
    }
  }
  const uploadImage = async () => {
    try {
      const rersult = await fetch(data.image);
      const blob = await rersult.blob();
      const storageRef = ref(FIRE_STORAGE, 'images/' + Date.now());
      await uploadBytes(storageRef, blob)
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL
    } catch (errr) {
      return null
    }
  }
  return (
    <WrapperView>
      <TextPrimary style={{ color: '#000' }} text={"Anda ingin menambahkan produk"} />
      <UploadImageButton onChangeImage={(image) => setData((prevState) => ({
        ...prevState,
        ['image']: image,
      }))} />
      <TextInputWithLabel
        label={"Nama Produk"}
        labelStyle={{ color: '#000' }}
        containerStyle={{ marginTop: 15 }}
        containerInputStyle={{ borderWidth: 1, borderColor: colors.gray, backgroundColor: '#fff' }}
        placeholder={"Masukkan Nama Produk"}
        value={data.name}
        onChangeText={(text) => {
          setData((prevState) => ({
            ...prevState,
            ['name']: text,
          }));
        }}
        iconLeft={<SimpleLineIcons name="pencil" size={24} color={colors.gray} />}
      />
      <TextInputWithLabel
        label={"Deskripsi Produk"}
        labelStyle={{ color: '#000' }}
        containerStyle={{ marginTop: 15 }}
        containerInputStyle={{ borderWidth: 1, borderColor: colors.gray, backgroundColor: '#fff' }}
        inputStyle={{ textAlignVertical: 'top', height: 100, }}
        numberOfLines={4}
        multiline={true}
        placeholder={"Masukkan Deskrispsi Produk"}
        value={data.description}
        onChangeText={(text) => {
          setData((prevState) => ({
            ...prevState,
            ['description']: text,
          }));
        }}
        iconLeft={<MaterialCommunityIcons name="file-document-outline" size={24} color={colors.gray} />}
      />
      <Button text={"Selesai"} style={{ marginTop: 40, backgroundColor: colors.green }} onPress={() => {
        addProduct()
      }} />
      {loading && <FullLoading />}
    </WrapperView>
  )
}

export default AddProduct