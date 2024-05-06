"use client";
import Link from "next/link";
import React from "react";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav
      className="flex justify-between items-center w-full bg-blue-4 text-xl"
      style={{ fontFamily: "Courier Prime" }}
    >
      <div className="flex gap-4">
        {navbarLinks.map((link) => {
          const isActive =
            pathname &&
            (pathname === link.route || pathname.startsWith(`${link.route}/`));

          return (
            <Link
              key={link.route}
              href={link.route}
              className={cn(
                "flex items-center p-4 justify-start font-medium transition-all duration-200 hover:scale-110",
                {
                  "font-[550] text-xl shadow-lg bg-blue-3": isActive,
                }
              )}
            >
              <p className="text-white-1">{link.label}</p>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-1 mr-5">
        <input
          type="text"
          placeholder="Search"
          className="w-60 h-9 rounded-md placeholder-blue-3"
        />
        <Link href="/">
          <Image
            src="/icons/micro.svg"
            alt=""
            width={60}
            height={60}
            className="h-7 w-auto"
          />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
