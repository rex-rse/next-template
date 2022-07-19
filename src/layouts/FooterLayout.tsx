import React from 'react';
import { CheckCircleIcon, XIcon } from '@heroicons/react/outline';

const FooterLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen flex-col justify-between">
      {children}
      <div className="my-2 w-full p-2">
        <div className="my-4 flex justify-center">
          <CheckCircleIcon className="mx-4 block h-6 w-6" aria-hidden="true" />
          <XIcon className="mx-4 block h-6 w-6" aria-hidden="true" />
        </div>
        <p className="my-2 text-center">
          Copyright © 2022 Soft by Creative Tim.
        </p>
      </div>
    </div>
  );
};

export default FooterLayout;
