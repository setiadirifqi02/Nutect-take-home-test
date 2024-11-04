import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import { useRegisterMutation } from "../redux/api/authApi";

import { Link } from "@nextui-org/react";
import toast from "react-hot-toast";

import RegisterForm from "../components/auth_components/RegisterForm";

const RegisterPage = () => {
  const [regiseter, { isLoading, error, data }] = useRegisterMutation();

  console.log(data);

  useEffect(() => {
    if (data) {
      toast.success(data?.message);
    }

    if (error) {
      toast.error(error?.data?.message);
    }
  }, [error, data]);

  const onRegister = (email, first_name, last_name, password) => {
    regiseter(email, first_name, last_name, password);
  };

  return (
    <div className="Register__page flex items-center justify-center h-screen  font-open_sans">
      <div className="Register__page-main w-6/6 md:w-3/6 flex flex-col items-center justify-center gap-4 md:gap-8">
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
        <RegisterForm onRegisterHandler={onRegister} />

        <p className="text-default-500  text-xs mt-[-10px]">
          Sudah punya akun? login{" "}
          <Link as={RouterLink} to="/login" className="text-red-600 text-xs">
            di sini
          </Link>
        </p>
      </div>
      <div className="Register__page-hero  hidden md:flex w-3/6  h-full bg-custom-bg bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
};
export default RegisterPage;
