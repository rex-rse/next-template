import React from 'react';

const MainCard = ({ children, title }) => {
  return (
    <div className="p-2">
      <div className="m-4 rounded-lg bg-slate-400 p-4">
        <h1 className="px-6 py-4 text-3xl font-bold">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default MainCard;
