import React from 'react';

const Card = ({ title, data, icon }) => {
  return (
    <div className="flex bg-slate-400 rounded-lg max-h-48">
      <div className="w-1/3 p-2 flex justify-center items-center">{icon}</div>
      <div className="w-2/3 p-2">
        <h1 className="text-3xl font-bold m-4">{title}</h1>
        <h2 className="text-5xl m-4">{data}</h2>
      </div>
    </div>
  );
};

export default Card;
