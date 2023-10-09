import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "./Productos.style"
import {Header, SearchInput} from "../../components"
import todosProductos from "../../data/productos"
import { useSelector } from 'react-redux'
import { useGetProductosPorCategoriaQuery } from '../../services/shopApi'

const Productos = ({ navigation }) => {
    const category = useSelector(state => state.shop.categoriaSeleccionada)
    const [arrProductos, setArrProductos] = useState([])
    const [keyword, setKeyword] = useState ("")
    const { data, isLoading } = useGetProductosPorCategoriaQuery(category)

    useEffect( () => {
        console.log(data)
        console.log(category)
        if(data) {
            const productosFiltrados = data.filter(producto => producto.title.includes(keyword)
            )
            setArrProductos(productosFiltrados)
        } 
    }, [keyword]);

  return (
    <View style={styles.container}>
        <Header title={category} navigation={navigation}/>
        <SearchInput onSearch={setKeyword}/>
        <View style={styles.listContainer}>
            {!isLoading && (
                <FlatList
                    data={Object.values(data)}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => navigation.navigate("Detalle", { producto: item })}
                        >
                            <Image style={styles.image} source={ { uri: item.images[0] } }/>
                            <Text style={styles.text}>{item.title}</Text>
                        </TouchableOpacity>)
                    } 
                    keyExtractor={item => item.id}
                />
            )}
        </View>
    </View>
  )
}

export default Productos