"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "./constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex w-full h-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            width={180}
            height={28}
            alt="logo"
          />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0,6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group mb-2 ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Link href={link.route} className="sidebar-link">
                      <Image
                        src={link.icon}
                        width={24}
                        height={24}
                        alt="logo"
                        className={
                          isActive ? "brightness-200" : ""
                        }
                      />
                      {link.label}
                    </Link>
                  </li>
              
                );
              })}
              </ul>
            <ul className="sidebar-nav_elements">
               {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group mb-2 ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Link href={link.route} className="sidebar-link">
                      <Image
                        src={link.icon}
                        width={24}
                        height={24}
                        alt="logo"
                        className={
                          isActive ? "brightness-200" : ""
                        }
                      />
                      {link.label}
                    </Link>
                  </li>
              
                );
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSwitchSessionUrl="/" showName/>
              </li>
            </ul>
          </SignedIn>
           <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">
              Login
              </Link>
            </Button>
           </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
