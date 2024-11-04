import { WalletIcon } from "@heroicons/react/24/solid";
import { Button, Input, useDisclosure } from "@nextui-org/react";
import TransactionModal from "./TransactionModal";

function TransactionInput({ service_tariff, service_name, service_code }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <TransactionModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        service_name={service_name}
        service_tariff={service_tariff}
        service_code={service_code}
      />
      <form className="Transaction__input flex flex-col gap-3">
        <Input
          type="number"
          variant="bordered"
          value={service_tariff}
          radius="sm"
          startContent={<WalletIcon className="h-5 text-gray-500" />}
        />
        <Button onClick={onOpen} radius="sm" className="bg-red-600 text-white">
          Bayar
        </Button>
      </form>
    </>
  );
}
export default TransactionInput;
