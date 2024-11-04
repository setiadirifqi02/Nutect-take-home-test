import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { useGetBalanceQuery } from "../redux/api/financeApi";

import BalanceInfoCard from "../components/atoms/BalanceInfoCard";
import Heading from "../components/atoms/Heading";
import { Input, Button } from "@nextui-org/react";
import { WalletIcon } from "@heroicons/react/24/solid";
import TransactionInput from "../components/atoms/TransactionInput";

const TransactionPage = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: balanceData } = useGetBalanceQuery();
  const location = useLocation();
  const { service_code, service_name, service_icon, service_tariff } =
    location.state || {};

  return (
    <div className="Transaction__Page flex flex-col gap-y-10 capitalize">
      <BalanceInfoCard user={user?.data} balance={balanceData?.data?.balance} />
      <Heading title="Pembayaran" subTitle="" />
      <div className="Transaction__Service-info flex items-center gap-2">
        <img src={service_icon} alt={service_name} />
        <Heading title="" subTitle={service_name} />
      </div>
      <TransactionInput
        service_tariff={service_tariff}
        service_name={service_name}
        service_code={service_code}
      />
    </div>
  );
};
export default TransactionPage;
