import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ICategoryResponse,
  ILabelResponse,
  ITransaction,
} from '../_interfaces';

// const baseURI = 'http://localhost:8080';
const baseURI = import.meta.env.VITE_BASE_URI;

console.log('base uri', baseURI);

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  tagTypes: ['categories', 'transaction'], // Define tag types used for caching
  endpoints: (builder) => ({
    // Get categories
    getCategories: builder.query<ICategoryResponse, void>({
      query: () => '/api/v1/categories',
      providesTags: ['categories'], // Cache invalidation tag
    }),

    // Get labels
    getLabels: builder.query<ILabelResponse, void>({
      query: () => '/api/v1/transactions/labels',
      providesTags: ['transaction'], // Cache invalidation tag
    }),

    // Add a new transaction
    addTransaction: builder.mutation<ITransaction, Partial<ITransaction>>({
      query: (initialTransaction) => ({
        url: '/api/v1/transactions',
        method: 'POST',
        body: initialTransaction,
      }),
      invalidatesTags: ['transaction'], // Invalidate cache to refetch data
    }),

    // Delete a transaction
    deleteTransaction: builder.mutation<void, string>({
      query: (recordId) => ({
        url: `/api/v1/transactions/${recordId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['transaction'], // Invalidate cache to refetch data
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetLabelsQuery,
  useAddTransactionMutation,
  useDeleteTransactionMutation,
} = apiSlice;

export default apiSlice;
