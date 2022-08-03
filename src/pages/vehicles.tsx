import React, { ReactElement, useEffect, useState } from 'react';
import LandingLayout from '@layouts/LandingLayout';
import Table from '@components/Table';
import { Switch } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

const Vehicles = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [enabled, setEnabled] = useState(false);
  const [rows, setRows] = useState([]);

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
    {
      id: '7',
      key: 'actions',
      header: '',
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

  useEffect(() => {
    const rows = data.map(
      ({ id, brand, model, plate_number, medium, last_toll, last_used }) => {
        return {
          id,
          brand,
          model,
          plate_number,
          medium,
          last_toll,
          last_used,
          actions: (
            <div className='flex items-center space-x-3'>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? 'bg-emerald-700/50' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`transform transition duration-200 ease-in-out ${
                    enabled ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white`}
                />
              </Switch>
              <XIcon className='h-6 text-rose-400'/>
            </div>
          ),
        };
      }
    );
    setRows(rows);
  });

  return (
    <div className="mt-6 h-full w-full space-y-6">
      <h2 className="text-2xl tracking-wide text-gray-800">
        Historial de Vehículos Asociados
      </h2>
      <Table headers={headers} data={rows} />
    </div>
  );
};

Vehicles.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Vehicles;
