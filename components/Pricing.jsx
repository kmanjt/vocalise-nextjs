import React from "react";
import Heading from "./Heading";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div className="flex flex-col relative space-y-16 overflow-hidden h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <div className="text-center p-5 w-full">
        <Heading title="Pricing" />
        <br></br>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="card text-center shadow">
              <div class="card-header"><h8 className="font-medium text-black text-2xl max-sm:text-xs">€400</h8></div>
                <div class="card-body">
                  <h5 class="card-title">Communicate with Confidence</h5>
                  <p class="card-text">
                  This package only focuses on improving vocal delivery and body language skills to confidently express themselves and communicate more effectively.
                  </p>
                  <a href="#contact" className="bg-vRed text-right font-bold text-white rounded-md p-2 m-auto" class="btn btn-primary">
                    Book Now
                  </a>
                </div>
                <div class="card-footer text-muted">Price Reduced for a Limited Time</div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card text-center shadow">
              <div class="card-header"><h8 className="font-medium text-black text-2xl max-sm:text-xs">€600</h8></div>
                <div class="card-body">
                  <h5 class="card-title">Speak with Impact</h5>
                  <p class="card-text">
                  This package includes vocal delivery, body language, and <u>speech techniques</u> to help become leaders and future change makers and connect thier ideas with others.
                  </p>
                  <a href="#contact" className="bg-vRed text-right font-bold text-white rounded-md p-2 m-auto" class="btn btn-primary">
                    Book Now
                  </a>
                </div>
                <div class="card-footer text-muted">Price Reduced for a Limited Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;


