import { View, Text, FlatList, TouchableOpacity } from 'react-native'
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
                        onPress={() => navigation.navigate("Detalle", { producto: item })}
                    >
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