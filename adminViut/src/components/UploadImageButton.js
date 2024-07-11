import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import formatTextStyle from '../styles/formatTextStyle'
import colors from '../styles/colors'
import * as ImagePicker from 'expo-image-picker';
import { useActionSheet } from '@expo/react-native-action-sheet';

const UploadImageButton = ({ onChangeImage }) => {
  const [image, setImage] = useState(null);
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = ['Ambil Gambar', 'Pilih dari galeri', "Cancel"];
    const icons = [<Feather name="camera" size={24} color="black" />, <Ionicons name="images-outline" size={24} color="black" />, <AntDesign name="closecircle" size={24} color="red" />]


    showActionSheetWithOptions({
      options,
      icons,
      cancelButtonIndex: 2,
      destructiveButtonIndex: 2
    }, (selectedIndex) => {
      switch (selectedIndex) {
        case 0:
          pickImageFromCamera()
          break;
        case 1:
          pickImage()
          break;
      }
    });
  }
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      onChangeImage(result.assets[0].uri)
    }
  };
  const pickImageFromCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      onChangeImage(result.assets[0].uri)
    }
  };
  return (
    <Pressable style={{ borderWidth: 1, borderColor: 'grey', borderRadius: 10, padding: 7, alignItems: 'center', marginTop: 15 }} onPress={onPress}>
      {image ? <Image source={{ uri: image }} style={{
        width: 60,
        height: 60,
      }} /> : <>
        <MaterialCommunityIcons name="image-multiple-outline" size={45} color={colors.gray} />
        <Text style={formatTextStyle({
          fontSize: 18,
          fontWeight: '400',
          color: colors.gray
        })}>Tambah Gambar</Text>
      </>}

    </Pressable>
  )
}

export default UploadImageButton