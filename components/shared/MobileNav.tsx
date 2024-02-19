"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />

          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                className="cursor-pointer"
                width={32}
                height={32}
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image
                  src="/assets/images/logo-text.svg"
                  alt="logo"
                  width={152}
                  height={23}
                />

                <ul className="header-nav_elements">
                  {navLinks.map(({ label, route, icon }) => {
                    const isActive = pathname === route;
                    return (
                      <li
                        className={`${
                          isActive && "gradient-text"
                        } p-18 flex whitespace-nowrap text-dark-700`}
                        key={route}
                      >
                        <Link
                          href={route}
                          className="sidebar-link cursor-pointer"
                        >
                          <Image
                            src={icon}
                            alt={label}
                            width={24}
                            height={24}
                          />
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="bg-purple-gradient button bg-cover">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
