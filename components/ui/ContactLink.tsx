import Link from "next/link";
import React from "react";

const ContactLink = ({ href }: { href: string }) => {
  return (
    <div>
      <Link
        href={href}
        className="flex items-center justify-center mx-auto mt-1 text-blue-3 text-2xl tracking-widest"
      >
        <span
          className="hover:shadow-sm hover:shadow-blue-3/50"
          style={{ fontFamily: "Courier Prime" }}
        >
          Contact
        </span>
      </Link>
    </div>
  );
};

export default ContactLink;
