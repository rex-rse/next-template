import LandingLayout from '@layouts/LandingLayout';
import React, { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { UserCircleIcon, PencilAltIcon } from '@heroicons/react/solid';
import InputV2 from '@components/inputs/InputV2';
import { Transition } from '@headlessui/react';

interface Inputs {
  password: string;
  phone_number: string;
}
const Schema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'Mínimo 8 caracteres')
    .max(12, 'Máximo 12 caracteres')
    .required('Este campo es requerido'),
  phone_number: yup
    .number()
    .min(11, 'Debe ser 11 digitos')
    .max(11, 'Debe ser 11 digitos')
    .required('Este campo es requerido'),
});

const User = () => {
  const [isEditable, setIsEditable] = useState(false);

  const {
    register,
    formState: { errors },
  } = useForm<any>({});
  return (
    <div className="mt-36 w-5/6 rounded-xl bg-gray-100 p-24 shadow-xl">
      <div className="flex items-center justify-between">
        <div className="border-r-2">
          <UserCircleIcon className="mr-16 h-20 pr-10 text-gray-500" />
        </div>
        <h1 className="ml-16 w-full text-center text-4xl font-bold tracking-wide">
          {' '}
          John Doe
        </h1>
      </div>
      <div className="mt-16 flex flex-col">
        <div className="mt-6 flex items-center">
          <h3 className="mr-4 text-lg  font-bold">Correo:</h3>
          <h3 className="mr-auto text-lg">johndoe@vepeajes.com</h3>
        </div>
        <div className="mt-10 flex items-start">
          {isEditable ? (
            <form className="mr-auto">
              <div className="flex w-full items-center">
                <div className="w-full">
                  <InputV2
                    label="Teléfono celular"
                    name="phone_number"
                    type="text"
                    errorMessage={errors.phone_number?.message}
                    register={register}
                  />
                </div>
                <div className="ml-16 w-full">
                  <InputV2
                    label="Contraseña"
                    name="password"
                    type="text"
                    errorMessage={errors.password?.message}
                    register={register}
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Confirmar"
                className="mt-14 block cursor-pointer rounded bg-emerald-600/70 px-4 py-2 text-center font-semibold text-white shadow-md hover:bg-emerald-600/50 focus:outline-none focus:ring focus:ring-emerald-600/50 focus:ring-opacity-80 focus:ring-offset-2"
              />
            </form>
          ) : (
            <>
              <h3 className="mr-4 text-lg font-bold">Teléfono:</h3>
              <h3 className="mr-auto text-lg">+58 (414)1234567</h3>
            </>
          )}

          <button
            type="button"
            onClick={() =>
              isEditable ? setIsEditable(false) : setIsEditable(true)
            }
          >
            <PencilAltIcon className="h-5 text-gray-600 hover:text-emerald-500" />
          </button>
        </div>
        {/* <div className="mt-10 flex items-center">
          <h3 className="mr-4 text-lg font-bold">Contraseña:</h3>
          <h3 className="mr-auto text-lg">password</h3>
          <button
            type="button"
            onClick={() =>
              isPasswordEditable
                ? setIsPasswordEditable(false)
                : setIsPasswordEditable(true)
            }
          ></button>
          <PencilAltIcon className="h-5 text-gray-600 hover:text-emerald-500" />
        </div> */}
      </div>
    </div>
  );
};

User.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default User;
