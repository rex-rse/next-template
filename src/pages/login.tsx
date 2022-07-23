import Link from 'next/link';
import { useForm } from 'react-hook-form';
import FooterLayout from '@layouts/FooterLayout';
import LogoDark from '@components/icons/LogoDark';
import InputV2 from '@components/inputs/InputV2';

const Register = () => {
  const {
    register,
    formState: { errors },
  } = useForm<any>({});

  return (
    <div className="flex items-center bg-gradient-to-l from-emerald-700 to-emerald-100">
      <FooterLayout>
        <div className="mx-auto my-auto flex max-w-xs flex-col items-center justify-center rounded-2xl bg-white/75 p-10 shadow-2xl">
          <div>
            <div className="w-full">
              <LogoDark className="mx-2 w-24" />
            </div>
            <h1 className="my-4 w-full text-3xl font-bold text-green-900">
              Bienvenido al sistema
            </h1>
            <form className="mt-12 w-full">
              <div className="mt-10">
                <InputV2
                  label="Correo electrónico"
                  name="email"
                  type="text"
                  // error={true}
                  errorMessage="ads"
                  register={register}
                />
              </div>
              <div className="mt-10">
                <InputV2
                  label="Contraseña"
                  name="password"
                  type="password"
                  // error={true}
                  errorMessage="ads"
                  register={register}
                />
              </div>
              <input
                type="submit"
                value="Ingresar"
                className="mt-16 block w-full cursor-pointer rounded bg-emerald-600/70 px-4 py-2 text-center font-semibold text-white shadow-md hover:bg-emerald-600/50 focus:outline-none focus:ring focus:ring-emerald-600/50 focus:ring-opacity-80 focus:ring-offset-2"
              />
            </form>
            <Link href="register">
              <p className="mt-4 cursor-pointer text-center text-sm">
                No tienes una cuenta?{' '}
                <span className="underline decoration-emerald-600 decoration-2 hover:text-emerald-600">
                  Regístrate
                </span>
              </p>
            </Link>
          </div>
        </div>
      </FooterLayout>
      <div className=" hidden w-full lg:block">
        <img className="aspect-1 max-h-screen" src="/login.svg" alt="login" />
      </div>
    </div>
  );
};

export default Register;
