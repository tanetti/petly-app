import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const servicesApi = createApi({
  reducerPath: 'services',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL,
  }),
  tagTypes: ['Services'],
  endpoints: builder => ({
    getServices: builder.query({
      query: () => `/services`,
      providesTags: ['Services'],
    }),
  }),
});

export const { useGetServicesQuery } = servicesApi;
