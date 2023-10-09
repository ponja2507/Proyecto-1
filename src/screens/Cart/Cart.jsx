import { View, Text, Pressable, FlatList } from "react-native";
import React from "react";
import styles from "./Cart.Style";
import dataCart from "../../data/dataCart";
import Cartitem from "./components/Cartitem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../../services/shopApi";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const[ triggerPost, result] = usePostOrderMutation()

  const renderItem = ({ item }) => <Cartitem item={item} />;

  const confirmarCart = () => {
    triggerPost({total, cart, user: "LoggedUser"})
  }
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View>
        <Pressable onPress={confirmarCart}>
          <Text>Confirmar</Text>
          <View>
            <Text>{`Total $ ${total}`}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;
