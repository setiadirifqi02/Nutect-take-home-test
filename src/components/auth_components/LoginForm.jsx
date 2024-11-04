import { useState } from "react";
import {
  validateEmail,
  validatePassword,
} from "../../helpers/FormValidationHelper";

import { Button, Input } from "@nextui-org/react";
import {
  AtSymbolIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

const LoginForm = ({ onLoginHandler }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSumbitHandeler = (e) => {
    e.preventDefault();

    const emailValid = validateEmail(email);
    setIsEmailValid(!emailValid);

    const passwordValid = validatePassword(password);
    setIsValidPassword(passwordValid);

    if (emailValid && !passwordValid) {
      onLoginHandler({ email, password });
    }
  };

  return (
    <form
      onSubmit={onSumbitHandeler}
      className="Login__page-form flex flex-col w-full items-center gap-3 md:gap-5"
    >
      <Input
        isClearable
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        isInvalid={isEmailValid}
        errorMessage="Email anda tidak valid"
        variant="bordered"
        radius="sm"
        placeholder="masukan email anda"
        className="md:max-w-[300px] lg:max-w-[380px]"
        onClear={() => setEmail("")}
        startContent={<AtSymbolIcon className="h-4" />}
      />

      <Input
        variant="bordered"
        radius="sm"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        isInvalid={isValidPassword}
        errorMessage="Masukan password anda"
        placeholder="masukan password anda"
        className="md:max-w-[300px] lg:max-w-[380px]"
        startContent={<LockClosedIcon className="h-4 " />}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
            aria-label="toggle password visibility"
          >
            {isVisible ? (
              <EyeSlashIcon className="h-4" />
            ) : (
              <EyeIcon className="h-4 text-default-400" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
      />

      <Button
        type="submit"
        // radius="sm"
        className="w-[300px] lg:w-[380px] mt-3 md:mt-5 bg-red-600 text-white rounded-[5px]"
      >
        Masuk
      </Button>
    </form>
  );
};
export default LoginForm;
