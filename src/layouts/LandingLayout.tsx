import LogoDark from '@components/icons/LogoDark';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon, LogoutIcon } from '@heroicons/react/outline';
import { UserCircleIcon } from '@heroicons/react/solid';
// import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

interface TLandingLayout {
  children: React.ReactElement;
}

const LandingLayout = ({ children }: TLandingLayout) => {
  const router = useRouter();
  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Recargas', href: '/recharge' },
    { name: 'Vehículos', href: '/vehicles' },
    // { name: 'Calendar', href: '#' },
  ];

  return (
    <div className="h-screen bg-gray-200">
      <Disclosure as="nav" className="bg-emerald-800">
        {({ open }) => (
          <>
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-greenLight focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <LogoDark className="mx-2 w-20" />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex h-full space-x-0">
                      {navigation.map((item) => (
                        <Link href={item.href} key={item.name}>
                          <button
                            className={classNames(
                              item.href === router.asPath
                                ? 'pointer-events-none bg-emerald-600/70 text-white'
                                : 'text-white hover:bg-emerald-600/70 hover:text-white hover:shadow-xl',
                              'border-x border-emerald-800 p-5 font-semibold uppercase tracking-wider antialiased transition-all delay-100 duration-200'
                            )}
                            aria-current={
                              item.href === router.asPath ? 'page' : undefined
                            }
                          >
                            {item.name}
                          </button>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center space-x-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Link href="/user">
                    <button>
                      <UserCircleIcon className="h-7 text-slate-100 transition-colors delay-100 duration-200 hover:text-white" />
                    </button>
                  </Link>

                  <Link href="/login">
                    <button className="p-2">
                      <LogoutIcon className="h-7 text-slate-100 transition-colors delay-100 duration-200 hover:text-white" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.href === router.asPath
                        ? 'pointer-events-none bg-emerald-600/70 text-white'
                        : 'text-white hover:bg-emerald-600/70',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={
                      item.href === router.asPath ? 'page' : undefined
                    }
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <main className=" flex h-full items-start justify-center">
        {children}
      </main>
    </div>
  );
};

export default LandingLayout;
