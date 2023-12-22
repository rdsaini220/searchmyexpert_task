import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const contactApi = createApi({
  reducerPath: 'contactApi',  
  baseQuery: fetchBaseQuery({ baseUrl: 'https://653686dbbb226bb85dd244f8.mockapi.io/' }),
  endpoints: (builder) => ({
    getContact: builder.query({
      query: (name='') => `employee/?name=${name}`,
    }),
    addContact: builder.mutation({
        query(data) {
          return {
            url: "employee",
            method: "POST",
            body: data,
          };
        },
    }),
    updateContact: builder.mutation({
        query(data) {
          return {
            url: `employee/${data.id}`,
            method: "PUT",
            body: data,
          };
        },
    }),
    deleteContact: builder.mutation({
        query: (id) => ({
          url: `employee/${id}`,
          method: 'DELETE',
        }),
      }),
  }),
})


export const { useGetContactQuery, useAddContactMutation, useUpdateContactMutation, useDeleteContactMutation } = contactApi

