import React from 'react';
import { EyeIcon, XIcon } from '@heroicons/react/solid';

interface TableProps {
  headers: any;
  data: any;
  children?: JSX.Element | JSX.Element[];
}

const Table = ({ headers, data }: TableProps) => {
  // const headers = [
  //   {
  //     id: '1',
  //     key: 'brand',
  //     header: 'Marca',
  //   },
  //   {
  //     id: '2',
  //     key: 'model',
  //     header: 'Modelo',
  //   },
  //   {
  //     id: '3',
  //     key: 'plate_number',
  //     header: 'Placa',
  //   },
  //   {
  //     id: '4',
  //     key: 'medium',
  //     header: 'Medio',
  //   },
  //   {
  //     id: '5',
  //     key: 'last_toll',
  //     header: 'Último peaje',
  //   },
  //   {
  //     id: '6',
  //     key: 'last_used',
  //     header: 'Último uso',
  //   },
  // ];

  // const data = [
  //   {
  //     id: '1',
  //     brand: 'Ford',
  //     model: 'Fiesta',
  //     plate_number: 'AA4-B44',
  //     last_toll: 'Punta Piedra',
  //     last_used: 'DD/MM/AA',
  //     medium: 'QR',
  //     test: 'test',
  //   },
  //   {
  //     id: '2',
  //     brand: 'Ford',
  //     model: 'Fiesta',
  //     test: 'test',
  //     last_toll: 'Punta Piedra',
  //     last_used: 'DD/MM/AA',
  //     plate_number: 'AA4-B44',
  //     medium: 'QR',
  //   },
  //   {
  //     id: '3',
  //     brand: 'Marca 1',
  //     model: 'Modelo 2',
  //     last_toll: 'Punta Piedra',
  //     last_used: 'DD/MM/AA',
  //     plate_number: '1234567',
  //     medium: 'Medio1',
  //     test2: 'test23',
  //   },
  // ];

  const headerKeys: any[] = [];

  for (const header of headers) {
    headerKeys.push(header.key);
  }

  return (
    <div className="w-full p-5">
      <div className="hidden rounded-xl shadow md:block">
        <div className="table w-full bg-white">
          <div className="table-header-group bg-blue-800 uppercase text-white">
            <div className="table-row">
              {headers.map((header) => {
                return (
                  <div
                    className="table-cell bg-blue-800 px-6 py-3 text-left"
                    key={header.id}
                  >
                    {header.header}
                  </div>
                );
              })}
              <div className="table-cell w-10 bg-blue-800 px-6 py-3"></div>
              <div className="table-cell w-10 bg-blue-800 px-6 py-3"></div>
            </div>
          </div>
          <div className="table-row-group text-black">
            {data.map((row) => {
              return (
                <div className="table-row" key={row.id}>
                  {headerKeys.map((headerKey) => {
                    const value = row[headerKey];
                    return (
                      <div className="table-cell px-6 py-4" key={headerKey}>
                        {value}
                      </div>
                    );
                  })}
                  <div className="table-cell py-4 ">
                    <a
                      href="#"
                      className="font-medium text-blue-400 hover:text-blue-500"
                    >
                      <EyeIcon className="h-5 w-5" />
                    </a>
                  </div>
                  <div className="table-cell py-4">
                    <a
                      href="#"
                      className="font-medium text-red-400 hover:text-red-500"
                    >
                      <XIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:hidden">
        <div className="space-y-3 rounded-lg bg-gray-100 p-4 shadow">
          <div className="flex items-center justify-between space-x-2">
            <div className="flex space-x-2">
              <div>Ford</div>
              <div>Fiesta</div>
              <div>AA4-B44</div>
              <div>QR</div>
            </div>
            <div className="flex space-x-2">
              <a
                href="#"
                className="font-medium text-blue-400 hover:text-blue-500 "
              >
                <EyeIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="font-medium text-red-400 hover:text-red-500"
              >
                <XIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div>Punta Piedra</div>
            <div>DD/MM/AA</div>
          </div>
        </div>
        <div className="space-y-3 rounded-lg bg-gray-100 p-4 shadow">
          <div className="flex items-center justify-between space-x-2">
            <div className="flex space-x-2">
              <div>Ford</div>
              <div>Fiesta</div>
              <div>AA4-B44</div>
              <div>QR</div>
            </div>
            <div className="flex space-x-2">
              <a
                href="#"
                className="font-medium text-blue-400 hover:text-blue-500 "
              >
                <EyeIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="font-medium text-red-400 hover:text-red-500"
              >
                <XIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div>Punta Piedra</div>
            <div>DD/MM/AA</div>
          </div>
        </div>
        <div className="space-y-3 rounded-lg bg-gray-100 p-4 shadow">
          <div className="flex items-center justify-between space-x-2">
            <div className="flex space-x-2">
              <div>Ford</div>
              <div>Fiesta</div>
              <div>AA4-B44</div>
              <div>QR</div>
            </div>
            <div className="flex space-x-2">
              <a
                href="#"
                className="font-medium text-blue-400 hover:text-blue-500 "
              >
                <EyeIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="font-medium text-red-400 hover:text-red-500"
              >
                <XIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div>Punta Piedra</div>
            <div>DD/MM/AA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
