import React from "react";
import Heading from "./Heading";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div className="flex flex-col relative space-y-16 overflow-hidden h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <div className="text-center p-5 w-full">
        <Heading title="Pricing" />
        <br></br>
        <p className="text-md md:text-xl tracking-tight pl-4">Contact us for discounts and price plans</p>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="card text-center shadow">
                <div class="card-body">
                  <h5 class="card-title text-darkBlue font-bold">Communicate with Confidence</h5>
                  <h8 className="font-medium text-black text-2xl max-sm:text-xs">€400</h8>
                  <p class="card-text">
                  This package only focuses on improving vocal delivery and body language skills to confidently express themselves and communicate more effectively.
                  </p>
                  <button className="bg-vRed  text-right font-bold text-white rounded-md p-2">
                  <a href="#contact" className=" text-white m-auto" >
                    Book Now
                  </a>
                  </button>
                </div>
                
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card text-center shadow">
                <div class="card-body">
                  <h5 class="card-title text-darkBlue font-bold">Speak with Impact</h5>
                  <h8 className="font-medium text-black text-2xl max-sm:text-xs">€600</h8>
                  <p class="card-text">
                  This package includes vocal delivery, body language, and <u>speech techniques</u> to help become leaders and future change makers and connect thier ideas with others.
                  </p>
                  <button className="bg-vRed  text-right font-bold text-white rounded-md p-2">
                  <a href="#contact" className=" text-white m-auto" >
                    Book Now
                  </a>
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;


