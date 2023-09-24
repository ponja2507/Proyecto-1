import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "./Productos.style"
import {Header, SearchInput} from "../../components"
import todosProductos from "../../data/productos"

const Productos = ({navigation, route}) => {

    const [arrProductos, setArrProductos] = useState([])
    const [keyword, setKeyword] = useState ("")
    const { category } = route.params

    useEffect( () => {
        if(category) {
            const productos = todosProductos.filter(producto => producto.category === category)
            const productosFiltrados = productos.filter(producto => producto.title.includes(keyword)
            )
            setArrProductos(productosFiltrados)
        } else{
            const productosFiltrados = todosProductos.filter(producto => producto.title.includes(keyword)
            )
            setArrProductos(productosFiltrados)
        }
    }, [category, keyword]);

  return (
    <View style={styles.container}>
        <Header title={category} navigation={navigation}/>
        <SearchInput onSearch={setKeyword}/>
        <View style={styles.listContainer}>
            <FlatList
                data={arrProductos}
                renderItem={({item}) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("Detalle", { producto: item })}
                    >
                        <Image style={styles.image} source={ { url: item.images[0] } }/>
                        <Text style={styles.text}>{item.title}</Text>
                    </TouchableOpacity>)
                } 
                keyExtractor={item => item.id}
            />
        </View>
    </View>
  )
}

export default Productos