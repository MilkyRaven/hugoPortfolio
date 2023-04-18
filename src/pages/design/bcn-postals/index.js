import React, { useEffect } from "react";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../../../../components/Footer";
import Nav from "../../../../components/Nav";

export default function Project() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div>
      <Nav></Nav>
      <div>
        <h2 className="text-4xl ml-8">BCN POSTALS</h2>
        <h3 className="text-3xl mt-4 ml-8">so much more than a postcard</h3>
        <div className="flex flex-col items-center">
          <div className="w-[361px] h-[606px] mt-4 mb-4 bg-slate-300"></div>
        </div>
        <p className="ml-10 mr-10 mt-9 mb-9">
          “BCN POSTALS” is a series of fun, minimal postcards which represent 5
          key elements of Barcelona&apos;s identity. Art. Arquitectura. Barri.
          Gastronmia. And of course la Platija.{" "}
        </p>
        <div className="flex flex-col items-center">
          <div className="w-[280px] h-[454px] mt-4 mb-4 bg-slate-300"></div>
          <p>Postal package model.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[280px] h-[454px] mt-4 mb-4 bg-slate-300"></div>
          <p>Postal envelope model.</p>
        </div>
        <p className="ml-10 mr-10 mt-9 mb-9">
          A postcard isn&apos;t just about what you see, it&apos;s also about
          how it makes you feel. BCN Postals achieves that through a more
          interactive and stimulating experience.
        </p>
        {/* Slider Here */}
        <div className="w-screen overflow-scroll scrollbar-hide">
          <motion.div
            ref={carousel}
            className="cursor-grab"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            <motion.div className="flex justify-start items-start">
              <motion.div className="p-4 min-h-xl max-w-2xl flex">
                <Image
                  className="max-w-none w-80 h-100% p-2"
                  width={300}
                  height={200}
                  key={1}
                  src={"https://i.imgur.com/wmBg97c.jpg"}
                  alt="hugo"
                ></Image>
                <Image
                  width={300}
                  height={200}
                  className="max-w-none w-80 h-100% p-2"
                  key={2}
                  src={"https://i.imgur.com/bj0nU8n.jpg"}
                  alt="blue"
                ></Image>
                <Image
                  className="max-w-none w-80 h-100% p-2"
                  width={300}
                  height={200}
                  key={3}
                  src={"https://i.imgur.com/NE8mFa4.jpg"}
                  alt="flower"
                ></Image>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[363px] h-[210px] bg-slate-300"></div>
          <p className="ml-4">
            Painted acrylic postcards, &apos;liquid&apos; casing & custom
            envelopes.
          </p>
        </div>
        <p className="text-xl m-10">
          Closing statement for extra coolness postals son vida, vida son
          postals idk your the artist think of something.
        </p>
      </div>
      <Link href={"/design/reimagining-urban-spaces"}>
        <div className="flex justify-end">
          <div className="flex shadow-xl w-[164px] h-[77px] p-2 rounded-xl items-center">
            <p>Reimagining Urban Spaces</p>
            <div className="w-10 h-10 p-4 bg-slate-300"></div>
          </div>
        </div>
      </Link>
      <Footer></Footer>
    </div>
  );
}
