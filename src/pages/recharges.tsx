import React, { ReactElement, useState } from 'react';
import LandingLayout from '@layouts/LandingLayout';
import Table from '@components/Table';
import { CashIcon, CalendarIcon, TicketIcon } from '@heroicons/react/outline';

const Recharges = () => {
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
    <>
      <div className="mt-8 w-full">
        <div className="mb-10 space-y-8">
          <div className="flex justify-between">
            <h2 className="text-3xl tracking-wide text-gray-800">
              Historial de Recargas
            </h2>
            <button className="cursor-pointer rounded-lg bg-emerald-600/70 px-4 py-2 text-center font-medium text-white shadow-md hover:bg-emerald-600/50 focus:outline-none focus:ring focus:ring-emerald-600/50 focus:ring-opacity-80 focus:ring-offset-2">
              Recargar
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="h-36 rounded-xl shadow-md">
              <div className="flex h-full items-center space-x-6 rounded-xl bg-white px-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/30">
                  <CashIcon className="h-9 w-9 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-lg text-gray-600">Saldo actual</h2>
                  <h2 className="text-2xl font-medium">Bs 1500.00</h2>
                </div>
              </div>
            </div>
            <div className="h-36 rounded-xl shadow-md">
              <div className="flex h-full items-center space-x-6 rounded-xl bg-white px-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/30">
                  <CalendarIcon className="h-9 w-9 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-lg text-gray-600">Última recarga</h2>
                  <h2 className="text-2xl font-medium">10/07/2022</h2>
                </div>
              </div>
            </div>
            <div className="h-36 rounded-xl shadow-md">
              <div className="flex h-full items-center space-x-6 rounded-xl bg-white px-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/30">
                  <TicketIcon className="h-9 w-9 rotate-90 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-lg text-gray-600">
                    Monto de última recarga
                  </h2>
                  <h2 className="text-2xl font-medium">Bs 10</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Table headers={headers} data={data} />
      </div>
    </>
  );
};

Recharges.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Recharges;
