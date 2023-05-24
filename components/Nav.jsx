import React from "react";
import Link from "next/link";

const Nav = () => {
  const menuList = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/menu",
      name: "Menu",
    },
    {
      href: "/services",
      name: "Services",
    },
    {
      href: "/blog",
      name: "Blog",
    },
    {
      href: "/about",
      name: "About",
    },
    {
      href: "/contact",
      name: "Contact",
    },
  ];

  return (
    <div className="p-1 bg-black01">
      <div className="w-full max-w-6xl mx-auto px-2 flex items-center justify-between">
        <Link href="/" className="text-xl leading-none text-white">
          <span className="flaticon-pizza-1 mr-1 text-primary-yellow"></span>
          Pizza
          <br />
          <small className="text-primary-yellow text-[11px] tracking-[4px] uppercase">
            Delicous
          </small>
        </Link>
        <ul className="flex justify-end gap-10 text-gray-100">
          {menuList.map((menu, id) => {
            return (
              <li className="menu_link" key={id}>
                <Link href={menu.href}>{menu.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
