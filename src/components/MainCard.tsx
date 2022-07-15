import React from 'react';

const MainCard = ({ children, title }) => {
  return (
    <div className="p-2">
      <div className="m-4 p-4 bg-slate-400 rounded-lg">
        <h1 className="text-3xl font-bold px-6 py-4">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default MainCard;
