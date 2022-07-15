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
      <div className=" w-full h-screen flex items-center justify-center">
        <div className="w-full lg:w-1/2 mr-auto">
          <FooterLayout>
            <div className="max-w-xs h-screen flex flex-col justify-center h mx-auto">
              <div>
                <div className="w-full">
                  <LogoDark className="w-24 mx-2" />
                </div>
                <h1 className="text-3xl my-4 w-full font-bold">
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
                  <p className="text-center cursor-pointer	">
                    No tienes una cuenta? <span>Registrate</span>
                  </p>
                </Link>
              </div>
            </div>
          </FooterLayout>
        </div>
        <div className=" hidden lg:block w-3/4">
          <img className="h-screen w-full " src="/imagen.jpeg" alt="login" />
        </div>
      </div>
    </>
  );
};

export default Register;
