import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'news',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL,
  }),
  tagTypes: ['News'],
  refetchOnFocus: true,
  endpoints: builder => ({
    getNews: builder.query({
      query: searchValue =>
        searchValue ? `/news?search=${searchValue}` : `/news`,
      providesTags: ['News'],
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
