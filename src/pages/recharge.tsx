import LandingLayout from '@layouts/LandingLayout';
import Card from '@components/Card';
import Button from '@components/Button';
import React, { ReactElement, useState } from 'react';

const Recharge = () => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      <div className=" grid grid-cols-2 gap-2">
        <div className="col-span-1">
          <Card title="Saldo actual" data="50Bs" icon="icon" />
        </div>
        <div className="col-span-1">
          <Card title="Vehiculos asociados" data="2" icon="icon" />
        </div>
      </div>

      <div className="grid grid-cols-8 gap-4">
        <div className="  bg-white shadow-xl rounded-xl col-span-6 p-40 col-start-2 m-20 ">
          <div className="text-black">
            <p>hola</p>
          </div>
          <div className="grid-cols-2  sm:grid-cols-1">
            <div className="w-1/3 p-2">
              <Button
                loading={loading}
                text="click me pls!"
                type="button"
                onClick={() => console.log('hi')}
              />
            </div>
            <div className="w-1/3 p-2">
              <Button
                loading={loading}
                text="click me pls!"
                type="button"
                onClick={() => console.log('hi')}
              />
            </div>
            <div className="w-1/3 p-2">
              <Button
                loading={loading}
                text="click me pls!"
                type="button"
                onClick={() => console.log('hi')}
              />
            </div>
            <div className="w-1/3 p-2">
              <Button
                loading={loading}
                text="click me pls!"
                type="button"
                onClick={() => console.log('hi')}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Recharge.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Recharge;
