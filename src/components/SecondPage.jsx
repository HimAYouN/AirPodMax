import React from "react";
import girl from "../assets/audio_quality_eq__bw20hke6z1ea_medium.jpg";
import { HiArrowLongRight } from "react-icons/hi2";

function SecondPage() {
  return (
    <div className="relative flex gap-3 w-full py-20 mx-auto px-32 bg-zinc-300">
      <div>
        <img src={girl} alt="" />
        <div className="absolute top-[25vh] left-[55vh]">
          <h1 className="text-7xl font-bold "> 
            {["Sounds like ", "an epiphany"].map((word, index)=>{
                return <span key={index} className="block">{word}</span>
            })}
          </h1>
        </div>
      </div>
      <div>
        
        <div className="px-10 w-10/12 pt-8">
          <p className="text-zinc-700 pt-[35vh] w-10/12 text-md ">
            Industry-leading Active Noise Cancellation counters external sound
            with equal anti-noise, allowing you to immerse yourself in what
            you're listening to. 
            </p>
            <p className="text-zinc-700 pb- w-10/12 text-md ">
            Press the noise control button to switch to
            Transparency mode, which lets outside sound in so you can interact
            naturally with your surroundings.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
