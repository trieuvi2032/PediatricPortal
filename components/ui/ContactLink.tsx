import Link from "next/link";
import React from "react";

const ContactLink = ({ href }: { href: string }) => {
  return (
    <div>
      <h1
        className="flex justify-center mx-auto mt-10 font-bold text-gray-1 tracking-widest"
        style={{ fontFamily: "Courier Prime" }}
      >
        GET IN TOUCH
      </h1>
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
