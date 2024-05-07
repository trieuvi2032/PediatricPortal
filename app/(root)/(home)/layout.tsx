"use client";
import Header from "@/components/shared/Header";
import NavBar from "@/components/shared/NavBar";
import React, { ReactNode } from "react";
import ContactFooter from "@/components/shared/ContactFooter";
import ContactCard from "@/components/shared/ContactCard";
import { usePathname } from "next/navigation";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <div>
      <Header />
      <NavBar />
      <div>{children}</div>

      <ContactCard />
      <ContactFooter />
    </div>
  );
};

export default HomeLayout;
