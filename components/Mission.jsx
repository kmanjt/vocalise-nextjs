import React from "react";
import people from "../public/vocalise.png";
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
          Vocalise aims to tackle the fear of public speaking and reduce the anxiety associated with it. 
Combating the lack of student awareness about the issue.  
Help build confidence among the students.
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
          <Image src={people} alt="people" className="w-40 h-40" />
        </motion.div>
      </div>
    </div>
  );
}
