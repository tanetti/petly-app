import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ownPetsApi = createApi({
  reducerPath: 'ownPetsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['ownPetsApi'],
  refetchOnFocus: true,
  endpoints: builder => ({
    getOwnPets: builder.query({
      query: () => '/users/own',
      providesTags: ['ownPetsApi'],
    }),
    addOwnPet: builder.mutation({
      query: body => ({
        url: '/users/own',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['ownPetsApi'],
    }),
    deleteOwnPet: builder.mutation({
      query: ownPetId => ({
        url: `/users/own/${ownPetId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ownPetsApi'],
    }),
  }),
});

export const {
  useGetOwnPetsQuery,
  useAddOwnPetMutation,
  useDeleteOwnPetMutation,
} = ownPetsApi;
