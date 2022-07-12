import LandingLayout from '@layouts/LandingLayout';
import React, { ReactElement } from 'react';

const User = () => {
  return <div>huevito</div>;
};

User.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default User;
