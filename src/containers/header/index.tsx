"use client";

import Link from "next/link";
import Icon from "@/icons";
import ThemeButtonComponent from "@/components/theme-button";
import MenuComponent from "@/components/menu";
import { FooterLinks } from "../../../data/links";

const HeaderContainer = () => {
  return (
    <header className="sticky top-0 inset-x-0 w-full md:w-fit md:h-screen">
      <div className="p-4 md:h-full">
        <div className="bg-white dark:bg-slate-800 shadow p-2 rounded-lg flex justify-between items-center md:flex-col md:h-full">
          <div className="flex items-center gap-4 md:flex-col">
            <div>
              <MenuComponent />
            </div>
            <Link
              href="/"
              className="grid md:-rotate-90 md:w-11 whitespace-nowrap"
            >
              <span className="text-xl">حسین حسینی</span>
              <span className="text-xs">توسعه دهنده وب</span>
            </Link>
          </div>
          <div className="hidden md:grid justify-center py-2 w-full bg-slate-200 dark:bg-slate-700 rounded-lg">
            {FooterLinks.filter((footerItem) =>
              footerItem.title.includes("من رو دنبال کن")
            )
              .at(0)
              ?.links.map((link) => (
                <Link
                  key={link.href}
                  className="p-2"
                  href={link.href}
                  target={link.target}
                >
                  {Icon(link.name)}
                </Link>
              ))}
          </div>
          <div>
            <ThemeButtonComponent />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderContainer;
