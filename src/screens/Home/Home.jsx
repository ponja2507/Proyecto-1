import React from 'react'
import { FlatList, View } from "react-native"
import styles from "./Home.style"
import dataCategories from "../../data/dataCategories"
import { Header } from '../../components'
import { CategoryItem } from './components'


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title={"Categorías"} navigation={navigation}/>
      <FlatList 
        data={dataCategories}
        keyExtractor={category => category.title}
        renderItem={({item}) => (<CategoryItem category={item} navigation={navigation} />)}
      />
    </View>

  )
}

export default Home
