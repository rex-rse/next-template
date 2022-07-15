import { ReactElement } from 'react';
import Button from '@components/Button';
import LogoDark from '@components/icons/LogoDark';
import Input from '@components/inputs/Input';
import FooterLayout from '@layouts/FooterLayout';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

const Login = () => {
  const {
    register,
    formState: { errors },
  } = useForm<any>({});
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center p-4 md:p-10">
        <div className="w-full max-w-md">
          <div className="overflow-hidden rounded-lg bg-white/30 px-6 py-14 shadow backdrop-blur-sm md:p-14">
            <div className="mx-auto max-w-md md:max-w-xs">
              <div className="w-full">
                <LogoDark className="mx-2 w-40" />
              </div>
              <h1 className="my-4  w-full text-3xl font-bold ">Bienvenido!</h1>
              <p className="my-4 font-semibold ">Registrate</p>
              <div className="my-4">
                <Input
                  labelClassName=" font-semibold"
                  errorMessage={errors.name}
                  label="Nombre"
                  name="name"
                  type="text"
                  register={register}
                />
              </div>

              <div className="my-4">
                <Input
                  labelClassName=" font-semibold"
                  errorMessage={errors.email}
                  label="Email"
                  name="email"
                  type="text"
                  register={register}
                />
              </div>
              <div className="my-4">
                <Input
                  labelClassName=" font-semibold"
                  errorMessage={errors.password}
                  label="Contraseña"
                  name="password"
                  type="password"
                  register={register}
                />
              </div>
              <div className="my-4">
                <Button
                  loading={false}
                  text="Ingresar"
                  type="button"
                  onClick={() => console.log('hola')}
                />
              </div>
              <Link href="login">
                <p className="cursor-pointer text-center">
                  Ya estas registrado? <span>Ingresa</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <FooterLayout>{page}</FooterLayout>;
};

export default Login;
