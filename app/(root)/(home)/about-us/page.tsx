import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <main>
      <div className="relative h-[34vw] sm:h-[34vw] lg:h-[34vw] mb-9">
        <Image
          src="/images/about-banner.png"
          alt="Background Image"
          fill
          style={{ objectFit: "cover", objectPosition: "10% 90%" }}
        />
      </div>

      <div className="lg:max-w-full md:max-w-4xl sm:max-w-4xl md:p-0 sm:p-0 ml-10 mr-10 items-center">
        <div className="m-0 w-full bg-blue-3">
          <Link
            href="https://www.seattlechildrens.org/directory/samuel-h-zinner/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center m-0 text-white-1 text-2xl tracking-wider pt-2 pb-2 hover:text-2xl transition-all duration-75"
            style={{ fontFamily: "Courier Prime" }}
          >
            | Samuel H Zinner, MD |
          </Link>
        </div>
        <div className="flex">
          <Link
            href="https://www.seattlechildrens.org/directory/samuel-h-zinner/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-[400px] w-[400px]">
              <Image src="/images/Dr.png" alt="About Us" fill />
            </div>
          </Link>
          <div className="ml-10 mt-3">
            <p
              className="text-2xl text-gray-1"
              style={{ fontFamily: "Courier Prime" }}
            >
              Dr. Zinner pursues clinical and research interests with a strong
              focus on psychosocial and behavioral aspects of neurodevelopment.
              Within the subspecialty field of Developmental and Behavioral
              Pediatrics (DBP), Dr. Zinner has a particular interest in Tourette
              syndrome and its associated conditions, including Attention
              Deficit Disorders, learning disabilities and anxiety disorders
              among others in the context of family and other social influences.
            </p>
          </div>
        </div>
      </div>
      <div className="relative container max-w-full h-[700px] mt-8">
        <Image
          src="/images/doctorBanner.jpeg"
          alt="Doctor Description"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
        />
        <div className="absolute inset-0 bg-blue-3 opacity-40 " />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3  flex flex-col items-center z-20">
          <Image
            src="/icons/quote.svg"
            alt="Quote"
            width={35}
            height={35}
            className="mb-10"
          />

          <h1
            className="text-white-1 text-2xl font-semibold px-20 text-center"
            style={{ fontFamily: "Courier New" }}
          >
            This site has been developed and is exclusively maintained by Samuel
            H Zinner, MD of the Division of Developmental Medicine and is
            supported in part through a LEND grant as well as voluntary
            contribution. The purpose of this site is to assist individuals and
            families, healthcare providers, allied health professionals and
            educators in accessing reliable regional and web-based resources
            related to child, adolescent and family developmental & behavioral
            health.
          </h1>
        </div>
      </div>
      <Image
        src="/images/award.png"
        alt="Award"
        width={1000}
        height={1000}
        className="container"
      />
    </main>
  );
};

export default AboutUs;
