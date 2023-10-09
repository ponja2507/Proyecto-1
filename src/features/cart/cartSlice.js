import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: "userLogged",
    updatedAt: Date.now().toLocaleString(),
    items: [],
    total: null,
};

export const cartSlice = createSlice({
    name: "cart",

    initialState,
    reducers: {
        agregaItem: (state, action) => {
            const productoRepetido = state.items.find(item => item.id === action.payload.id)
            if(productoRepetido) {
                const updateItem = state.items.map(item => {
                    if(item.id === action.payload.id) {
                        item.quantity += action.payload.quantity
                        return item
                    }
                    return
                })
                const total = updateItem.reduce(
                    (acc, current) => (acc += current.price * current.quantity), 0
                    )
                    state = {
                        ...state,
                        items: updateItem,
                        total,
                        updatedAt: new Date().toLocaleString()
                    }
            } else {
                state.items.push(action.payload)
                const total = state.items.reduce(
                    (acc, current) => (acc += current.price * current.quantity), 0
                )
                state = {
                    ...state,
                    total,
                    updatedAt : new Date().toLocaleString()
                }
            }
        },
        eliminarItem: (state, action) => {},
    }
})

export const { agregaItem, eliminarItem } = cartSlice.actions

export default cartSlice.reducer