import { useState } from "react";

import { Button, Input } from "@nextui-org/react";
import { WalletIcon } from "@heroicons/react/24/solid";

import { topUpNominal } from "../../constants/billings";
import { validateNominal } from "../../helpers/FormValidationHelper";

const TopUpInput = ({ onTopUpHandler }) => {
  const [nominal, setNominal] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    onTopUpHandler({ top_up_amount: nominal });
  };

  const isValidNominal = validateNominal(nominal);

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-3 md:w-7/12"
      >
        <Input
          type="number"
          placeholder="Masukan atau pilih nominalnya"
          variant="bordered"
          value={nominal}
          onChange={(e) => setNominal(e.target.value)}
          radius="sm"
          startContent={<WalletIcon className="h-5 text-gray-500" />}
        />
        <Button
          isDisabled={isValidNominal}
          type="submit"
          radius="sm"
          className="bg-red-600 text-white"
        >
          Top Up
        </Button>
      </form>
      <div className="grid grid-cols-3 gap-2 md:w-5/12">
        {topUpNominal.map((item) => (
          <Button
            type="button"
            onClick={() => setNominal(item.value)}
            key={item.label}
            variant="bordered"
            radius="sm"
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
export default TopUpInput;
