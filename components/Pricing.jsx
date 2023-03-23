import React from "react";
import Heading from "./Heading";

import { motion } from "framer-motion";

const Pricing = () => {
    return (
        <div className="flex flex-col relative space-y-16 overflow-hidden h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
          <div className="text-center  p-5">
            <Heading title="Pricing" />
            <br></br>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                <div className="bg-white rounded-md shadow-md p-6">
                    <h1 className="text-2xl font-bold text-center pb-4">Essential</h1>
                    <p className="bg-vRed text-white p-1 rounded-md w-1/5 m-auto mb-4">€150</p>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                <div className="bg-white rounded-md shadow-md p-6">
                    <h1 className="text-2xl font-bold text-center pb-4">Enhanced</h1>
                    <p className="bg-vRed text-white p-1 rounded-md w-1/5 m-auto mb-4">€250</p>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>


          </div>
          
        </div>
      </div>
        
        );

}


export default Pricing;