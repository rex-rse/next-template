import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface TInputProps {
  label: string;
  name: string;
  errorMessage: string;
  register: UseFormRegister<any>;
  type: HTMLInputTypeAttribute;
  disabled?: boolean;
}

const Input = ({
  label,
  name,
  errorMessage,
  register,
  type,
  disabled,
}: TInputProps) => {
  return (
    <div className="flex flex-col my-4">
      <label className="">
        {label}{' '}
        {errorMessage ? (
          <span className="text-red-600 font-bold">({errorMessage})</span>
        ) : null}
      </label>
      <input
        type={type}
        className={`input ${
          errorMessage
            ? 'input-error'
            : 'focus:ring-greenDark focus:border-greenDark'
        }`}
        name={name}
        disabled={disabled}
        {...register(name)}
      />
    </div>
  );
};

export default Input;
