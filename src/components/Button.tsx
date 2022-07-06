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
      className={`inline-flex relative justify-center w-40 h-10 py-1 px-4 shadow-sm align-middle rounded-md text-white bg-logo  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-logo ${
        loading
          ? 'pointer-events-none'
          : 'hover:bg-white border-logo border-2 hover:text-logo font-bold '
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
