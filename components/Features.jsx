import React from "react";
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import Heading from "./Heading";
import { motion } from "framer-motion";

const feature = [
  {
    description: "Body Language",
    icon: RiNumber1,
  },
  {
    description: "Vocalisation",
    icon: RiNumber2,
  },
  {
    description: "Pitch Perfect",
    icon: RiNumber3,
  },
];

export default function Features() {
  return (
    <div className="flex flex-shrink flex-col relative space-y-16 overflow-hidden h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <div className="absolute top-[20%]">
        <Heading title="Our Workshops" />
      </div>
      <br></br>
      <div className="grid md:grid-cols-3 grid-cols-1 p-2 absolute">
        {feature.map((feature, index) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              key={index}
              className="p-4"
            >
              <div
                key={index}
                className="rounded-lg bg-white text-center p-4 w-full h-full  shadow-lg"
                
              >
                <feature.icon
                  className="h-10 text-white  bg-darkBlue text-bold w-10 p-2 mb-6 mx-auto rounded-full max-sm:w-6 max-sm:h-6"
                  
                />

                <p className="font-medium text-black text-2xl max-sm:text-xs">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
