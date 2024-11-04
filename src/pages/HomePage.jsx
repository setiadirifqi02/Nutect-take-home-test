import { useSelector } from "react-redux";
import {
  useGetBalanceQuery,
  useGetBannerQuery,
  useGetServicesQuery,
} from "../redux/api/financeApi";

import BalanceInfoCard from "../components/atoms/BalanceInfoCard";
import BilingsCardMenu from "../components/atoms/BilingsCardMenu";
import BannerSlider from "../components/atoms/BannerSlider";

const HomePage = () => {
  const { user } = useSelector((state) => state.auth);
  const { data } = useGetBalanceQuery();
  const { data: serviceData } = useGetServicesQuery();
  const { data: bannerData } = useGetBannerQuery();

  // console.log(bannerData?.data);

  return (
    <div className="Home__page flex flex-col gap-y-10 capitalize">
      <BalanceInfoCard user={user?.data} balance={data?.data?.balance} />
      <BilingsCardMenu services={serviceData?.data} />
      <p className="font-bold">Temukan promo menarik</p>
      <BannerSlider banner={bannerData?.data} />
    </div>
  );
};
export default HomePage;
