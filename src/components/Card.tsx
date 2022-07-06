import React from 'react';

const Card = ({ title, data, icon }) => {
  return (
    <div className="w-full px-3 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
      <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap -mx-3">
            <div className="max-w-full px-3 lg:w-1/2 lg:flex-none">
              <div className="flex flex-col h-full">
                <h5 className=" text-left font-bold text-cyan-500">{title}</h5>
                <p className="mb-12 text-left text-green-600">{data}</p>
              </div>
            </div>
            <div className="max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none">
              <div className="h-full bg-blue-700 rounded-xl">
                <div className="relative flex items-center justify-center h-full">
                  {icon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
