import React from 'react'
import { FlatList, View } from "react-native"
import styles from "./Home.style"
import dataCategories from "../../data/dataCategories"
import { Header } from '../../components'
import { CategoryItem } from './components'

const Home = ({setCategorySelected}) => {
  return (
    <View style={styles.container}>
      <Header title={"Categorías"}/>
      <FlatList 
        data={dataCategories}
        keyExtractor={category => category}
        renderItem={({item}) => <CategoryItem category={item} 
        setCategorySelected={setCategorySelected}/>}
      />
    </View>

  )
}

export default Home
