import UserPanelLayout from '@layouts/UserPanelLayout';
import { ReactElement } from 'react';
import Landing from '../components/Landing';

const Home = () => {
  return (
    <div>
      <Landing />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <UserPanelLayout>{page}</UserPanelLayout>;
};

export default Home;
