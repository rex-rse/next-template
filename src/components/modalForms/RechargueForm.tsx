import React from 'react';
import Modal from '@components/Modal';
import { CreditCardIcon } from '@heroicons/react/solid';
import InputV2 from '@components/inputs/InputV2';
import { useForm } from 'react-hook-form';

const RechargueForm = ({ open, setOpen }) => {
  const handleAccept = () => {
    setOpen(false);
  };

  const {
    register,
    formState: { errors },
  } = useForm<any>({});
  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
        handleAccept={() => handleAccept()}
        title="Recargar"
        acceptButtonText="Aceptar"
        cancelButtonText="Cancelar"
        icon={<CreditCardIcon />}
      >
        <div className="mt-12">
          <InputV2
            label="Método de pago"
            name="payment"
            type="text"
            errorMessage={errors?.payment}
            register={register}
          />
        </div>
        <div className="mt-12">
          <InputV2
            label="Monto de recarga"
            name="recharge"
            type="text"
            errorMessage={errors?.recharge}
            register={register}
          />
        </div>
      </Modal>
    </>
  );
};

export default RechargueForm;
