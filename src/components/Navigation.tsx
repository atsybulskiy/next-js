"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

export const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();

  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between p-4 lg:px-5">
      <div className="flex lg:gap-x-12">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              className={classNames(
                isActive ? "text-blue-400" : "text-gray-50",
                "text-sm font-semibold leading-6",
              )}
              href={link.href}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
  );
};
