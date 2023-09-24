import { View, Text, Pressable, FlatList } from 'react-native'
import React from 'react'
import styles from "./Cart.Style"
import dataCart from '../../data/dataCart'
import Cartitem from './components/Cartitem'

const Cart = () => {

    const renderItem = () => <Cartitem />

    return (
    <View style={styles.container}>
      <View>
        <FlatList 
            data={dataCart}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
      </View>
      <View>
        <Pressable>
            <Text>
                Confirmar
            </Text>
            <View>
                <Text>
                    {`Total $100`}
                </Text>
            </View>
        </Pressable>
      </View>
    </View>
  )
}

export default Cart