import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const noticesApi = createApi({
  reducerPath: 'notices',
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
  tagTypes: ['Notices'],
  refetchOnFocus: true,
  endpoints: builder => ({
    getAllNotices: builder.query({
      query: params => {
        const { categoryName, searchValue } = params;

        if (!categoryName) return;

        return searchValue
          ? `/notices/${categoryName}?search=${searchValue}`
          : `/notices/${categoryName}`;
      },
      providesTags: ['Notices'],
    }),
    addNotice: builder.mutation({
      query: body => ({
        url: `/notices`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Notices'],
    }),
    deleteNotice: builder.mutation({
      query: noticeID => ({
        url: `/notices/${noticeID}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Notices'],
    }),
  }),
});

export const {
  useGetAllNoticesQuery,
  useAddNoticeMutation,
  useDeleteNoticeMutation,
} = noticesApi;
