import React, { ReactElement, useState } from 'react';
import LandingLayout from '@layouts/LandingLayout';
import Table from '@components/Table';
import {
  ArchiveIcon,
  ExclamationCircleIcon,
  TruckIcon,
} from '@heroicons/react/outline';

const Trips = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const headers = [
    {
      id: '1',
      key: 'brand',
      header: 'Marca',
    },
    {
      id: '2',
      key: 'model',
      header: 'Modelo',
    },
    {
      id: '3',
      key: 'plate_number',
      header: 'Placa',
    },
    {
      id: '4',
      key: 'medium',
      header: 'Medio',
    },
    {
      id: '5',
      key: 'last_toll',
      header: 'Último peaje',
    },
    {
      id: '6',
      key: 'last_used',
      header: 'Último uso',
    },
  ];

  const data = [
    {
      id: '1',
      brand: 'Ford',
      model: 'Fiesta',
      plate_number: 'AA4-B44',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      medium: 'QR',
      test: 'test',
      disabled: false,
    },
    {
      id: '2',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
      disabled: false,
    },
    {
      id: '3',
      brand: 'Marca 1',
      model: 'Modelo 2',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: '1234567',
      medium: 'Medio1',
      test2: 'test23',
      disabled: true,
    },
    {
      id: '4',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
      disabled: false,
    },
    {
      id: '5',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
      disabled: false,
    },
    {
      id: '6',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
      disabled: false,
    },
    {
      id: '7',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
      disabled: false,
    },
    {
      id: '8',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
      disabled: false,
    },
    {
      id: '9',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
      disabled: false,
    },
    {
      id: '10',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
      disabled: false,
    },
    {
      id: '11',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
      disabled: false,
    },
    {
      id: '12',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
      disabled: false,
    },
    {
      id: '13',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
      disabled: false,
    },
    {
      id: '14',
      brand: 'Ford',
      model: 'Fiesta',
      test: 'test',
      last_toll: 'Punta Piedra',
      last_used: 'DD/MM/AA',
      plate_number: 'AA4-B44',
      medium: 'QR',
      disabled: false,
    },
  ];

  return (
    <div className="mt-8 w-full">
      <div className="mb-10 space-y-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-36 rounded-xl shadow-md">
            <div className="flex h-4/6 items-center space-x-6 rounded-t-xl bg-white px-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/30">
                <TruckIcon className="h-7 w-7 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-md text-gray-600">Tránsitos</h2>
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

        <h2 className="text-2xl tracking-wide text-gray-800">
          Historial de tránsitos
        </h2>
      </div>
      <Table headers={headers} data={data} />
    </div>
  );
};

Trips.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Trips;
