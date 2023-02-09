import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const singleNoticeApi = createApi({
  reducerPath: 'singleNotice',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL,
  }),
  tagTypes: ['SingleNotice'],
  refetchOnFocus: true,
  endpoints: builder => ({
    getSingleNotice: builder.query({
      query: noticeId => `/notices/${noticeId}`,
      providesTags: ['SingleNotice'],
    }),
  }),
});

export const { useGetSingleNoticeQuery } = singleNoticeApi;
