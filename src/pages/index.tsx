import ThemeSwitch from '@components/ThemeSwitch';
import {
  decrement,
  increment,
  selectCount,
} from '@store/counter/counterReducer';
import { useAppDispatch, useAppSelector } from '@store/hooks';

const Index = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
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
    </div>
  );
};

export default Index;
