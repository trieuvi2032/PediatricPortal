import React from "react";
import Image from "next/image";
import { contactInfo } from "@/constants/contactInfo";
import { usePathname } from "next/navigation";
import ContactLink from "../ui/ContactLink";

const ContactCard = () => {
  const pathname = usePathname();
  return (
    <div>
      <h1
        className="flex justify-center mx-auto mt-10 font-bold text-grey-1 tracking-widest"
        style={{ fontFamily: "Courier Prime" }}
      >
        GET IN TOUCH
      </h1>
      {pathname !== "/contact" && <ContactLink href="/contact" />}
      <div
        className="grid grid-cols-4 max-w-5xl mx-auto gap-5 pt-8 pb-8"
        style={{ fontFamily: "Courier Prime" }}
      >
        {contactInfo.map((info, index) => {
          return (
            <div
              key={index}
              className="p-4 py-2 bg-blue-2 rounded-md text-blue-4 hover:bg-blue-4 hover:text-white-1"
            >
              <Image
                src={info.img}
                alt={info.title}
                width={38}
                height={38}
                className="flex justify-start mt-5 mb-3 ml-2"
              />
              <h3 className="text-xl font-bold uppercase ml-2">{info.title}</h3>
              <p key={index} className="mt-2 mb-1 overflow-wrap-break  ml-2">
                {info.detail}
              </p>
              <p className="mb-5 ml-2"> {info.detail1} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactCard;
