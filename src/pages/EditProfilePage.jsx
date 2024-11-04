import { useSelector } from "react-redux";
import { useEditProfileMutation } from "../redux/api/userApi";

import { PencilIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";

import EditProfileForm from "../components/auth_components/EditProfileForm";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditProfilePage = () => {
  const { user } = useSelector((state) => state.auth);
  const [onEditProfile, { data, error, isLoading }] = useEditProfileMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      toast.success(data?.message);
      navigate("/account");
    }

    if (error) {
      toast.error(error?.data?.message);
    }
    if (isLoading) {
      toast("Mengupdate profile...");
    }
  }, [error, data, isLoading]);

  const onUpdateProfileHandler = (first_name, last_name) => {
    onEditProfile({ first_name, last_name });
  };

  return (
    <div className="EditProfile__page flex flex-col gap-y-10 capitalize items-center">
      <div className="EditProfile__page-avatar flex relative w-36">
        <img
          src="/images/backgrounds/ProfilePhoto.png"
          alt="profile"
          className=" h-full w-full"
        />

        <Button
          radius="full"
          variant="bordered"
          isIconOnly
          className="absolute bottom-0 right-0"
        >
          <PencilIcon className="h-5" />
        </Button>
      </div>

      <EditProfileForm
        user={user?.data}
        onUpdateProfile={onUpdateProfileHandler}
      />
    </div>
  );
};
export default EditProfilePage;
