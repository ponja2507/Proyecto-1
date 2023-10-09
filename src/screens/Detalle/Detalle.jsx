import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { CantCarrito, Header } from "../../components";
import styles from "./Detalle.style";
import { useDispatch } from "react-redux";
import { agregaItem } from "../../features/cart/cartSlice";

const Detalle = ({ navigation, route }) => {
  const { producto } = route.params;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(agregaItem({ ...producto, quantity: { contador } }));
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Header title={"Detalle"} navigation={navigation} />
        <Image style={styles.image} source={{ url: producto.images[0] }} />
        <Text style={styles.title}>{producto.title}</Text>
        <Text style={styles.descripcion}>{producto.description}</Text>
        <Text style={styles.price}>{`U$D ${producto.price}`}</Text>
        <Pressable onPress={handleAddToCart}>
          <Text>Agregar al Carrito</Text>
        </Pressable>
        <CantCarrito />
      </ScrollView>
    </View>
  );
};

export default Detalle;
