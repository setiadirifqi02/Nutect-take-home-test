import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import { Link } from "@nextui-org/react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function NavBar() {
  const path = useLocation();
  const links = [
    { label: "Top up", link: "/top-up" },
    { label: "Transaction", link: "/transactions-history" },
    { label: "Akun", link: "/account" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full fixed top-0 left-0 z-20 border-b-2">
      <div className="flex justify-between items-center bg-white py-4 px-5 md:px-8 lg:px-32">
        <Link as={RouterLink} to="/">
          <div className="flex items-center gap-2">
            <img
              src="/images/icons/Logo.png"
              alt="logo SIMS PPOB"
              className="h-5 md:h-7"
            />
            <h1 className="text-default-700 text-sm md:text-md lg:text-lg uppercase font-bold font-roboto">
              sims ppob
            </h1>
          </div>
        </Link>
        <div className="flex">
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden absolute cursor-pointer top-4 right-4"
          >
            {open ? (
              <XMarkIcon className="h-7" />
            ) : (
              <Bars3BottomRightIcon className="h-7" />
            )}
          </div>
          <ul
            className={`md:flex md:items-center md:py-0 py-3  gap-4 md:gap-8
         capitalize text-sm md:text-md lg:text-lg font-semibold absolute md:static
          bg-white md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto h-60 
          md:h-auto md:pl-5 pl-5 transistion-all duration-500 ease-in
           ${open ? "top-14" : "top-[-490px]"}
         `}
          >
            {links.map((link) => (
              <li
                key={link.label}
                className=" text-default-600 py-1 md:py-0 duration-500"
              >
                <Link
                  as={RouterLink}
                  to={link.link}
                  color={
                    path.pathname === `${link.link}` ? "danger" : "foreground"
                  }
                  className="text-sm lg:text-lg"
                  onClick={() => setOpen(!open)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
