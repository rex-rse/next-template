import React from 'react';

const Card = ({ title, data, icon }) => {
  return (
    <div className="flex  max-h-48 rounded-lg bg-card-background-1 text-black shadow-md hover:bg-card-background-2 hover:shadow-xl">
      <div className="flex w-1/3 items-center justify-center p-2">{icon}</div>
      <div className="w-2/3 p-2">
        <h1 className="m-4 text-3xl font-bold">{title}</h1>
        <h2 className="m-4 text-5xl">{data}</h2>
      </div>
    </div>
  );
};

export default Card;
