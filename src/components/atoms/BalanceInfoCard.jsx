import Heading from "./Heading";

const BalanceInfoCard = ({ user, balance }) => {
  return (
    <div className="flex flex-col md:flex-row items-start">
      <div className="flex md:flex-col md:w-5/12 gap-4 items-center md:items-start">
        <img
          src={
            user?.profile_image ==
            "https://minio.nutech-integrasi.com/take-home-test/null"
              ? "/images/backgrounds/ProfilePhoto.png"
              : user?.profile_image
          }
          alt="profile"
          className="h-15 w-15 md:h-20 md:w-20 mb-4"
        />
        <Heading
          title={"selamat datang"}
          subTitle={`${user?.first_name} ${user?.last_name}`}
        />
      </div>
      <div className="flex  relative  md:w-7/12 ">
        <div className="flex absolute flex-col p-4 gap-3 text-white">
          <h1 className="text-lg">Saldo Anda</h1>
          <h1 className="text-4xl font-bold">Rp. {balance}</h1>
          <p className="text-gray-200">lihat saldo</p>
        </div>
        <img
          src="/images/backgrounds/BackgroundSaldo.png"
          alt="bg-saldo"
          className="w-full h-40"
        />
      </div>
    </div>
  );
};
export default BalanceInfoCard;
