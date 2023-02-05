import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currentUserInfoApi = createApi({
  reducerPath: 'currentUserInfo',
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
  tagTypes: ['CurrentUserInfo'],
  refetchOnFocus: true,
  endpoints: builder => ({
    getCurrentInfo: builder.query({
      query: () => '/users/current',
      providesTags: ['CurrentUserInfo'],
    }),
    updateCurrentInfo: builder.mutation({
      query: infoParameter => ({
        url: `/users/current`,
        method: 'PATCH',
        body: infoParameter,
      }),
      invalidatesTags: ['CurrentUserInfo'],
    }),
    uploadAvatar: builder.mutation({
      query: formData => ({
        url: `/users/avatars`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['CurrentUserInfo'],
    }),
    deleteAvatar: builder.mutation({
      query: () => ({
        url: `/users/avatars`,
        method: 'DELETE',
      }),
      invalidatesTags: ['CurrentUserInfo'],
    }),
  }),
});

export const {
  useGetCurrentInfoQuery,
  useUpdateCurrentInfoMutation,
  useUploadAvatarMutation,
  useDeleteAvatarMutation,
} = currentUserInfoApi;
