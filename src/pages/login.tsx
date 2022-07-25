import Link from 'next/link';
import FooterLayout from '@layouts/FooterLayout';
import LogoDark from '@components/icons/LogoDark';
import InputV2 from '@components/inputs/InputV2';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import { requester } from 'utils/requester';
import { useAppDispatch } from '@store/hooks';
import { login } from '@store/counter/loginReducer';
import { open } from '@store/counter/snackbarReducer';
import { AxiosError } from 'axios';

interface Inputs {
  email: string;
  password: string;
}

const Register = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { mutate, isLoading } = useMutation(
    (formData: Inputs) => {
      return requester({
        method: 'POST',
        data: formData,
        url: '/login/',
      });
    },
    {
      onSuccess: (response) => {
        const { data } = response;
        console.log('response data', data);
        dispatch(login(data));
        router.push('/');
      },
      onError: (error: AxiosError) => {
        console.log(error.response.data);
        dispatch(open({ text: error.response.statusText, type: 'error' }));
      },
    }
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    mutate({ email, password });
    console.log(data);
  };

  return (
    <div className="flex items-center bg-gradient-to-l from-emerald-700 to-emerald-100">
      <FooterLayout>
        <div className="mx-auto my-auto flex flex-col items-center justify-center rounded-2xl bg-white/75 p-10 shadow-2xl">
          <div>
            <div className="w-full">
              <LogoDark className="mx-2 w-24" />
            </div>
            <h1 className="my-4 w-full text-3xl font-bold text-green-900">
              Bienvenido al sistema
            </h1>
            <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-10">
                <InputV2
                  label="Correo electrónico"
                  name="email"
                  type="text"
                  errorMessage={errors.email}
                  register={register}
                />
              </div>
              <div className="mt-10">
                <InputV2
                  label="Contraseña"
                  name="password"
                  type="password"
                  errorMessage={errors.password}
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
