"use client";
import React from "react";
import Link from "next/link";

const navDataList = [
  { href: "/", name: "홈페이지" },
  { href: "/blog", name: "블로그" },
];

const navbarItems = navDataList.map(({ href, name }) => (
  <Link
    key={href}
    className="cursor-pointer text-gray-600
      transition-colors duration-300 hover:text-blue-500"
    href={href}
  >
    {name}
  </Link>
));

export default function Navbar() {
  return (
    <div className="drawer drawer-end">
      {/* checked ? show : hide */}
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <MainBarContent />
      </div>
      <div className="drawer-side">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <SideBarContent />
      </div>
    </div>
  );
}

const MainBarContent = () => {
  return (
    <div className="flex justify-between bg-white/80 px-8 py-4 shadow-md backdrop-blur-md dark:bg-gray-900 md:px-16">
      <Link href="/" className="md:basis-1/6">
        RedTraining
      </Link>
      {/* Links */}
      <div className="hidden items-center space-x-16 md:flex md:justify-center md:basis-4/6">
        {navbarItems}
      </div>
      <div className="md:basis-1/6" />
      <label htmlFor="nav-drawer" className="md:hidden">
        <MenuSVG />
      </label>
    </div>
  );
};

const SideBarContent = () => {
  const hideDrawer = () => {
    const drawerCheckbox = document.getElementById(
      "nav-drawer"
    )! as HTMLInputElement;
    drawerCheckbox.checked = false;
  };
  return (
    <ul className="menu h-full w-48 bg-base-200 p-4">
      {navbarItems.map((item) => (
        <li key={item.key} onClick={hideDrawer}>
          {item}
        </li>
      ))}
    </ul>
  );
};

function MenuSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="inline-block h-6 w-6 stroke-current"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  );
}
