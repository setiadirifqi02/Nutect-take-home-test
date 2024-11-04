import { useEffect, useState } from "react";

import { Button, Input } from "@nextui-org/react";
import { AtSymbolIcon, UserIcon } from "@heroicons/react/24/solid";
import { validateName } from "../../helpers/FormValidationHelper";

const EditProfileForm = ({ user, onUpdateProfile }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isFirstNameValid, setIsFirstNameVlid] = useState(false);
  const [lastName, setLastName] = useState("");
  const [isLastNameValid, setIsLastNameValid] = useState(false);

  useEffect(() => {
    if (user) {
      const firstName =
        user?.first_name?.charAt(0).toUpperCase() + user?.first_name?.slice(1);
      const lastName =
        user?.last_name?.charAt(0).toUpperCase() + user?.last_name?.slice(1);

      setEmail(user?.email);
      setFirstName(firstName);
      setLastName(lastName);
    }
  }, [user]);

  const onSubmitProfileHandler = (e) => {
    e.preventDefault();
    const firstNameValid = validateName(firstName);
    setIsFirstNameVlid(firstNameValid);

    const lastNameValid = validateName(lastName);
    setIsLastNameValid(lastNameValid);

    if (!firstNameValid && !lastNameValid) {
      onUpdateProfile(firstName, lastName);
    }
  };
  return (
    <form
      onSubmit={onSubmitProfileHandler}
      className="EditProfile__page-form flex flex-col w-[300px] md:w-[650px]  gap-3 md:gap-5"
    >
      <div className="EditProfile__page-input">
        <h2 className="font-bold text-md md:text-lg">Email</h2>
        <Input
          isClearable
          type="email"
          isReadOnly
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="bordered"
          size="lg"
          radius="sm"
          placeholder="masukan email anda"
          startContent={<AtSymbolIcon className="h-4" />}
        />
      </div>

      <div className="EditProfile__page-input">
        <h2 className="font-bold text-md md:text-lg">Nama Depan</h2>
        <Input
          isClearable
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          isInvalid={isFirstNameValid}
          errorMessage="Masukan nama depan"
          variant="bordered"
          size="lg"
          radius="sm"
          placeholder="masukan nama depan"
          onClear={() => setFirstName("")}
          startContent={<UserIcon className="h-4" />}
        />
      </div>

      <div className="EditProfile__page-input">
        <h2 className="font-bold text-md md:text-lg">Nama Belakang</h2>
        <Input
          isClearable
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          isInvalid={isLastNameValid}
          errorMessage="Masukan nama belakang"
          variant="bordered"
          size="lg"
          radius="sm"
          placeholder="masukan nama belakang"
          onClear={() => setLastName("")}
          startContent={<UserIcon className="h-4" />}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className=" mt-3 md:mt-5 bg-red-600 text-white rounded-[5px]"
      >
        Simpan
      </Button>
    </form>
  );
};
export default EditProfileForm;
