import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import React, { ReactNode } from "react";
import ContactFooter from "@/components/ContactFooter";
import ContactLink from "@/components/ui/ContactLink";
import ContactCard from "@/components/ContactCard";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <NavBar />
      <div>{children}</div>
      <ContactLink href="/contact" />
      <ContactCard />
      <ContactFooter />
    </div>
  );
};

export default HomeLayout;
