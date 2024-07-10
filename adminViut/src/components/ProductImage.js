import { View, Text, Image } from 'react-native'
import React from 'react'

const ProductImage = ({ uri }) => {
  return (
    <Image source={{ uri: uri }} style={{ width: 90, height: 90 }} />
  )
}

export default ProductImage