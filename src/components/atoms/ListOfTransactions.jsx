import { dateIdFormatter } from "../../helpers/DateIdFormatter";

const ListOfTransactions = ({ data }) => {
  return (
    <div className="flex flex-col w-full gap-y-4">
      {data?.map((item) => (
        <div
          key={item?.created_on}
          className="flex justify-between border-2 px-4 py-2 rounded-xl"
        >
          <div className="flex flex-col gap-y-3">
            <h1
              className={`text-xl md:text-2xl ${
                item?.transaction_type === "TOPUP"
                  ? "text-green-500"
                  : "text-red-500"
              } font-bold`}
            >
              + Rp. {item?.total_amount}
            </h1>
            <p className="text-xs md:text-sm text-default-400">
              {dateIdFormatter(item?.created_on)}
            </p>
          </div>
          <p className="text-sm md:text-md font-semibold">
            {item?.description}
          </p>
        </div>
      ))}
    </div>
  );
};
export default ListOfTransactions;
