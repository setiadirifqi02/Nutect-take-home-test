import { useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { useLoginMutation } from "../redux/api/authApi";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "@nextui-org/react";
import toast from "react-hot-toast";

import LoginForm from "../components/auth_components/LoginForm";
import { setIsAuthenticated } from "../redux/features/userSlice";
import LoadingSpiner from "../components/atoms/LoadingSpiner";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading, error, data }] = useLoginMutation();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (data) {
      dispatch(setIsAuthenticated(true));
    }

    if (isAuthenticated) {
      navigate("/");
    }
    if (error) {
      toast.error(error?.data?.message);
    }
  }, [error, isAuthenticated, data]);

  if (isLoading) {
    return <LoadingSpiner />;
  }

  const onLogin = (email, password) => {
    login(email, password);
  };

  return (
    <div className="Login__page flex items-center justify-center h-screen  font-open_sans">
      <div className="Login__page-main w-6/6  md:w-3/6 flex flex-col items-center justify-center gap-4 md:gap-8">
        <div className="flex items-center gap-2">
          <img
            src="/images/icons/Logo.png"
            alt="logo SIMS PPOB"
            className=" h-7"
          />
          <h1 className="text-default-700 text-lg uppercase font-bold font-roboto">
            sims ppob
          </h1>
        </div>
        <h1 className="text-default-700 leading-6 text-xl text-center font-bold max-w-[250px]">
          Masuk atau buat akun untuk memulai
        </h1>
        <LoginForm onLoginHandler={onLogin} />

        <p className="text-default-500  text-xs mt-[-10px]">
          Belum punya akun? registrasi{" "}
          <Link as={RouterLink} to="/register" className="text-red-600 text-xs">
            di sini
          </Link>
        </p>
      </div>
      <div className="Login__page-hero hidden md:flex w-3/6 h-full bg-custom-bg bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
};
export default LoginPage;
