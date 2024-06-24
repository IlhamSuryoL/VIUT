import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import WrapperView from '../components/WrapperView'
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import formatTextStyle from '../styles/formatTextStyle';
import TextPrimary from '../components/TextPrimary';
import TextInputWithLabel from '../components/TextInput';
import colors from '../styles/colors';
import Button from '../components/Button';
import UploadImageButton from '../components/UploadImageButton';

const AddProduct = () => {
  return (
    <WrapperView>
      <TextPrimary style={{ color: '#000' }} text={"Anda ingin menambahkan produk"} />
      <UploadImageButton />
      <TextInputWithLabel
        label={"Nama Produk"}
        labelStyle={{ color: '#000' }}
        containerStyle={{ marginTop: 15 }}
        containerInputStyle={{ borderWidth: 1, borderColor: colors.gray, backgroundColor: '#fff' }}
        placeholder={"Masukkan Nama Produk"}
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
        iconLeft={<MaterialCommunityIcons name="file-document-outline" size={24} color={colors.gray} />}
      />
      <Button text={"Selesai"} style={{ marginTop: 40, backgroundColor: colors.green }} onPress={() => {
        ToastAndroid.showWithGravity(
          'All Your Base Are Belong To Us',
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
        );
      }} />
    </WrapperView>
  )
}

export default AddProduct