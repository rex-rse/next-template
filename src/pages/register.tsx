import Button from '@components/Button';
import LogoDark from '@components/icons/LogoDark';
import Input from '@components/inputs/Input';
import FooterLayout from '@layouts/FooterLayout';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
  const {
    register,
    formState: { errors },
  } = useForm<any>({});

  return (
    <>
      <div className="p-6 w-full h-screen flex items-center justify-center">
        <div className="w-full md:w-1/2">
          <div className="max-w-xs mx-auto">
            <div className="w-full">
              <LogoDark className="w-40 mx-2" />
            </div>
            <h1 className="text-3xl my-4 w-full font-bold">Welcome back</h1>
            <p className="my-4">Enter your email and password to sign in</p>
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
            <p className="text-center">
              Dont have an account? <span>Sign up</span>
            </p>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2">
          <h1>hola</h1>
        </div>
      </div>
    </>
  );
};

Register.getLayout = function getLayout(page: ReactElement) {
  return <FooterLayout>{page}</FooterLayout>;
};

export default Register;
