import React from 'react';

const Login = () => {
  return (
    <body className="m-0 font-sans antialiased font-normal bg-white text-start text-size-base leading-default text-slate-500">
      <main className="mt-0 transition-all duration-200 ease-soft-in-out">
        <section>
          <div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
            <div className="container z-10">
              <div className="flex flex-wrap mt-0 -mx-3">
                <div className="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
                  <div className="relative flex flex-col min-w-0 mt-32 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                    <div className="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
                      <h3 className="relative z-10 font-bold text-transparent bg-gradient-cyan bg-clip-text">
                        Bienvenido de nuevo
                      </h3>
                      <p className="mb-0"></p>
                    </div>
                    <div className="flex-auto p-6">
                      <form role="form">
                        <label className="mb-2 ml-1 font-bold text-size-xs text-slate-700">
                          Correo
                        </label>
                        <div className="mb-4">
                          <input
                            type="email"
                            className="focus:shadow-soft-primary-outline text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="email-addon"
                          />
                        </div>
                        <label className="mb-2 ml-1 font-bold text-size-xs text-slate-700">
                          Contraseña
                        </label>
                        <div className="mb-4">
                          <input
                            type="email"
                            className="focus:shadow-soft-primary-outline text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                            placeholder="Contraseña"
                            aria-label="Password"
                            aria-describedby="password-addon"
                          />
                        </div>

                        <div className="text-center">
                          <button
                            type="button"
                            className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-size-xs ease-soft-in tracking-tight-soft bg-gradient-cyan hover:scale-102 hover:shadow-soft-xs active:opacity-85"
                          >
                            Ingresar
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
                      <p className="mx-auto mb-6 leading-normal text-size-sm">
                        No tienes una cuenta?
                      </p>
                      <p className="mx-auto mb-6 leading-normal text-size-sm">
                        <a
                          href="../pages/sign-up.html"
                          className="relative z-10 font-semibold text-transparent bg-gradient-cyan bg-clip-text"
                        >
                          Registrarse
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12">
                  <div className="absolute top-0 hidden w-3/5 h-full -mr-32 overflow-hidden -skew-x-10 -right-40 rounded-bl-xl md:block">
                    <div
                      className="absolute inset-x-0 top-0 z-0 h-full -ml-16 bg-cover skew-x-10"
                      style={{ backgroundImage: '../assets/img/curved6.jpg' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-12">
        <div className="container">
          <div className="flex flex-wrap -mx-3">
            <div className="flex-shrink-0 w-full max-w-full mx-auto mt-2 mb-6 text-center lg:flex-0 lg:w-8/12">
              <a
                href="javascript:;"
                target="_blank"
                className="mr-6 text-slate-400"
              >
                <span className="text-size-lg fab fa-twitter"></span>
              </a>
              <a
                href="javascript:;"
                target="_blank"
                className="mr-6 text-slate-400"
              >
                <span className="text-size-lg fab fa-instagram"></span>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0">
              <p className="mb-0 text-slate-400">
                Copyright ©
                <script>document.write(new Date().getFullYear());</script>
                RSE grupo Venezuela
              </p>
            </div>
          </div>
        </div>
      </footer>
    </body>
  );
};

export default Login;
