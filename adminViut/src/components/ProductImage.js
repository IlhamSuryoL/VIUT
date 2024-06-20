import { View, Text, Image } from 'react-native'
import React from 'react'

const ProductImage = () => {
  return (
    <Image source={{ uri: "https://picsum.photos/seed/picsum/200/300" }} style={{ width: 90, height: 90 }} />
  )
}

export default ProductImage