"use client";
import React from "react";
import { roles } from "@/constants/roles";
import Image from "next/image";
import { socialLink } from "@/constants/social";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className="relative h-[35vw] sm:h-[35vw] lg:h-[35vw]">
        <Image
          src="/images/banner.png"
          alt="Background Image"
          fill
          style={{ objectFit: "cover", objectPosition: "0% 10%" }}
        />
      </div>

      <div className="max-w-6xl mx-auto p-9 lg:max-w-6xl sm:max-w-4xl md:p-6 sm:p-6">
        <div className="flex justify-center bg-blue-3 items-center">
          <h1
            className="text-center text-4xl text-white-1 text-medium font-semibold"
            style={{ fontFamily: "Courier New" }}
          >
            WHO ARE YOU?
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-5 mt-8">
          {roles.map((role, index) => (
            <div
              className="rounded border bg-blue-2 hover:shadow-lg hover:shadow-blue-3/40"
              key={index}
            >
              <Link href={role.route}>
                <div className="relative w-full h-[400px]">
                  <Image
                    src={role.imgUrl}
                    alt={role.label}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 400px) 100vw, 400px"
                    className="rounded-t-lg"
                  />
                </div>
              </Link>
              <h2
                className="flex justify-center text-[23px] text-orange-1 font-semibold text-uppercase mt-6"
                style={{ fontFamily: "Courier Prime" }}
              >
                {role.label.toUpperCase()}
              </h2>
              <div className="flex justify-center mt-2 mb-2">
                {socialLink.map((link, index) => (
                  <a
                    className="mx-2"
                    href={link.route}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={link.url}
                      alt={link.name}
                      width={24}
                      height={24}
                    />
                  </a>
                ))}
              </div>
              <div className="bg-blue-3 h-10 rounded-b-lg"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-2">
        <button className="block w-4 h-4 rounded-full bg-blue-3"></button>
        <button className="block w-4 h-4 rounded-full bg-blue-3"></button>
        <button className="block w-4 h-4 rounded-full bg-blue-3"></button>
      </div>

      <p
        className="flex justify-center p-3 font-extrabold text-grey-1 text-xl mt-6 tracking-widest"
        style={{ fontFamily: "Courier Prime" }}
      >
        WELCOME TO DEVELOPMENTAL AND BEHAVIORAL PEDIATRICS
      </p>
      <h1
        className="flex justify-center pb-0 font-extrabold text-blue-3 text-2xl tracking-widest"
        style={{ fontFamily: "Courier Prime" }}
      >
        Great Place to Explore Evidence-Based Information of DBP
      </h1>
      <p
        className="flex justify-center mx-auto p-1 font-light text-slate-500 text-xl text-center"
        style={{ fontFamily: "Courier Prime" }}
      >
        The DBP Portal aims to provide accessibility for clinicians, educators,
        and parents seeking developmental and behavioral health resources.
      </p>

      <Link href="/about-us">
        <div
          className="flex items-center justify-center w-1/2 mx-auto mt-5 text-blue-1 text-lg font-normal py-2 rounded-lg"
          style={{ fontFamily: "Courier Prime" }}
        >
          <span className="mr-1">Learn More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-6 w-6 fill-current text-blue-3"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </Link>

      <div className="w-full mt-8">
        <Image
          src="/images/smiling.png"
          alt="Smiling Image"
          width={700}
          height={200}
          className="md:container md:mx-auto h-80 w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
