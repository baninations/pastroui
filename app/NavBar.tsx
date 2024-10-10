"use client";

import Link from "next/link";
import React from "react";
import { GiVacuumCleaner } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { navLinks } from "./consts";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex pl-4 pr-4 h-16 items-center border-b mb-6 ">
      <Link
        className="text-4xl text-gray-600 transition-colors duration-300 hover:text-blue-400"
        href="/"
      >
        <GiVacuumCleaner size={32} />
      </Link>
      <ul className="flex space-x-4 w-screen justify-center">
        {navLinks.map((item) => (
          <li
            key={item.href}
            className={classnames({
              "text-gray-600 transition-colors duration-500 hover:text-blue-400 underline":
                pathname === item.href,
              "text-gray-600 transition-colors duration-500 hover:text-blue-400":
                pathname !== item.href,
            })}
            // ""
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Link
        href=""
        className="text-4xl text-gray-600 transition-colors duration-300 hover:text-blue-400"
      >
        <CgProfile />
      </Link>
    </nav>
  );
};

export default NavBar;
