import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseUrl } from "../firebase"

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: builder => ({
        getCategorias: builder.query({
            query: () => "categories.json"
        }),
        getProductos: builder.query({
            query: () => "products.json",
        }),
        getProductosPorCategoria: builder.query({
            query: category => `products.json?orderBy="category"&equalTo="${category}"`,
        }),
        getProfileImage: builder.query({
            query: localId => `profileImages/${localId}.json`
        }),
        postProfileImage: builder.mutation({
            query: ({image, localId}) => ({
                url: `profileImages/${localId}.json`,
                method: "PUT",
                body: {
                    image,
                }                
            })
        })
    }),
});

export const {
    useGetCategoriasQuery,
    useGetProductosQuery,
    useGetProductosPorCategoriaQuery,
    useGetProfileImageQuery,
    usePostProfileImageMutation,
} = shopApi