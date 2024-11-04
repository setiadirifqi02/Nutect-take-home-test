import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useGetMeQuery } from "./redux/api/userApi";
import {
  setIsAuthenticated,
  setLoading,
  setUser,
} from "./redux/features/userSlice";

import { Toaster } from "react-hot-toast";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./components/auth_components/ProtectedRoute";
import Layout from "./components/atoms/Layout";
import HomePage from "./pages/HomePage";
import TopUpPage from "./pages/TopUpPage";
import TransactionHistoryPage from "./pages/TransactionHistoryPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
// import Transaction from "./pages/TransactionPage";
import TransactionPage from "./pages/TransactionPage";

function App() {
  const dispatch = useDispatch();
  const {
    data: userData,
    isLoading: isUserLoading,
    error,
  } = useGetMeQuery(null, {
    skip: !sessionStorage.getItem("token"),
  });

  // load profile if token exist in session
  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      dispatch(setIsAuthenticated(true));

      if (!isUserLoading && userData) {
        dispatch(setUser(userData));
        dispatch(setLoading(false));
      }
      if (error) {
        console.error("Error fetching user profile:", error);
        dispatch(setIsAuthenticated(false));
        dispatch(setLoading(false));
      }
    } else {
      dispatch(setIsAuthenticated(false));
      dispatch(setLoading(false));
    }
  }, [dispatch, userData, isUserLoading, error]);

  return (
    <Router>
      <Toaster position="top-center" />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/top-up"
            element={
              <ProtectedRoute>
                <TopUpPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transaction"
            element={
              <ProtectedRoute>
                <TransactionPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transactions-history"
            element={<TransactionHistoryPage />}
          />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/edit-profile" element={<EditProfilePage />} />
        </Route>

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
