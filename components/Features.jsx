import React from "react";
// import { RiNumber1 } from "react-icons/ri";
// import { RiNumber2 } from "react-icons/ri";
// import { RiNumber3 } from "react-icons/ri";
import Image from "next/image";
import image_1 from "../public/Image_1.jpg";
import image_2 from "../public/Image_2.jpg";
import image_3 from "../public/Image_3.jpg";
import Heading from "./Heading";
import { motion } from "framer-motion";

const feature = [
  {
    // Body Language
    title: "Communcation Essentials",
    description: "Focuses on mastering body language to enhance communication skills. Learn to interpret and convey nonverbal cues effectively,  fostering better connections with others.",
    image: image_1,
    // icon: RiNumber1,
  },
  {
    // Vocalisation
    title: "Development & Delivery",
    description: "Teaches vocalization techniques and stage presence for confident, engaging public speaking. Practice voice exercises, manage stage fright, and effectively utilize body language.",
    image: image_2,
    // icon: RiNumber2,
  },
  {
    // Pitch Perfect
    title: "Pitch Perfect",
    description: "Learning effective techniques for structuring, designing, and delivering engaging talks that captivate audiences",
    image: image_3,
    // icon: RiNumber3,
  },
];

export default function Features() {
  return (
    <div className="flex flex-shrink flex-col relative space-y-16 overflow-hidden h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <div className="absolute top-[20%]">
        <Heading title="Our Workshops" />
      <br></br>
      <br></br>
      <br></br>
      </div>
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
                className="rounded-xl bg-white text-center p-4 w-full sm:h-full  shadow-lg"
              >

                {/* <Image src={feature.image} alt="image_unavailable" width={250} height={150} className="w-full h-auto"/> */}
                <h6 className="font-bold text-darkBlue text-2xl max-sm:text-xs">{feature.title}</h6>
                <p className="text-center">
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
