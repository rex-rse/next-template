import Button from '@components/Button';
import Input from '@components/inputs/Input';
import LandingLayout from '@layouts/LandingLayout';
import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';

const User = () => {
  const {
    register,
    formState: { errors },
  } = useForm<any>({});
  return (
    <div>
      <div className="grid grid-cols-1 p-8 sm:grid-cols-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 20 20"
          fill="#038203"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>

        <p className="text-xl font-bold text-greenMedium ">Alan Brito Dulce</p>
      </div>
      <div className="grid-cols-2 gap-2 p-8 sm:grid">
        <div className="my-4">
          <Input
            errorMessage={errors.phone}
            label="Teléfono"
            name="phone"
            type="text"
            register={register}
          />
        </div>
        <div className="my-4">
          <Input
            errorMessage={errors.email}
            label="Correo"
            name="email"
            type="email"
            register={register}
          />
        </div>

        <div className="my-4">
          <Input
            errorMessage={errors.password}
            label="Nueva contraseña"
            name="password"
            type="password"
            register={register}
          />
        </div>

        <div className="my-4">
          <Input
            errorMessage={errors.confirmPassword}
            label="Confirmar contraseña"
            name="confirmPassword"
            type="password"
            register={register}
          />
        </div>

        <div className="my-4 ">
          <Button
            loading={false}
            text="Enviar"
            type="button"
            onClick={() => console.log('hola')}
          />
        </div>
      </div>
    </div>
  );
};

User.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default User;
