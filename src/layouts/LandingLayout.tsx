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
    { name: 'Equipo', href: '/team' },
    { name: 'Productos', href: '/products' },
    // { name: 'Calendar', href: '#' },
  ];

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                                ? 'bg-gray-900 text-white pointer-events-none'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
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
                  <Link href="/login">
                    <button className="bg-green-700 text-white px-4 py-2 rounded-md">
                      Login
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
                        ? 'bg-gray-900 text-white pointer-events-none'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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
      <main className="max-w-5xl mx-auto min-h-content">
        <div>{children}</div>
      </main>
    </>
  );
};

export default LandingLayout;
