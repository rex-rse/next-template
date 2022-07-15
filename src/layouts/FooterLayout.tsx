import React from 'react';
import { CheckCircleIcon, XIcon } from '@heroicons/react/outline';

const FooterLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between bg-gradient-to-r to-white from-blue-200">
      {children}
      <div className="my-2 p-2 w-full">
        <div className="flex justify-center my-4">
          <CheckCircleIcon className="block h-6 w-6 mx-4" aria-hidden="true" />
          <XIcon className="block h-6 w-6 mx-4" aria-hidden="true" />
        </div>
        <p className="text-center my-2">
          Copyright © 2022 Soft by Creative Tim.
        </p>
      </div>
    </div>
  );
};

export default FooterLayout;
