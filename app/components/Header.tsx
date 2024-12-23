"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import ThemeSwitcher from "@/app/components/ThemeSwitcher"; // Import ThemeSwitcher

const navigation = [
  { name: "Tokens", href: "/" },
  { name: "Learn", href: "/learn" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "About", href: "/about" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({}: {}) {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="bg-primary/10 shadow-sm rounded-lg px-2">
      {({ open }) => (
        <>
          <div className="max-w-7xl px-1 sm:px-2 lg:px-4 mb-5">
            <div className="flex h-16 justify-between items-center">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <h1>
                    <a href="/">
                      <Image
                        src="/logo-simple-bch.png"
                        alt="TokenStork - Delivering beautiful new CashTokens on BCH since 2023"
                        width={277}
                        height={50}
                        title="TokenStork - Delivering beautiful new CashTokens on BCH since 2023"
                        priority={true}
                      />
                    </a>
                  </h1>
                </div>
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? "border-slate-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                        "inline-flex items-center px-1 pt-1 border-b-2 text-lg font-semibold no-underline"
                      )}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <ThemeSwitcher /> {/* Adding ThemeSwitcher here */}
                <Menu as="div" className="relative ml-3">
                  <div></div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"></Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                  <span className="sr-only">Open main menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="24px"
                    height="24px"
                  >
                    <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z" />
                  </svg>
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    pathname === item.href
                      ? "bg-slate-50 border-slate-500 text-slate-700"
                      : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                    "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <ThemeSwitcher /> {/* Adding ThemeSwitcher here */}
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3"></div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
