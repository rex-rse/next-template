import React, { ReactElement, useState } from 'react';
import LandingLayout from '@layouts/LandingLayout';
import Table from '@components/Table';
import { useQuery } from 'react-query';
import { requester } from 'utils/requester';

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
    <div className="h-full w-full">
      {isLoading ? null : <Table headers={headers} data={data} />}
    </div>
  );
};

Vehicles.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Vehicles;
