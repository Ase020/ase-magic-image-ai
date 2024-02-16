"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { navLinks } from "@/constants";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex flex-col size-full gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.map(({ label, route, icon }) => {
                const isActive = pathname === route;
                return (
                  <li
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                    key={route}
                  >
                    <Link href={route} className="sidebar-link">
                      <Image
                        src={icon}
                        alt={label}
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {label}
                    </Link>
                  </li>
                );
              })}

              <li className="flex-center p-4 gap-2 cursor-pointer">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="bg-purple-gradient button bg-cover">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
