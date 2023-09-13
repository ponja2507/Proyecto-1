import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "./Productos.syle"
import {Header, SearchInput} from "../../components"
import todosProductos from "../../data/productos"

const Productos = ({category}) => {

    const [arrProductos, setArrProductos] = useState([])
    const [keyword, setKeyword] = useState ("")

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
        <Header title={category}/>
        <SearchInput onSearch={setKeyword}/>
        <View style={styles.listContainer}>
            <FlatList
                data={arrProductos}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.title}</Text>
                    </View>)
                } 
                keyExtractor={item => item.id}
            />
        </View>
    </View>
  )
}

export default Productos