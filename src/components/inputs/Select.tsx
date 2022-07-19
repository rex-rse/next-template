import { UseFormRegister } from 'react-hook-form';

interface TSelectProps {
  label: string;
  name: string;
  errorMessage?: string;
  register?: UseFormRegister<any>;
  options: Array<{ value: string | number; label: string | number }>;
  initialLabelAndValue?: { value: string | number; label: string | number };
  onChange?: any;
}

const Select = ({
  label,
  name,
  errorMessage,
  register,
  options,
  initialLabelAndValue,
}: TSelectProps) => {
  return (
    <div className="my-4 flex flex-col">
      <label className="font-bold">
        {label}{' '}
        {errorMessage ? (
          <span className="font-bold text-red-600">({errorMessage})</span>
        ) : null}
      </label>
      <select
        {...register(name)}
        className={`input ${errorMessage ? 'input-error' : ''}`}
      >
        <option value={initialLabelAndValue?.value || ''}>
          {initialLabelAndValue?.label || 'Seleccione'}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
