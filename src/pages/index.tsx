import { ReactElement, useState } from 'react';
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
import Button from '@components/Button';

const Index = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const { register } = useForm<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div className="flex h-96 w-full flex-col items-center justify-center">
      <p className="text-center text-5xl font-bold text-black">
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
              className="h-7 w-7 rounded-full bg-black font-bold text-white hover:opacity-70"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
          </div>
          <p className="w-1/3">{count}</p>
          <div className="w-1/3">
            <button
              className="h-7 w-7 rounded-full bg-black font-bold text-white hover:opacity-70"
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
        <button
          onClick={() =>
            dispatch(open({ text: 'testasdasdasdasda', type: 'error' }))
          }
        >
          Open SnackBar
        </button>
      </div>
      <Button
        loading={loading}
        text="click me pls!"
        type="button"
        onClick={() => setLoading(true)}
      />
    </div>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Index;
