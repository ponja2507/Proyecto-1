import React from 'react'
import { FlatList, View } from "react-native"
import styles from "./Home.style"
import { Header } from '../../components'
import { CategoryItem } from './components'
import { useGetCategoriasQuery } from '../../services/shopApi'



const Home = ({navigation}) => {
  const { data, isLoading } = useGetCategoriasQuery()
  return (
    <View style={styles.container}>
      <Header title={"Categorías"} navigation={navigation}/>
      {!isLoading && (
        <FlatList 
          data={data}
          keyExtractor={category => category.title}
          renderItem={({item}) => (<CategoryItem category={item.title} navigation={navigation} />)}
          />
        )}
    </View>

  )
}

export default Home
