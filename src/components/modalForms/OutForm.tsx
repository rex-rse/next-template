import React from 'react';
import Modal from '@components/Modal';
import { CreditCardIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

const OutForm = ({ open, setOpen }) => {
  const router = useRouter();
  const handleAccept = () => {
    router.push('/login');
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
        handleAccept={() => handleAccept()}
        title="Advertencia"
        acceptButtonText="Aceptar"
        cancelButtonText="Cancelar"
        icon={<CreditCardIcon />}
      >
        <p>Usted será redirigido al login</p>
      </Modal>
    </>
  );
};

export default OutForm;
