import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import formatTextStyle from '../styles/formatTextStyle'
import colors from '../styles/colors'
import * as ImagePicker from 'expo-image-picker';

const UploadImageButton = () => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <Pressable style={{ borderWidth: 1, borderColor: 'grey', borderRadius: 10, padding: 7, alignItems: 'center', marginTop: 15 }} onPress={() => pickImage()}>
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