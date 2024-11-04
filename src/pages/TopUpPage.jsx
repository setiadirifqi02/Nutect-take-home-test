import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useGetBalanceQuery, useTopUpMutation } from "../redux/api/financeApi";

import toast from "react-hot-toast";

import BalanceInfoCard from "../components/atoms/BalanceInfoCard";
import Heading from "../components/atoms/Heading";
import TopUpInput from "../components/atoms/TopUpInput";

const TopUpPage = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: balanceData } = useGetBalanceQuery();
  const [topUp, { data: topUpData, isSuccess, isLoading, error }] =
    useTopUpMutation();

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }

    if (isSuccess) {
      toast.success(topUpData?.message);
    }

    if (isLoading) {
      toast("Memproses...");
    }
  }, [error, isSuccess, isLoading]);

  const onTopUp = (top_up_amount) => {
    topUp(top_up_amount);
  };

  return (
    <div className="TopUp__Page flex flex-col gap-y-10 capitalize">
      <BalanceInfoCard user={user?.data} balance={balanceData?.data?.balance} />
      <Heading title={"Silahkan masukan"} subTitle={"Nominal Top up"} />
      <TopUpInput onTopUpHandler={onTopUp} />
    </div>
  );
};
export default TopUpPage;
