import { useState } from "react";
import {
  validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../../helpers/FormValidationHelper";

import { Button, Input } from "@nextui-org/react";
import {
  AtSymbolIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const RegisterForm = ({ onRegisterHandler }) => {
  const [isVisible, setIsVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [isFirstNameValid, setIsFirstNameVlid] = useState(false);

  const [lastName, setLastName] = useState("");
  const [isLastNameValid, setIsLastNameValid] = useState(false);

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [confimPassword, setConfimPassword] = useState("");
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);

  const onSumbitHandeler = (e) => {
    e.preventDefault();

    const emailValid = validateEmail(email);
    setIsEmailValid(!emailValid);

    const firstNameValid = validateName(firstName);
    setIsFirstNameVlid(firstNameValid);

    const lastNameValid = validateName(lastName);
    setIsLastNameValid(lastNameValid);

    const passwordValid = validatePassword(password);
    setIsPasswordValid(passwordValid);

    const confirmPasswordValid = validateConfirmPassword(confimPassword);
    setIsConfirmPasswordValid(confirmPasswordValid);

    if (emailValid && !passwordValid) {
      onRegisterHandler({
        email,
        first_name: firstName,
        last_name: lastName,
        password,
      });
    }
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <form
      onSubmit={onSumbitHandeler}
      className="Register__page-form flex flex-col w-full items-center gap-3 md:gap-5"
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
        onClear={() => setEmail("")}
        className="md:max-w-[300px] lg:max-w-[380px]"
        startContent={<AtSymbolIcon className="h-4" />}
      />

      <Input
        isClearable
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        isInvalid={isFirstNameValid}
        errorMessage="Masukan nama depan"
        variant="bordered"
        radius="sm"
        placeholder="masukan nama depan"
        onClear={() => setFirstName("")}
        className="md:max-w-[300px] lg:max-w-[380px]"
        startContent={<UserIcon className="h-4" />}
      />

      <Input
        isClearable
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        isInvalid={isLastNameValid}
        errorMessage="Masukan nama belakang"
        variant="bordered"
        radius="sm"
        placeholder="masukan nama belakang"
        onClear={() => setLastName("")}
        className="md:max-w-[300px] lg:max-w-[380px]"
        startContent={<UserIcon className="h-4" />}
      />

      <Input
        variant="bordered"
        radius="sm"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        isInvalid={isPasswordValid}
        errorMessage="Password minimal 8 karakter!"
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

      <Input
        variant="bordered"
        radius="sm"
        value={confimPassword}
        onChange={(e) => setConfimPassword(e.target.value)}
        isInvalid={isConfirmPasswordValid}
        errorMessage="Password tidak sama"
        placeholder="konfirmasi password"
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
        className="w-[300px] lg:w-[380px] mt-3 md:mt-5 bg-red-600 text-white rounded-[5px]"
      >
        Masuk
      </Button>
    </form>
  );
};
export default RegisterForm;
