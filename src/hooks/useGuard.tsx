import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const useGuard = () => {
  const router = useRouter();
  const loggedIn = true;
  useEffect(() => {
    !loggedIn ? router.push('/login') : null;
  }, [loggedIn]);
};
