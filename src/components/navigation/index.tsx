"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  navLinks: { name: string; href: string }[];
};

const NavigationComponent = ({ navLinks }: Props) => {
  const pathname = usePathname();

  return (
    <nav className="h-full flex justify-center items-center">
      <ul className="grid justify-items-center gap-4 md:flex">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);

          return (
            <li key={link.name}>
              <Link href={link.href} className={`${isActive && "bg-red-600"}`}>
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
