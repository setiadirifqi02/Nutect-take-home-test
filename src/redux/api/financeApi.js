import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const financeApi = createApi({
  reducerPath: "financeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://take-home-test-api.nutech-integrasi.com",
    prepareHeaders: (headers, { getState }) => {
      const token = sessionStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        // console.log("Token ditemukan dan disetel di header:", token);
      }
      return headers;
    },
  }),
  tagTypes: ["balance"],
  endpoints: (builder) => ({
    getBalance: builder.query({
      query: () => "/balance",
      providesTags: ["balance"],
    }),

    getServices: builder.query({
      query: () => "/services",
      providesTags: ["balance"],
    }),
    getBanner: builder.query({
      query: () => "/banner",
    }),
    topUp: builder.mutation({
      query(body) {
        return {
          url: "/topup",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["balance"],
    }),
    transaction: builder.mutation({
      query(body) {
        return {
          url: "/transaction",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["balance"],
    }),
    getTransactionHistory: builder.query({
      query: ({ limit }) => {
        const params = new URLSearchParams();

        // Tambahkan limit jika tersedia
        if (limit) {
          params.append("limit", limit);
        }

        const url = `/transaction/history?${params.toString()}`;
        // console.log("Fetching transactions from URL:", url);

        return {
          url,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetBalanceQuery,
  useGetBannerQuery,
  useGetServicesQuery,
  useTopUpMutation,
  useTransactionMutation,
  useGetTransactionHistoryQuery,
} = financeApi;
