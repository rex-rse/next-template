import LandingLayout from '@layouts/LandingLayout';
import Card from '@components/Card';
import Button from '@components/Button';
import React, { ReactElement, useState } from 'react';
import { TruckIcon, CashIcon, SupportIcon } from '@heroicons/react/solid';
import MainCard from '@components/MainCard';
import Payments from '@components/Payments';

const Recharge = () => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div className="grow">
      <div className="flex-wrap p-4 md:flex md:justify-between">
        <div className="p-2 md:w-1/3">
          <Card
            title="Saldo"
            data="50Bs"
            icon={
              <CashIcon
                className="m-1.5 block h-16 sm:m-4 sm:h-24 md:m-1.5 lg:h-20"
                aria-hidden="true"
              />
            }
            href="#"
          />
        </div>
        <div className="p-2 md:w-1/3">
          <Card
            title="Vehículos"
            data="5"
            icon={
              <TruckIcon
                className="m-1.5 block h-16 sm:m-4 sm:h-24 md:m-1.5 lg:h-20"
                aria-hidden="true"
              />
            }
            href="/vehicles"
          />
        </div>
        <div className="p-2 md:w-1/3">
          <Card
            title="Viajes"
            data="50Bs"
            icon={
              <SupportIcon
                className="m-1.5 block h-16 sm:m-4 sm:h-24 md:m-1.5 lg:h-20"
                aria-hidden="true"
              />
            }
            href="#"
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
