import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "../../redux/features/userSlice";

import { Button, Input } from "@nextui-org/react";
import { AtSymbolIcon, UserIcon } from "@heroicons/react/24/solid";

const ProfileForm = ({ user }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const onEditProfileHandler = () => {
    navigate("/account/edit-profile");
  };

  const onLogoutHandler = () => {
    dispatch(setIsAuthenticated(false));
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <form
      //   onSubmit={onSumbitHandeler}
      className="Profile__page-form flex flex-col w-[300px] md:w-[650px]  gap-3 md:gap-5"
    >
      <div className="Profile__page-input">
        <h2 className="font-bold text-md md:text-lg">Email</h2>
        <Input
          type="email"
          isReadOnly
          value={email}
          variant="bordered"
          size="lg"
          radius="sm"
          placeholder="email anda"
          startContent={<AtSymbolIcon className="h-4" />}
        />
      </div>

      <div className="Profile__page-input">
        <h2 className="font-bold text-md md:text-lg">Nama Depan</h2>
        <Input
          isReadOnly
          type="text"
          value={firstName}
          variant="bordered"
          size="lg"
          radius="sm"
          placeholder="nama depan"
          startContent={<UserIcon className="h-4" />}
        />
      </div>

      <div className="Profile__page-input">
        <h2 className="font-bold text-md md:text-lg">Nama Belakang</h2>
        <Input
          isReadOnly
          type="text"
          value={lastName}
          variant="bordered"
          size="lg"
          radius="sm"
          placeholder="nama belakang"
          startContent={<UserIcon className="h-4" />}
        />
      </div>

      <Button
        type="button"
        size="lg"
        onClick={onEditProfileHandler}
        className=" mt-3 md:mt-5 bg-red-600 text-white rounded-[5px]"
      >
        Edit Profile
      </Button>
      <Button
        type="button"
        size="lg"
        variant="bordered"
        onClick={onLogoutHandler}
        className="rounded-[5px] text-red-600 border-red-600"
      >
        Log out
      </Button>
    </form>
  );
};
export default ProfileForm;
