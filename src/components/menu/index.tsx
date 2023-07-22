"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HeaderLinks } from "../../../data/links";

const MenuComponent = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = HeaderLinks.filter((item) => item.title === "نویگیشن")[0];

  return (
    <>
      <button
        className="p-4 bg-slate-200 dark:bg-slate-700 rounded-lg"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <XMarkIcon className="w-5 h-5" />
        ) : (
          <Bars3Icon className="w-5 h-5" />
        )}
      </button>
      {open && (
        <div className="fixed inset-0 max-w-screen-xl h-full mx-auto pointer-events-none">
          <div className="w-full h-full p-4 pt-24 md:ps-24 md:pt-4">
            <div className="bg-white shadow dark:bg-slate-800 h-full rounded-lg pointer-events-auto flex justify-center items-center">
              <nav>
                <ul>
                  {navLinks.links.map((navLink) => {
                    const isActive = pathname.startsWith(navLink.href);

                    return (
                      <li key={navLink.href} className="text-center">
                        <Link
                          href={navLink.href}
                          className={`inline-block p-2 py-4 text-2xl md:text-4xl ${
                            isActive &&
                            "text-blue-600 font-semibold relative after:content-[''] after:absolute after:bottom-0 after:inset-x-0 after:w-full after:h-1 after:bg-blue-600 after:rounded-full"
                          }`}
                          onClick={() => setOpen(!open)}
                        >
                          {navLink.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuComponent;
