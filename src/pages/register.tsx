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
      <div className="p-4 md:p-10 w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          <div className="backdrop-blur-sm bg-white/30 shadow overflow-hidden rounded-lg px-6 py-14 md:p-14">
            <div className="max-w-md md:max-w-xs mx-auto">
              <div className="w-full">
                <LogoDark className="w-40 mx-2" />
              </div>
              <h1 className="text-3xl  my-4 w-full font-bold ">Bienvenido!</h1>
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
                <p className="text-center cursor-pointer 	 ">
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
