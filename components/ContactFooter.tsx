import Link from "next/link";
import React from "react";
import Image from "next/image";

const ContactFooter = () => {
  return (
    <div>
      <div className="w-full pt-6 mt-10 bg-blue-1 px-4 py-6">
        <div
          className="max-w-7xl mx-auto grid grid-cols-3 gap-12 border-b border-white-1"
          style={{ fontFamily: "Courier New" }}
        >
          <div>
            <div className="flex-1 flex flex-col mb-10 text-white-1">
              <h2 className="uppercase font-semibold text-2xl">DPB</h2>
              <p className="text-xl mt-5 ">
                Definitive and Inclusive Knowledge on Developmental & Behavioral
                Pediatrics
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col mb-10 text-white-1">
            <h2 className="font-semibold  text-2xl">Contact Us</h2>
            <p className=" text-xl mt-5">
              <span className="block">Primary Office:</span>
              <span className="block"> 206-987-0285</span>
              <span className="block">Email: szinner@uw.edu</span>
              <span className="block">Address: 4800 Sand Point Way NE</span>
            </p>
          </div>
          <div className="flex-1 flex flex-col mb-10">
            <h2 className="font-semibold  text-2xl text-white-1">Subscribe</h2>
            <div className="relative mt-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="pl-2 pr-10 py-2 w-full rounded-md placeholder-blue-1"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex ">
                <button>
                  <Image
                    src="/icons/fly.svg"
                    alt="Submit"
                    width={24}
                    height={24}
                    className="inline-block"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex justify-between items-center text-white-1 mt-10 max-w-7xl mx-auto"
          style={{ fontFamily: "Courier Prime" }}
        >
          @ 2023 DBP All Rights Reserved by PNTEC-LTD
          <div className="flex justify-end gap-2">
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/lk.svg"
                alt="LinkedIn"
                width={30}
                height={30}
                className="inline"
              />
            </Link>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/fb.svg"
                alt="Facebook"
                width={30}
                height={30}
                className="inline"
              />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/ig.svg"
                alt="Instagram"
                width={30}
                height={30}
                className="inline"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
