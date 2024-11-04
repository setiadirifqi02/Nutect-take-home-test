import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  useGetBalanceQuery,
  useGetTransactionHistoryQuery,
} from "../redux/api/financeApi";

import BalanceInfoCard from "../components/atoms/BalanceInfoCard";
import ListOfTransactions from "../components/atoms/ListOfTransactions";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";
import LoadingSpiner from "../components/atoms/LoadingSpiner";

const TransactionHistoryPage = () => {
  const [limit, setLimit] = useState(5);
  const { user } = useSelector((state) => state.auth);
  const { data: balanceData } = useGetBalanceQuery();
  const {
    data: transactionHistory,
    isLoading,
    error,
  } = useGetTransactionHistoryQuery({
    limit: limit,
  });

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }
  }, [error]);

  return (
    <div className="Transaction__page flex flex-col gap-y-10 capitalize">
      <BalanceInfoCard user={user?.data} balance={balanceData?.data?.balance} />
      <h2 className="font-bold text-lg">Semua Transaksi</h2>
      {isLoading ? (
        <LoadingSpiner />
      ) : (
        <ListOfTransactions data={transactionHistory?.data?.records} />
      )}
      <Button
        variant="light"
        onClick={() => setLimit((prevLimit) => prevLimit + 5)}
        className="font-bold text-center text-red-600"
      >
        Show More
      </Button>
    </div>
  );
};
export default TransactionHistoryPage;
