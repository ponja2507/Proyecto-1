import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: "userLogged",
    updatedAt: Date.now().toLocaleString(),
    items: [],
    total: 0,
};

export const cartSlice = createSlice({
    name: "cart",

    initialState,
    reducers: {
        agregaItem: (state, action) => {
            const productos = state.items
            const productoRepetido = state.items.find(item => item.id === action.payload.id)
            if(!productoRepetido) 
                return {
                    ...state,
                    items: [...state.items, action.payload],
                    total: state.total + action.payload.price,
                    updatedAt: new Date().toLocaleString(),
                }

            const itemsUpdated = productos.map (item => {
                if (item.id === action.payload.id) {
                    return Object.assign({}, item, {
                        quantity: item.quantity + action.payload.quantity,
                    })
                }
                return item
            })
            return {
                ...state,
                items: itemsUpdated,
                total: state.total + action.payload.price,
                updatedAt: new Date().toDateString(),
            }
        },
        eliminarItem: (state, action) => {

            const productos = state.items
            const productoRepetido = state.items.find(item => item.id === action.payload.id)
            if(!productoRepetido) 
                return {
                    ...state,
                    items: [...state.items, action.payload],
                    total: state.total - action.payload.price,
                    updatedAt: new Date().toLocaleString(),
                }
                

            const itemsUpdated = productos.map (item => {
                if (item.id === action.payload.id) {
                    return Object.assign({}, item, {
                        quantity: item.quantity - action.payload.quantity,
                    })
                }
                        return item
                    })
                    const newUpdate = itemsUpdated.map (item => {
                        const i = itemsUpdated.indexOf(item)
                        if (item.quantity === 0 ) {
                            const itemsWithoutRemoves = itemsUpdated.splice(i, 1)
                            return {
                                ...state,
                                items: itemsWithoutRemoves,
                                total: state.total - action.payload.price,
                                updatedAt: new Date().toDateString(),
                            }
                        }
                    })
                    return {
                ...state,
                items: itemsUpdated,
                total: state.total - action.payload.price,
                updatedAt: new Date().toDateString(),
            }
    },
    limpiarCarrito: (state) => {
        return state = initialState
    }
}})

export const { agregaItem, eliminarItem, limpiarCarrito } = cartSlice.actions

export default cartSlice.reducer