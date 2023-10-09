import { Pressable, Text } from 'react-native'
import React from 'react'
import Card from '../../../../components/Card/Card'
import styles from "./CategoryItem.style"
import { useDispatch } from 'react-redux'
import { setCategoriaSeleccionada } from '../../../../features/shop/shopSlice'

const CategoryItem = ({category, navigation}) => {
  const dispatch = useDispatch()
  return (
    <Pressable onPress={() => {
      dispatch(setCategoriaSeleccionada(category))
      navigation.navigate("Productos", {category})}}>
        <Card style={styles.cardContainer}  >
            <Text style={styles.text}>{category}</Text>
        </Card>
    </Pressable>
  )
}

export default CategoryItem
