import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setIsAuthenticated, setLoading, setUser } from "../features/userSlice";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://take-home-test-api.nutech-integrasi.com",
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => "/profile",
      transformErrorResponse: (result) => result.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
          dispatch(setIsAuthenticated(true));
          dispatch(setLoading(false));
        } catch (error) {
          dispatch(setLoading(false));
          console.log(error);
        }
      },
      providesTags: ["User"],
    }),
    editProfile: builder.mutation({
      query: (body) => {
        return {
          url: "/profile/update",
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetMeQuery, useEditProfileMutation } = userApi;
// https://take-home-test-api.nutech-integrasi.com
