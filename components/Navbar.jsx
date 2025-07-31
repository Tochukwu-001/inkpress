import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About Us",
      url: "/about",
    },
    {
      name: "Contact Us",
      url: "/contact",
    },
    {
      name: "Sign In",
      url: "/signin",
    },
  ];
  return (
    <nav className="flex items-center justify-between py-3 px-6 shadow-md">
      <Link href={"/"} className="flex items-center gap-2">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={1000}
          height={1000}
          className="w-10 h-10"
        />
        <p className="text-2xl ">InkPress</p>
      </Link>

      <div className="flex items-center gap-5">
        {navItems.map((item, index) => (
          <Link
            href={item.url}
            className="text-lg hover:text-yellow-700 hover:underline"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
