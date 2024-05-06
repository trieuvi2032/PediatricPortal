import React from "react";
import Image from "next/image"; // Import the Image component from the correct package
import Link from "next/link";
import {
  addressSeattleChildren,
  addressUWMedicine,
  phoneSeattleChildren,
  phoneUWMedicine,
} from "@/constants/contactInfo";

const Contact = () => {
  return (
    <div>
      <div className="relative h-[34vw] sm:h-[34vw] lg:h-[34vw] mb-9">
        <Image
          src="/images/contact.png"
          alt="Background Image"
          fill
          style={{ objectFit: "cover", objectPosition: "10% 90%" }}
        />
        <div className="absolute inset-0 flex items-end justify-start mb-10 ml-10">
          <div
            className="bg-white-1 bg-opacity-70 text-blue-4 text-center py-3 px-5 rounded-lg"
            style={{ fontFamily: "Courier Prime" }}
          >
            <h1 className="text-4xl">Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <Link
            href="https://www.seattlechildrens.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/seattle-children.png"
              alt="Seattle Children's Hospital"
              width={200}
              height={200}
            />
          </Link>
        </div>
        <div className="flex container justify-between p-3 mt-2 bg-blue-5">
          <div className="flex-1 ">
            <h2
              className="text-3xl mb-4 text-blue-4"
              style={{ fontFamily: "Courier Prime" }}
            >
              Phone
            </h2>
            {phoneSeattleChildren.map((item, index) => (
              <p key={index}>
                {" "}
                <strong
                  className="text-blue-4 font-semibold hover:underline"
                  style={{ fontFamily: "Courier Prime" }}
                >
                  {`${item.title} `}
                </strong>
                <span
                  className="text-black-1"
                  style={{ fontFamily: "Courier Prime" }}
                >
                  {item.detail}
                </span>
              </p>
            ))}
          </div>
          <div className="flex-1">
            <h2
              className="text-3xl mb-4 text-blue-4"
              style={{ fontFamily: "Courier Prime" }}
            >
              Hospital Address
            </h2>
            {addressSeattleChildren.map((item, index) => (
              <p key={index}>
                <strong
                  className="text-blue-4 font-semibold hover:underline"
                  style={{ fontFamily: "Courier Prime" }}
                >
                  {`${item.title} `}
                </strong>
                <br></br>
                <span
                  className="text-black-500"
                  style={{ fontFamily: "Courier Prime" }}
                >
                  {item.detail}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="container mt-9">
        <div>
          <Link
            href="https://www.uwmedicine.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/uw.png"
              alt="UW Medicine"
              width={200}
              height={200}
            />
          </Link>
        </div>
        <div className="flex container justify-between p-3 mt-4 bg-blue-5">
          <div className="flex-1 ">
            <h2
              className="text-3xl mb-4 text-blue-4 "
              style={{ fontFamily: "Courier Prime" }}
            >
              Phone
            </h2>
            {phoneUWMedicine.map((item, index) => (
              <p key={index}>
                <strong
                  className="text-blue-4 bg-white-500 font-semibold hover:underline"
                  style={{ fontFamily: "Courier Prime" }}
                >
                  {`${item.title} `}
                </strong>
                <span
                  className="text-black-1"
                  style={{ fontFamily: "Courier Prime" }}
                >
                  {item.detail}
                </span>
              </p>
            ))}
          </div>
          <div className="flex-1">
            <h2
              className="text-3xl mb-4 text-blue-4"
              style={{ fontFamily: "Courier Prime" }}
            >
              Hospital Address
            </h2>
            {addressUWMedicine.map((item, index) => (
              <p key={index}>
                <strong
                  className="text-blue-4 font-semibold hover:underline"
                  style={{ fontFamily: "Courier Prime" }}
                >
                  {`${item.title} `}
                </strong>

                <span
                  className="text-black-500 "
                  style={{ fontFamily: "Courier Prime" }}
                >
                  {item.detail}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
