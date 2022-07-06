import { ReactElement } from 'react';
import ThemeSwitch from '@components/ThemeSwitch';
import LandingLayout from '@layouts/LandingLayout';
// import UserPanel from '@layouts/UserPanelLayout';
import {
  decrement,
  increment,
  selectCount,
} from '@store/counter/counterReducer';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import Input from '@components/inputs/Input';
import { useForm } from 'react-hook-form';
import { open } from '@store/counter/snackbarReducer';

const Index = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const { register } = useForm<any>({});
  return (
    <div className="w-full h-96 flex flex-col justify-center items-center">
      <p className="text-5xl font-bold text-black dark:text-white text-center">
        Next JS, Tailwind CSS and Redux Toolkit Template
      </p>
      <div className="my-4">
        <ThemeSwitch />
      </div>
      <div>
        <p>Redux Counter</p>
        <div className="flex justify-center text-center">
          <div className="w-1/3">
            <button
              className="w-7 h-7 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-70 font-bold"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
          </div>
          <p className="w-1/3">{count}</p>
          <div className="w-1/3">
            <button
              className="w-7 h-7 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-70 font-bold"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div>
        <Input
          label="test"
          name="test"
          type="text"
          errorMessage="error"
          register={register}
        />
      </div>
      <div>
        <button onClick={() => dispatch(open())}>Open SnackBar</button>
      </div>
    </div>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Index;
