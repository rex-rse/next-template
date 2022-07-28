import React from 'react';
import { EyeIcon, EyeOffIcon, XIcon, FilterIcon } from '@heroicons/react/solid';
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
        <div className="mb-6 table w-full rounded-xl bg-white shadow-lg">
          <div className="table-header-group font-semibold uppercase tracking-wide text-black antialiased">
            <div className="table-row">
              {headers.map((header) => {
                return header.id === '1' ? (
                  <div
                    className="table-cell rounded-tl-xl bg-emerald-600/40 py-5 pl-10"
                    key={header.id}
                  >
                    {header.header}
                  </div>
                ) : (
                  <div
                    className="table-cell bg-emerald-600/40 py-5 pl-10"
                    key={header.id}
                  >
                    {header.header}
                  </div>
                );
              })}
              <div className="table-cell w-10 rounded-tr-xl bg-emerald-600/40 px-7 py-5"></div>
            </div>
          </div>
          <div className="table-row-group font-medium tracking-wide text-black antialiased">
            {data.map((row) => {
              return !row.disabled ? (
                <div className="table-row" key={row.id}>
                  {headerKeys.map((headerKey) => {
                    const value = row[headerKey];
                    return (
                      <div
                        className="table-cell border-t py-4 pl-10"
                        key={headerKey}
                      >
                        {value}
                      </div>
                    );
                  })}
                  <div className="table-cell border-t py-4">
                    <button
                      type="button"
                      onClick={() => {
                        row.disabled
                          ? (row.disabled = false)
                          : (row.disabled = true);
                      }}
                      className="font-medium text-emerald-700/70 transition-colors delay-100 duration-200 hover:text-emerald-500/70"
                    >
                      {row.disabled ? (
                        <EyeOffIcon className="h-5 w-5" />
                      ) : (
                        <EyeIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className="table-row bg-gray-200/70 text-gray-400 transition-colors delay-100 duration-200"
                  key={row.id}
                >
                  {headerKeys.map((headerKey) => {
                    const value = row[headerKey];
                    return (
                      <div
                        className="table-cell border-t py-4 pl-10"
                        key={headerKey}
                      >
                        {value}
                      </div>
                    );
                  })}
                  <div className="table-cell border-t py-4">
                    <button
                      type="button"
                      onClick={() => {
                        row.disabled
                          ? (row.disabled = false)
                          : (row.disabled = true);
                        console.log(row);
                      }}
                      className="font-medium text-emerald-700/50 transition-colors delay-100 duration-200 hover:text-emerald-500/70"
                    >
                      {row.disabled ? (
                        <EyeOffIcon className="h-5 w-5" />
                      ) : (
                        <EyeIcon className="h-5 w-5" />
                      )}
                    </button>
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
                <EyeOffIcon className="h-5 w-5" />
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
                <EyeOffIcon className="h-5 w-5" />
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
                <EyeOffIcon className="h-5 w-5" />
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
