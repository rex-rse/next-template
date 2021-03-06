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
      className={`inline-flex relative justify-center h-10 py-1 px-4 shadow-sm align-middle rounded-md w-full text-white bg-greenLight  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greenLight ${
        loading
          ? 'pointer-events-none'
          : 'hover:bg-greenDark border-greenMedium border-2 hover:text-white font-bold '
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
