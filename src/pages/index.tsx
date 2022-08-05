import React, { ReactElement, useState, useEffect } from 'react';
import Link from 'next/link';
import LandingLayout from '@layouts/LandingLayout';
import Table from '@components/Table';
import { Switch } from '@headlessui/react';
import {
  TruckIcon,
  CashIcon,
  SupportIcon,
  ChevronRightIcon,
  XIcon,
} from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { requester } from 'utils/requester';

const useFetchData = () =>
  useQuery('vehicles', async () => {
    const { data } = await requester.get('/registered-vehicle/get/');
    console.log(data);
    return data.data;
  });

const Index = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [enabled, setEnabled] = useState(false);
  const [rows, setRows] = useState([]);
  const name = useSelector(
    (state: any) => state.loginUser?.user_info?.first_name
  );
  const lastName = useSelector(
    (state: any) => state.loginUser?.user_info?.last_name
  );
  const vehicle = useSelector(
    (state: any) => state.loginUser?.user_info?.vehicles
  );
  const { data, isLoading } = useFetchData();

  console.log(data);

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
      id: '4',
      key: 'category_title',
      header: 'Categoría',
    },
    {
      id: '5',
      key: 'tag_serial',
      header: 'Tag asociado',
    },
    {
      id: '6',
      key: 'actions',
      header: 'Habilitar',
    },
  ];

  useEffect(() => {
    if (data) {
      const rows = data.map(
        ({ make, model, license_plate, category, tag_id, enabled }) => {
          return {
            make,
            model,
            license_plate,
            category_title: category.title,
            tag_serial: tag_id.tag_serial,
            enabled: true,
            actions: (
              <div className="flex items-center space-x-3">
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${
                    enabled ? 'bg-blue-600' : 'bg-gray-200'
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Enable notifications</span>
                  <span
                    className={`${
                      enabled ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white`}
                  />
                </Switch>
                <XIcon className="h-6 text-rose-400" />
              </div>
            ),
          };
        }
      );
      setRows(rows);
    }
  }, [data]);

  return (
    <div className="mt-8 w-full">
      <div className="mb-10 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl capitalize tracking-wide text-gray-800">
            Bienvenido, {name} {''} {lastName}
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
                <h2 className="text-xl font-medium">{vehicle}</h2>
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
                <h2 className="text-md text-gray-600">Tránsitos</h2>
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
        {isLoading ? null : <Table headers={headers} data={rows} />}
      </div>
    </div>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Index;
