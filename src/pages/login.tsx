import Button from '@components/Button';
import LogoDark from '@components/icons/LogoDark';
import Input from '@components/inputs/Input';
import FooterLayout from '@layouts/FooterLayout';
import Link from 'next/link';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
  const {
    register,
    formState: { errors },
  } = useForm<any>({});

  return (
    <>
      <div className=" flex h-screen w-full items-center justify-center">
        <div className="mr-auto w-full lg:w-1/2">
          <FooterLayout>
            <div className="h mx-auto flex h-screen max-w-xs flex-col justify-center">
              <div>
                <div className="w-full">
                  <LogoDark className="mx-2 w-24" />
                </div>
                <h1 className="my-4 w-full text-3xl font-bold">
                  Bienvenido al sistema
                </h1>

                <div className="my-4">
                  <Input
                    errorMessage={errors.email}
                    label="Email"
                    name="email"
                    type="text"
                    register={register}
                  />
                </div>
                <div className="my-4">
                  <Input
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
                <Link href="register">
                  <p className="cursor-pointer text-center	">
                    No tienes una cuenta? <span>Registrate</span>
                  </p>
                </Link>
              </div>
            </div>
          </FooterLayout>
        </div>
        <div className=" hidden w-3/4 lg:block">
          <img className="h-screen w-full " src="/imagen.jpeg" alt="login" />
        </div>
      </div>
    </>
  );
};

export default Register;
