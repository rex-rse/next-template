import LandingLayout from '@layouts/LandingLayout';
import Card from '@components/Card';
import Button from '@components/Button';
import React, { ReactElement, useState } from 'react';
import {
  TruckIcon,
  CashIcon,
  SupportIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline';
import MainCard from '@components/MainCard';
import Payments from '@components/Payments';
import Table from '@components/Table';
import Link from 'next/link';

const Index = () => {
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
        <div className="flex items-center justify-between">
          <h2 className="text-4xl tracking-wide text-gray-800">
            Bienvenido, John Doe
          </h2>
          <button className="cursor-pointer rounded-lg bg-emerald-600/70 px-4 py-2 text-center font-medium text-white shadow-md hover:bg-emerald-600/50 focus:outline-none focus:ring focus:ring-emerald-600/50 focus:ring-opacity-80 focus:ring-offset-2">
            Recargar
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-36 rounded-xl shadow-md">
            <div className="flex h-4/6 items-center space-x-6 rounded-t-xl bg-white px-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/30">
                <CashIcon className="h-7 w-7 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-md text-gray-600">Saldo actual</h2>
                <h2 className="text-xl font-medium">Bs 1500.00</h2>
              </div>
            </div>
            <Link href="/recharges">
              <a className="flex h-2/6 items-center rounded-b-xl bg-gray-100 px-6 text-emerald-600 decoration-emerald-600 decoration-2 hover:underline">
                <h4 className="text-sm font-normal">Más información</h4>
                <ChevronRightIcon className="h-4 w-4" />
              </a>
            </Link>
          </div>
          <div className="h-36 rounded-xl shadow-md">
            <div className="flex h-4/6 items-center space-x-6 rounded-t-xl bg-white px-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/30">
                <TruckIcon className="h-7 w-7 text-amber-600" />
              </div>
              <div>
                <h2 className="text-md text-gray-600">Vehículos</h2>
                <h2 className="text-xl font-medium">3750</h2>
              </div>
            </div>
            <Link href="/vehicles">
              <a className="flex h-2/6 items-center rounded-b-xl bg-gray-100 px-6 text-emerald-600 decoration-emerald-600 decoration-2 hover:underline">
                <h4 className="text-sm font-normal">Más información</h4>
                <ChevronRightIcon className="h-4 w-4" />
              </a>
            </Link>
          </div>
          <div className="h-36 rounded-xl shadow-md">
            <div className="flex h-4/6 items-center space-x-6 rounded-t-xl bg-white px-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/30">
                <SupportIcon className="h-7 w-7 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-md text-gray-600">Viajes</h2>
                <h2 className="text-xl font-medium">12750</h2>
              </div>
            </div>
            <Link href="/trips">
              <a className="flex h-2/6 items-center rounded-b-xl bg-gray-100 px-6 text-emerald-600 decoration-emerald-600 decoration-2 hover:underline">
                <h4 className="text-sm font-normal">Más información</h4>
                <ChevronRightIcon className="h-4 w-4" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="space-y-8">
        <h2 className="text-2xl tracking-wide text-gray-800">
          Vehículos Asociados
        </h2>
        <Table headers={headers} data={data} />
      </div>
    </div>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Index;
