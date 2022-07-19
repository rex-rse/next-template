import React from 'react';
import Loader2 from './loaders/Loader2';

interface ButtonProps {
  loading: boolean;
  text: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler;
}

const Button = ({ loading, text, type, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={loading}
      onClick={onClick}
      className={`relative inline-flex h-10 w-full justify-center rounded-md bg-greenLight py-1 px-4 align-middle text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-greenLight focus:ring-offset-2 ${
        loading
          ? 'pointer-events-none'
          : 'border-2 border-greenMedium font-bold hover:bg-greenDark hover:text-white '
      }`}
    >
      {loading ? (
        <div className="absolute -top-5">
          <Loader2 />
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
