import { Pressable, Text } from 'react-native'
import React from 'react'
import Card from '../../../../components/Card/Card'
import styles from "./CategoryItem.style"

const CategoryItem = ({category, navigation}) => {
  return (
    <Pressable onPress={() => navigation.navigate("Productos", {category})}>
        <Card style={styles.cardContainer}  >
            <Text style={styles.text}>{category}</Text>
        </Card>
    </Pressable>
  )
}

export default CategoryItem



// const CategoryItem = ({category, navigation }) => {
//   return (
//     <Pressable onPress={() => navigation.navigate("Productos", {category})}>
//         <Card style={styles.cardContainer} children={category}>
//             <Text style={styles.text}>{category}</Text>
//         </Card>
//     </Pressable>
//   )
// }