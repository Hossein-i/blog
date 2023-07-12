"use client";

import NavigationComponent from "@/components/navigation";
import ThemeButtonComponent from "@/components/theme-button";
import Link from "next/link";
import { useState } from "react";
import { HeaderLinks } from "../../../data/links";

const HeaderContainer = () => {
  const [show, setShow] = useState(false);
  const navLinks = HeaderLinks.filter((link) => link.title === "نویگیشن")[0];

  return (
    <header className="bg-white fixed top-0 start-0 w-full">
      <div className="max-w-screen-2xl mx-auto md:px-12 md:py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button
            className="p-4 md:hidden"
            onClick={() => setShow((current) => !current)}
          >
            {show ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
          <p className="font-bold text-xs lg:text-base">
            <Link href="/">
              <span className="text-xl lg:text-4xl">Hossein-i</span>
              .ir
            </Link>
          </p>
        </div>
        <div
          className={`${
            show ? "block" : "hidden"
          } fixed top-0 start-0 -z-10 w-screen h-screen bg-white md:block md:w-auto md:h-auto md:z-10 md:relative`}
        >
          <NavigationComponent navLinks={navLinks} />
        </div>
        <div>
          <button className="p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <ThemeButtonComponent />
        </div>
      </div>
    </header>
  );
};

export default HeaderContainer;
