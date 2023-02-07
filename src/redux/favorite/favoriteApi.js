import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const favoriteApi = createApi({
  reducerPath: 'favoriteApi',
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
  tagTypes: ['Favorite'],
  refetchOnFocus: true,
  endpoints: builder => ({
    getFavorite: builder.query({
      query: () => '/users/favorite',
      providesTags: ['Favorite'],
    }),
    addFavorite: builder.mutation({
      query: noticeId => ({
        url: `/users/favorite/${noticeId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Favorite'],
    }),
    deleteFavorite: builder.mutation({
      query: noticeId => ({
        url: `/users/favorite/${noticeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Favorite'],
    }),
  }),
});

export const {
  useGetFavoriteQuery,
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
} = favoriteApi;
