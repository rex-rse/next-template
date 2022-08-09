import React, { ReactElement } from 'react';
import LandingLayout from '@layouts/LandingLayout';
import Table from '@components/Table';
import { CashIcon, CalendarIcon, TicketIcon } from '@heroicons/react/outline';

const Recharges = () => {
  const headers = [
    {
      id: '1',
      key: 'date',
      header: 'Fecha',
    },
    {
      id: '2',
      key: 'time',
      header: 'Hora',
    },
    {
      id: '3',
      key: 'method',
      header: 'Método',
    },
    {
      id: '4',
      key: 'ammount',
      header: 'Monto',
    },
    {
      id: '5',
      key: 'currency',
      header: 'Moneda',
    },
    {
      id: '6',
      key: 'total_bs',
      header: 'Total en Bolívares',
    },
  ];

  const data = [
    {
      id: '1',
      date: 'DD/MM/AA',
      time: 'HH:MM',
      method: 'Efectivo',
      ammount: '10',
      currency: '$',
      total_bs: 'Bs 58,4',
    },
    {
      id: '2',
      date: 'DD/MM/AA',
      time: 'HH:MM',
      method: 'Efectivo',
      ammount: '10',
      currency: '$',
      total_bs: 'Bs 58,4',
    },
    {
      id: '3',
      date: 'DD/MM/AA',
      time: 'HH:MM',
      method: 'Efectivo',
      ammount: '10',
      currency: '$',
      total_bs: 'Bs 58,4',
    },
    {
      id: '4',
      date: 'DD/MM/AA',
      time: 'HH:MM',
      method: 'Efectivo',
      ammount: '10',
      currency: '$',
      total_bs: 'Bs 58,4',
    },
    {
      id: '5',
      date: 'DD/MM/AA',
      time: 'HH:MM',
      method: 'Efectivo',
      ammount: '10',
      currency: '$',
      total_bs: 'Bs 58,4',
    },
    {
      id: '6',
      date: 'DD/MM/AA',
      time: 'HH:MM',
      method: 'Efectivo',
      ammount: '10',
      currency: '$',
      total_bs: 'Bs 58,4',
    },
    {
      id: '7',
      date: 'DD/MM/AA',
      time: 'HH:MM',
      method: 'Efectivo',
      ammount: '10',
      currency: '$',
      total_bs: 'Bs 58,4',
    },
    {
      id: '8',
      date: 'DD/MM/AA',
      time: 'HH:MM',
      method: 'Efectivo',
      ammount: '10',
      currency: '$',
      total_bs: 'Bs 58,4',
    },
    {
      id: '9',
      date: 'DD/MM/AA',
      time: 'HH:MM',
      method: 'Efectivo',
      ammount: '10',
      currency: '$',
      total_bs: 'Bs 58,4',
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
