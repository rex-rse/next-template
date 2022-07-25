import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import FooterLayout from '@layouts/FooterLayout';
import InputV2 from '@components/inputs/InputV2';
import { requester } from 'utils/requester';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@store/hooks';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { open } from '@store/counter/snackbarReducer';

interface Inputs {
  name: string;
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
        url: '/account-holder/create/',
      });
    },
    {
      onSuccess: (response) => {
        const { data } = response;
        dispatch(open({ text: 'operacion exitosa', type: 'success' }));

        router.push('/login');
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
    const { email, password, name } = data;
    mutate({ email, password, name });
    console.log(data);
  };

  return (
    <div className="flex place-content-center bg-gradient-to-l from-emerald-700 to-emerald-100">
      <FooterLayout>
        <div className="mx-auto my-auto flex flex-col items-center justify-center rounded-2xl bg-white/75 p-10 shadow-2xl">
          <h1 className="my-4 w-full text-3xl font-bold">
            Bienvenido al sistema
          </h1>
          <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <InputV2
                label="Nombre"
                name="name"
                type="text"
                errorMessage={errors.name}
                register={register}
              />
            </div>
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
          <Link href="login">
            <p className="mt-4 cursor-pointer text-center text-sm">
              Ya tienes una cuenta?{' '}
              <span className="underline decoration-emerald-600 decoration-2 hover:text-emerald-600">
                Ingresa
              </span>
            </p>
          </Link>
        </div>
      </FooterLayout>
    </div>
  );
};

export default Register;
