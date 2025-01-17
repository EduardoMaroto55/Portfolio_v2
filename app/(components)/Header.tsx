"use client";

import { useState } from "react";

import { motion } from "framer-motion";
const Nav = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavBar = () => {
    setisClick(!isClick);
  };

  const items = [
    {
      title: "HOME",
      href: "/#home",
    },
    {
      title: "ABOUT",
      href: "/#about",
    },
    {
      title: "PROJECTS",
      href: "/#projects",
    },
    {
      title: "CONTACT",
      href: "/#contact",
    },
  ];

  return (
    <motion.header
      className="fixed bg-custom-blue text-white top-0 flex justify-between font-bold z-20 h-16 px-10 w-full items-center text-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-2xl w-full ">Eduardo Maroto</h1>
      <div className=" hidden md:block ">
        <ul className="flex justify-between gap-5 items-stretch w-full p-0 m-0  ">
          {items.map((item) => {
            return (
              <li key={item.title} className="menu_links">
                <a href={item.href} className="rounded-lg p-2">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="md:hidden flex items-center m-container grid-12 w-fit py-3.5 relative z-30">
        <button
          className="inline-flex items-center justify-center p-2 rounded-md
           hover:text-white z-40"
          onClick={toggleNavBar}
        >
          <div
            className="burgerWrapped bg-gray-100 hover:bg-gray-200"
            onClick={() => {
              setisClick(!isClick);
            }}
          >
            <div
              className={`${"burger"} ${isClick ? "burgerActive" : ""}`}
            ></div>
          </div>
        </button>
      </div>

      {isClick && (
        <motion.div
          className="md:hidden mobile_menu"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="menu pt-60 xs:pt-30 px-4 pb-16 ">
            <ul className="space-y-1 xs:space-y-0">
              {items.map((item) => {
                return (
                  <li
                    key={item.title}
                    className="text-9 xs:text-6 hide-overflow hover:text-blue-500"
                    onClick={toggleNavBar}
                  >
                    <a href={item.href}>{item.title}</a>
                  </li>
                );
              })}
              
            </ul>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Nav;
