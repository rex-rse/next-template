import React from 'react';
import { EyeIcon, XIcon, FilterIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';

interface TableProps {
  headers: any;
  data: any;
  children?: JSX.Element | JSX.Element[];
}

const Table = ({ headers, data }: TableProps) => {
  const headerKeys: any[] = [];

  for (const header of headers) {
    headerKeys.push(header.key);
  }

  return (
    <div className="w-full">
      <div className="flex items-center p-6">
        <div className="mr-auto flex grow items-center space-x-3 rounded-lg bg-gray-50 py-2 pl-10">
          <SearchIcon className="h-4" />
          <h2 className="text-left font-semibold tracking-wide antialiased">
            Search . . .
          </h2>
        </div>
        <FilterIcon className="ml-8 mr-2 h-6 cursor-pointer text-gray-700 transition-colors delay-100 duration-200 hover:text-gray-500" />
      </div>
      <div className="hidden md:block">
        <div className="table w-full bg-white">
          <div className="table-header-group bg-gray-300 font-semibold uppercase tracking-wide text-black antialiased">
            <div className="table-row">
              {headers.map((header) => {
                return (
                  <div className="table-cell px-10 py-3" key={header.id}>
                    {header.header}
                  </div>
                );
              })}
              <div className="table-cell w-10 py-3 pl-10"></div>
              <div className="table-cell w-10 px-10 py-3"></div>
            </div>
          </div>
          <div className="table-row-group font-medium tracking-wide text-black antialiased">
            {data.map((row) => {
              return (
                <div className="table-row" key={row.id}>
                  {headerKeys.map((headerKey) => {
                    const value = row[headerKey];
                    return (
                      <div
                        className="table-cell border-b px-10 py-4"
                        key={headerKey}
                      >
                        {value}
                      </div>
                    );
                  })}
                  <div className="table-cell border-b py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-400 transition-colors delay-100 duration-200 hover:text-blue-500"
                    >
                      <EyeIcon className="h-5 w-5" />
                    </a>
                  </div>
                  <div className="table-cell border-b py-4">
                    <a
                      href="#"
                      className="font-medium text-red-400 transition-colors delay-100 duration-200 hover:text-red-500"
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
