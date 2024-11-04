import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "./userApi";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://take-home-test-api.nutech-integrasi.com",
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query(body) {
        return {
          url: "/registration",
          method: "POST",
          body,
        };
      },
    }),
    login: builder.mutation({
      query(body) {
        return {
          url: "/login",
          method: "POST",
          body,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const token = data.data.token;
          sessionStorage.setItem("token", token);
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (erorr) {
          console.error("Login failed", erorr);
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
