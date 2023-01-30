import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'news',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL,
  }),
  tagTypes: ['News'],
  endpoints: builder => ({
    getNews: builder.query({
      query: () => `/news`,
      providesTags: ['News'],
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
