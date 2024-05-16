import React from "react";

type Props = {
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

export default function Sidebar({
  navigation,
  currentNavigation,
  setCurrentNavigation,
  setCurrentHeading,
}: Props) {
  const handleClick = (item: string, heading: string) => {
    setCurrentHeading(heading);
    setCurrentNavigation(item);
  };

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
        <nav className="flex flex-1 flex-col mt-8">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => {
                  return (
                    <span key={item.heading}>
                      <li className="text-md font-bold text-gray-100 pt-4 pb-2 ">
                        {item.heading}
                      </li>
                      {item.items.map((subItem) => (
                        <li key={subItem.name}>
                          <span
                            onClick={() =>
                              handleClick(subItem.name, item.heading)
                            }
                            className={classNames(
                              subItem.name === currentNavigation
                                ? "bg-gray-800 text-white"
                                : "text-gray-200 hover:bg-gray-800 hover:text-white",
                              "group flex items-center px-2 py-2 text-sm  rounded-md cursor-pointer"
                            )}
                          >
                            - {subItem.name}
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
    </div>
  );
}
