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
  tagTypes: ['OwnPets'],
  refetchOnFocus: true,
  endpoints: builder => ({
    getOwnPets: builder.query({
      query: () => '/pets',
      providesTags: ['OwnPets'],
    }),
    addOwnPet: builder.mutation({
      query: body => ({
        url: '/pets',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['OwnPets'],
    }),
    deleteOwnPet: builder.mutation({
      query: ownPetId => ({
        url: `/pets/${ownPetId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['OwnPets'],
    }),
  }),
});

export const {
  useGetOwnPetsQuery,
  useAddOwnPetMutation,
  useDeleteOwnPetMutation,
} = ownPetsApi;
