import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const TodoApi= createApi({
  reducerPath: 'querry',
  tagTypes: ['Todos'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (limit = '') => `todos?${limit && `_limit=${limit}`}`,
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.map(({ id }) => ({ type: 'Todos', id })),
              { type: 'Todos', id: 'LIST' },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
            [{ type: 'Todos', id: 'LIST' }],
    }),
    addTodo: builder.mutation({
      query: (body) =>  ({
        url: 'todos',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{type: 'Todos', id: 'LIST'}]
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{type: 'Todos', id: 'LIST'}]
    }),
  }),
})

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation } = TodoApi;
