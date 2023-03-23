import React from "react";
import ppapp from "../public/vocalise.png";
import Image from "next/image";
import Heading from "./Heading";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col space-y-16 overflow-hidden relative h-screen justify-center items-center text-center">
      <div className="absolute m-auto items-center justify-center xl:pt-24">
        <div className="grid md:grid-cols-2">
          <div className="text-center md:text-left p-5 mx-auto lg:pl-16 max-sm:mb-20 pt-12">
            <Heading title="Find your voice with Vocalise" />
            <br></br>
            <p className="text-2xl text-darkBlue py-6 tracking-tight">
              Learn more about our mission{" "}
              <span className="underline decoration-vRed italic tracking-tightest">
                today
              </span>
              !{" "}
            </p>
            <br></br>
            
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
            className="mx-auto overflow-hidden w-40 rounded-full md:w-96"
          >
            <Image src={ppapp} alt="app screenshot" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
