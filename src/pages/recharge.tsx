import LandingLayout from '@layouts/LandingLayout';
import Card from '@components/Card';
import Button from '@components/Button';
import React, { ReactElement, useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/outline';
import MainCard from '@components/MainCard';
import Payments from '@components/Payments';

const Recharge = () => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div>
      <div className="md:flex flex-wrap p-4">
        <div className="p-2 md:w-1/2 lg:w-1/3">
          <Card
            title="Saldo"
            data="50Bs"
            icon={<CheckCircleIcon className="block h-32" aria-hidden="true" />}
          />
        </div>
        <div className="p-2 md:w-1/2 lg:w-1/3 bg-card-background-1">
          <Card
            title="Vehículos"
            data="5"
            icon={<CheckCircleIcon className="block h-32" aria-hidden="true" />}
          />
        </div>
        <div className="p-2 md:w-1/2 lg:w-1/3 bg-card-background-3">
          <Card
            title="Saldo"
            data="50Bs"
            icon={<CheckCircleIcon className="block h-32" aria-hidden="true" />}
          />
        </div>
      </div>

      <MainCard title="Métodos de pago">
        <Payments />
      </MainCard>
    </div>
  );
};

Recharge.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Recharge;
