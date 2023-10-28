import { View, Text, Pressable, FlatList, Alert } from "react-native";
import React from "react";
import styles from "./Cart.Style";
import Cartitem from "./components/Cartitem";
import { useDispatch, useSelector } from "react-redux";
import { limpiarCarrito } from "../../features/cart/cartSlice";

const Cart = () => {
  const cart = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);

  const renderItem = ({ item }) => <Cartitem item={item} />

  const dispatch = useDispatch()
  const compraRealizada = () => {
    dispatch(limpiarCarrito())
  }

  const confirmarCart = () => {
    Alert.alert('Confirmación de compra', `Deseas comprar por un total de $ ${total}?`, [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {        
        Alert.alert(`Felicidades! tu compra fue realizada con éxito`)
        console.log('OK Pressed')
        compraRealizada()
      }},
    ]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.lista}>
        <FlatList
          data={cart}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <View>
        <Pressable style={styles.confirmar} onPress={confirmarCart}>
          <View style={styles.total}>
            <Text style={styles.textTotal}>{`Total $ ${total}`}</Text>
          </View>
          <View style={styles.boton}>
            <Text style={styles.textBoton}>Confirmar</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;
