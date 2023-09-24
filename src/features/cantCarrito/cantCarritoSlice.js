import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const cantCarritoSlice = createSlice({
    name: "cantCarrito",
    initialState,
    reducers: {
        incrementar: (state) => {
            state.value += 1
        },
        decrementar: (state) => {
            state.value -= 1
        },
        incrementarConInput: (state, action) => {
            state.value += action.payload
        },
    },
});

export const { incrementar, decrementar, incrementarConInput } = cantCarritoSlice.actions

export default cantCarritoSlice.reducer