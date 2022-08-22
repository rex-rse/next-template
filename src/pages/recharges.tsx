import React, { ReactElement } from 'react';
import LandingLayout from '@layouts/LandingLayout';
import Table from '@components/Table';
import {
  CashIcon,
  CalendarIcon,
  TicketIcon,
  XCircleIcon,
} from '@heroicons/react/outline';
import { useGuard } from 'hooks/useGuard';
import { useSelector } from 'react-redux';
import { useAxios } from 'hooks/useAxios';
import { useMutation } from 'react-query';
import { useAppDispatch } from '@store/hooks';
import { AxiosError } from 'axios';
import { open } from '@store/counter/snackbarReducer';
import { CheckCircleIcon } from '@heroicons/react/solid';

const Recharges = () => {
  useGuard();
  const dispatch = useAppDispatch();
  const { requester } = useAxios();
  const [rows, setRows] = React.useState([]);
  const accountNumber = useSelector(
    (state: any) => state.loginUser?.user_info?.account_number
  );
  const { mutate } = useMutation(
    (account: any) => {
      return requester({
        method: 'POST',
        data: account,
        url: 'recharge-module/get/',
      });
    },
    {
      onSuccess: (response) => {
        const { data } = response;
        console.log(data);
      },
      onError: (error: AxiosError) => {
        dispatch(open({ text: error.response.statusText, type: 'error' }));
      },
    }
  );

  const headers = [
    {
      id: '1',
      key: 'external_reference_id',
      header: 'Referencia',
    },
    {
      id: '2',
      key: 'facial_amount',
      header: 'Monto',
    },
    {
      id: '3',
      key: 'status',
      header: 'Estado',
    },
  ];
  console.log(accountNumber);
  React.useEffect(() => {
    mutate({ account_number: accountNumber });
    const table = rows.map(
      ({ external_reference_id, facial_amount, status }) => {
        return {
          external_reference_id,
          facial_amount,
          status:
            status === 'created' ? (
              <CheckCircleIcon className="h-6 text-green-500" />
            ) : status === 'cancelled' ? (
              <XCircleIcon className="h-6 text-red-500" />
            ) : null,
        };
      }
    );
    setRows(table);
  }, []);

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
        <Table headers={headers} data={rows} />
      </div>
    </>
  );
};

Recharges.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Recharges;
