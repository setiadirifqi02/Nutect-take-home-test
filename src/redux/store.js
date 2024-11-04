import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/userSlice";

import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import { financeApi } from "./api/financeApi";

export const store = configureStore({
  reducer: {
    auth: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [financeApi.reducerPath]: financeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      userApi.middleware,
      financeApi.middleware,
    ]),
});
