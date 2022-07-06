import { CheckCircleIcon, XIcon } from '@heroicons/react/outline';
import { close, snackbar } from '@store/counter/snackbarReducer';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useEffect } from 'react';

const Snackbar = () => {
  const dispatch = useAppDispatch();
  const { open, text, type } = useAppSelector(snackbar);

  const handleClose = () => {
    dispatch(close());
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        dispatch(close());
      }, 3000);
    }
  }, [open, dispatch]);

  return open ? (
    <div className="bg-green-900 border-green-600 border-4 w-96 h-16 rounded-md flex items-center p-4 absolute right-6 top-6">
      <div className="w-1/12">
        <CheckCircleIcon className="block h-6 w-6" aria-hidden="true" />
      </div>
      <h1 className="w-10/12 mx-2">{text}</h1>
      <button className="w-1/12">
        <XIcon
          className="block h-6 w-6"
          aria-hidden="true"
          onClick={handleClose}
        />
      </button>
    </div>
  ) : null;
};

export default Snackbar;
