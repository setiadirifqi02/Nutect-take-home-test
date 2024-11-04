import { Button } from "@nextui-org/react";
import { PencilIcon } from "@heroicons/react/24/solid";
import ProfileForm from "../components/auth_components/ProfileForm";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="Profile__page flex flex-col gap-y-10 capitalize items-center">
      <div className="Profile__page-avatar flex relative w-36">
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
      <ProfileForm user={user?.data} />
    </div>
  );
};
export default ProfilePage;
