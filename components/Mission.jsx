import React from "react";
import people from "../public/vocalise.png";
import Podium_pic from "../public/Podium-graphic.jpg";
import Image from "next/image";
import Heading from "./Heading";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <div className="flex flex-col relative space-y-16 overflow-hidden h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <div className="absolute grid md:grid-cols-2 grid-cols-1">
        <div className="text-center md:text-left p-5">
          <Heading title="Our Mission" />
          <br></br>
          <p className="text-md md:text-xl tracking-tight pl-4">
          Vocalise is a student-run social enterprise that provides students with the essential skills, knowledge, and confidence to become effective public speakers. 
          </p>
          <br></br>
          <p className="text-md md:text-xl tracking-tight pl-4">
          Our expert tuition covers body language, voice projection, and speech techniques aimed at empowering students to express themselves clearly and confidently and build future leaders. 
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          initial={{ opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 120,
            duration: 3,
            bounce: 0.5,
          }}
          className="align-top text-center m-auto p-4"
        >
          {/* <Image src={people} alt="people" className="w-40 h-40" /> */}
          {/* Note that the image below isn't that resposive */}
          <Image src={Podium_pic} alt="people" className="w-75 h-75" />
        </motion.div>
      </div>
    </div>
  );
}
