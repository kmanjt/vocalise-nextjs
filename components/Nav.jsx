import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/vocalise.png";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

const navigation = [
  { name: "Our Workshops", href: "#features", current: false },
  { name: "Our Mission", href: "#mission", current: false },
  { name: "Pricing", href: "#pricing", current: false },
  { name: "Our Team", href: "#team", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const [showModal, setShowModal] = useState(false);
  const [nav, setNav] = useState(false);
  const [colour, setColour] = useState("#5A87C5 ");

  return (
    <Disclosure
      as="nav"
      className="bg-white fixed left-0 w-full z-10 top-0 shadow-sm ..."
    >
      {({ open }) => (
        <>
          <div
            className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
          >
            <div
              className="relative flex h-16 items-center justify-between"
            >
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:darkBlue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className=" pt-3 flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="#hero">
                    <Image
                      src={logo}
                      width={75}
                      height={75}
                      className="block h-12 w-auto "
                      alt="Logo"
                    />
                  </Link>
                </div>
                <div className="pl-7 hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "dark-blue text-white"
                            : "text-zinc-800 hover:bg-darkBlue hover:text-white",
                          "px-5 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                
                
              </div>
              <div>
                  <button className="bg-vRed text-right font-bold text-white rounded-md p-2 m-auto">
                    <Link href="#contact">
                      Book a Workshop
                      </Link>
                  </button>
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
                    item.current
                      ? "darkBlue text-white"
                      : "text-zinc-800 hover:dark-blue hover:bg-darkBlue hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}