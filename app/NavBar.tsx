import Link from "next/link";
import React from "react";
import { GiVacuumCleaner } from "react-icons/gi";

const NavBar = () => {
  const navLinks = [
    { href: "/", name: "Home" },
    { href: "/dashboard", name: "dashboard" },
  ];
  return (
    <nav className="flex space-x-4 pl-4 h-16 items-center border-b mb-6">
      <Link href="/">
        <GiVacuumCleaner />
      </Link>
      <ul className="flex space-x-4">
        {navLinks.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
