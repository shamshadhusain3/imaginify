"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "./constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2 ">
        <Image
          src="/assets/images/logo-text.svg"
          width={180}
          height={28}
          alt="logo"
        />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSwitchSessionUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                width={32}
                height={32}
                alt="menu"
                className="curp-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <SheetHeader>
                <SheetTitle>
                  <Image
                    src="/assets/images/logo-text.svg"
                    width={180}
                    height={28}
                    alt="logo"
                  />
                </SheetTitle>
                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;
                    return (
                      <li
                        key={link.route}
                        className={` ${
                          isActive && "gradient-text"
                        } p-18 whitespace-nowrap text-dark-700 flex `}
                      >
                        <Link
                          href={link.route}
                          className="sidebar-link cursor-pointer"
                        >
                          <Image
                            src={link.icon}
                            width={24}
                            height={24}
                            alt="logo"
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
