import LandingLayout from '@layouts/LandingLayout';
import { ReactElement } from 'react';

const Login = () => {
  return (
    <div>
      <p></p>
    </div>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Login;
