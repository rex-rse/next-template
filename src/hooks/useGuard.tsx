import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '@store/hooks';
import { loginUser } from '@store/counter/loginReducer';

export const useGuard = () => {
  const router = useRouter();
  const { loggedIn } = useAppSelector(loginUser);
  useEffect(() => {
    !loggedIn ? router.push('/login') : null;
  }, [loggedIn]);
};
