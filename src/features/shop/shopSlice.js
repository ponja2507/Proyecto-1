import { createSlice } from "@reduxjs/toolkit";
import dataCategories from "../../data/dataCategories";
import productos from "../../data/productos";

const initialState = {
    categorias: dataCategories,
    products: productos,
    productosFiltradosPorCategoria: [],
    categoriaSeleccionada: null,
    productoIdSeleccionada: null,
}

export const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        setCategoriaSeleccionada: (state, action) => {
            state.categoriaSeleccionada = action.payload
        },
        setProductoIdSeleccionada: (state, action) => {
            state.productoIdSeleccionada = action.payload
        },
    }
})

export const { setCategoriaSeleccionada, setProductoIdSeleccionada } = shopSlice.actions

export default shopSlice.reducer