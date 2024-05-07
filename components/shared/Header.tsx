import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <header className="flex justify-between items-center z-50 w-full bg-dark-1">
      <Link href="/" passHref>
        <p
          className="text-[24px] tracking-wider text-blue-1 max-sm:hidden ml-3 font-extrabold"
          style={{ fontFamily: "Courier New" }}
        >
          DEVELOPMENTAL AND BEHAVIORAL PEDIATRICS
        </p>
      </Link>
      <div className="flex items-center gap-16">
        <div className="flex items-center gap-6">
          <Link
            href="https://www.seattlechildrens.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/seattle-children.png"
              alt="Seattle Children's Hospital"
              width={50}
              height={50}
              className="h-14 w-auto"
            />
          </Link>
          <Link
            href="https://www.uwmedicine.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/uw-medicine.png"
              alt="UW Medicine"
              width={50}
              height={50}
              className="h-14 w-auto"
            />
          </Link>
        </div>
        <div className="flex items-center gap-3 mr-6">
          <button>
            <Image src="/icons/font.svg" alt="Font" width={28} height={28} />
          </button>
          <button>
            <Image src="/icons/speak.svg" alt="Speak" width={30} height={30} />
          </button>
          <button>
            <Image
              src="/icons/language.svg"
              alt="Language"
              width={90}
              height={90}
            />
          </button>

          <div className="flex items-left">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Button
                className="bg-blue-2 text-blue-4 rounded-full hover:bg-blue-1 hover:text-white-1 font-bold"
                style={{ fontFamily: "Courier Prime" }}
              >
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
