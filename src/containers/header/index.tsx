"use client";

import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { GitHubIcon, LinkedInIcon } from "@/icons";
import ThemeButtonComponent from "@/components/theme-button";

const HeaderContainer = () => {
  return (
    <header className="fixed top-0 inset-x-0 w-full md:sticky md:inset-auto md:w-fit md:h-full">
      <div className="p-2 md:h-full">
        <div className="bg-white dark:bg-slate-800 shadow p-2 rounded-lg flex justify-between items-center md:flex-col md:h-full">
          <div className="flex items-center gap-4 md:flex-col">
            <div>
              <button className="p-4 bg-slate-200 dark:bg-slate-700 rounded-lg">
                <Bars3Icon className="w-5 h-5" />
              </button>
            </div>
            <div className="grid md:-rotate-90 md:w-11 whitespace-nowrap">
              <span className="text-xl">حسین حسینی</span>
              <span className="text-xs">توسعه دهنده وب</span>
            </div>
          </div>
          <div className="hidden md:grid justify-center py-2 w-full bg-slate-200 dark:bg-slate-700 rounded-lg">
            <Link className="p-2" href="" target="_blank">
              <GitHubIcon />
            </Link>
            <Link className="p-2" href="" target="_blank">
              <LinkedInIcon />
            </Link>
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
