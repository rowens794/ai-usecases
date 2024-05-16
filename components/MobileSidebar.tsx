import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  navigation: {
    heading: string;
    items: { name: string; current: boolean }[];
  }[];
  currentNavigation: string;
  setCurrentNavigation: (navigation: string) => void;
  setCurrentHeading: (heading: string) => void;
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function MobileSidebar({
  sidebarOpen,
  setSidebarOpen,
  navigation,
  setCurrentNavigation,
  setCurrentHeading,
}: Props) {
  const handleClick = () => {
    setCurrentHeading("null");
    setCurrentNavigation("null");
  };

  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/80" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => {
                          return (
                            <span key={item.heading}>
                              <li className="text-sm font-semibold text-gray-300 py-4">
                                {item.heading}
                              </li>
                              {item.items.map((subItem) => (
                                <li key={subItem.name}>
                                  <span
                                    className={classNames(
                                      subItem.current
                                        ? "bg-gray-800 text-white"
                                        : "text-gray-300 hover:bg-gray-800 hover:text-white",
                                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                                    )}
                                  >
                                    {subItem.name}
                                  </span>
                                </li>
                              ))}
                            </span>
                          );
                        })}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
