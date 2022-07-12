import LogoDark from '@components/icons/LogoDark';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
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
    { name: 'vehículos', href: '/vehicles' },
    // { name: 'Calendar', href: '#' },
  ];

  return (
    <>
      <Disclosure as="nav" className="bg-greenDark">
        {({ open }) => (
          <>
            <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-greenLight focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <LogoDark className="w-20 mx-2" />
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4 h-full">
                      {navigation.map((item) => (
                        <Link href={item.href} key={item.name}>
                          <button
                            className={classNames(
                              item.href === router.asPath
                                ? 'bg-greenLight text-white pointer-events-none'
                                : 'text-white hover:bg-greenLight hover:text-white',
                              'px-3 py-2 rounded-md text-sm  font-semibold'
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
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Link href="/user">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="#ffffff"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </Link>

                  <Link href="/login">
                    <button className="p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#ffff"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.href === router.asPath
                        ? 'bg-greenLight text-white pointer-events-none'
                        : 'text-white hover:bg-greenLight',
                      'block px-3 py-2 rounded-md text-base font-medium'
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
      <main className="max-w-5xl mx-auto min-h-content ">
        <div>{children}</div>
      </main>
    </>
  );
};

export default LandingLayout;
