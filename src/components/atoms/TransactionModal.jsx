import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTransactionMutation } from "../../redux/api/financeApi";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";

const TransactionModal = ({
  isOpen,
  onOpenChange,
  service_name,
  service_tariff,
  service_code,
}) => {
  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const [transactionError, setTransactionErorr] = useState(false);
  const [transaction, { data, isError, isSuccess, isLoading }] =
    useTransactionMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      setTransactionSuccess(true);
    }

    if (isError) {
      setTransactionErorr(true);
    }
    if (isLoading) {
      toast("Memproses...");
    }
  }, [isSuccess, isError, isLoading]);

  const onTransactionHandler = () => {
    transaction({ service_code: service_code });
  };

  const onBackToHome = () => {
    navigate("/");
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="xs"
      placement="center"
      radius="xs"
      className="Transaction__modal"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="Transaction__modal-header flex flex-col h-24 items-center justify-center">
              {transactionSuccess ? (
                <CheckCircleIcon className="h-15 md:h-20 w-15 md:w-20 text-green-400" />
              ) : transactionError ? (
                <XCircleIcon className="h-15 md:h-20 w-15 md:w-20 text-red-400" />
              ) : (
                <img
                  src="/images/icons/Logo.png"
                  alt="logo SIMS PPOB"
                  className="h-12 md:h-15 w-12 md:w-15"
                />
              )}
            </ModalHeader>
            <ModalBody className="Transaction__modal-body flex flex-col items-center gap-0">
              <p>Beli {service_name} senilai</p>
              <h3 className="font-bold text-2xl mb-1">Rp. {service_tariff}</h3>
              {transactionSuccess ? (
                <p>Berhasil!</p>
              ) : transactionError ? (
                <p>Gagal</p>
              ) : null}
            </ModalBody>
            <ModalFooter className="Transaction__modal-footer flex flex-col items-center">
              {transactionSuccess ? null : transactionError ? null : (
                <Button
                  onClick={onTransactionHandler}
                  variant="light"
                  className="Transaction__modal-confirm-btn text-lg font-semibold text-red-600"
                >
                  Ya, Lanjut Bayar
                </Button>
              )}
              <Button
                onClick={
                  transaction
                    ? onBackToHome
                    : transactionError
                    ? onBackToHome
                    : onClose
                }
                variant="light"
                className={`Transaction__modal-cancel-btn text-lg font-semibold ${
                  transactionSuccess
                    ? "text-red-600"
                    : transactionError
                    ? "text-red-600"
                    : "text-gray-400"
                } `}
              >
                {transactionSuccess
                  ? "Kembali Ke Home"
                  : transactionError
                  ? "Kembali Ke Home"
                  : "Batalkan"}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default TransactionModal;
