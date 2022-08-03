import React, { ReactElement, useState } from 'react';
import LandingLayout from '@layouts/LandingLayout';
import Table from '@components/Table';
import { useQuery } from 'react-query';
import { requester } from 'utils/requester';
import {
  ArchiveIcon,
  CashIcon,
  ExclamationCircleIcon,
  TruckIcon,
} from '@heroicons/react/outline';

const useFetchData = () =>
  useQuery('vehicles', async () => {
    const { data } = await requester.get('/registered-vehicle/get/');
    return data.data;
  });

const Vehicles = () => {
  const { data, isLoading } = useFetchData();

  // const s = Object.entries(data);
  // console.log('s', s);

  const headers = [
    {
      id: '1',
      key: 'make',
      header: 'Marca',
    },
    {
      id: '2',
      key: 'model',
      header: 'Modelo',
    },
    {
      id: '3',
      key: 'license_plate',
      header: 'Placa',
    },
    {
      key: 'category.title',
      header: 'Categoría',
    },
    {
      key: 'tag_id.tag_serial',
      header: 'Tag asociado',
    },
    // {

    //   key: 'last_toll',
    //   header: '',
    // },
    // {

    //   key: 'last_used',
    //   header: 'Último uso',
    // },
  ];

  return (
    <>
      <div className="mt-8  w-full ">
        <div className="mb-10 space-y-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-36 rounded-xl shadow-md">
              <div className="flex h-4/6 items-center space-x-6 rounded-t-xl bg-white px-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/30">
                  <TruckIcon className="h-7 w-7 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-md text-gray-600">Vehículos</h2>
                  <h2 className="text-xl font-medium">1</h2>
                </div>
              </div>
            </div>
            <div className="h-36 rounded-xl shadow-md">
              <div className="flex h-4/6 items-center space-x-6 rounded-t-xl bg-white px-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/30">
                  <ArchiveIcon className="h-7 w-7 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-md text-gray-600">Último uso</h2>
                  <h2 className="text-xl font-medium">10/07/2022</h2>
                </div>
              </div>
            </div>
            <div className="h-36 rounded-xl shadow-md">
              <div className="flex h-4/6 items-center space-x-6 rounded-t-xl bg-white px-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/30">
                  <ExclamationCircleIcon className="h-7 w-7 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-md text-gray-600">Invento algo</h2>
                  <h2 className="text-xl font-medium">Bs 10</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-2xl tracking-wide text-gray-800">Vehículos</h2>
          <Table headers={headers} data={data} />
        </div>
      </div>
    </>
  );
};

Vehicles.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Vehicles;
