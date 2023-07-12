"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Links } from "../../../data/links";

type Props = {
  navLinks: Links;
};

const NavigationComponent = ({ navLinks }: Props) => {
  const pathname = usePathname();

  return (
    <nav className="h-full flex justify-center items-center">
      <ul className="relative grid justify-items-center md:flex">
        {navLinks.links.map((link) => {
          const isActive = pathname.startsWith(link.href);

          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`${
                  isActive &&
                  "relative after:content-[''] after:absolute after:bottom-0 after:start-1/2 after:w-1 after:h-1 after:bg-black after:rounded-full"
                } inline-block p-4`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationComponent;
