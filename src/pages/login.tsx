import { ReactElement } from 'react';
import Button from '@components/Button';
import LogoDark from '@components/icons/LogoDark';
import Input from '@components/inputs/Input';
import FooterLayout from '@layouts/FooterLayout';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    formState: { errors },
  } = useForm<any>({});
  return (
    <>
      <div className="p-8 w-full h-screen flex flex-col items-center justify-center">
        <div className="w-1/2 ">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="max-w-xs mx-auto">
              <div className="w-full">
                <LogoDark className="w-40 mx-2" />
              </div>
              <h1 className="text-3xl my-4 w-full font-bold  text-white dark:text-black">
                Bienvenido!
              </h1>
              <p className="my-4 font-semibold text-white dark:text-black">
                Registrate
              </p>
              <div className="my-4">
                <Input
                  errorMessage={errors.name}
                  label="Nombre"
                  name="name"
                  type="text"
                  register={register}
                />
              </div>

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
              <p className="text-center  text-white dark:text-black">
                Ya estas registrado? <span>Ingresa</span>
              </p>
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
