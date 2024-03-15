import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const todosApi= createApi({

    reducerPath:'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),

    endpoints: (builder) => ({

        /*getTodos me trae todos los dogs */
        getTodos: builder.query({
            query: () => '/dogs'
        })
    })

})
/*En esta parte necesitamos exportar un customeHooks:
se pone 'query' para saber que es un get, 'mutation' si es una mutación como un POST, PUT, DELETE  */

export const{ useGetTodosQuery } = todosApi;