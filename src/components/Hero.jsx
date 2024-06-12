import React from "react";
import Button from "./Button";
import hero from "../assets/hero__gnfk5g59t0qe_xlarge.png";
import side from "../assets/design_colors_silver_side__ff3nerq51ka6_medium.jpg";

function Hero() {
  return (
    <div className="relative w-full bg-[rgb(245,245,247)] flex gap-3 text-zinc-700 pt-20">
      <div className="w-1/3">
        <h1 className="text-[25vh] text-slate-200 font-bold leading-none -ml-2">
        {["Air", "Pods", "Max"].map((word, index) => (
            <span key={index} className="block">
              {word}
            </span>
          ))}
        </h1>
        <img
          src={hero}
          alt=""
          className="absolute top-20 left-10 size-[70vh]"
        />
      </div>
      <div className="w-1/3 pl-14">
        <h2 className="text-[15vh] leading-[15vh] tracking-tighter font-bold">
          {["Air", "Pods", "Max"].map((word, index) => (
            <span key={index} className="block">
              {word}
            </span>
          ))}
        </h2>
        <p className="pl-8 text-lg font-extralight text-zinc-400">
          "AirPods are the most popular headphones in the world, beloved for
          their effortless setup, incredible sound quality, and iconic design."
          said Greg Joswaik
        </p>
      </div>
      <div className="w-1/3">
        <img src={side} alt="" className="h-[100vh] " />
      </div>
    </div>
  );
}

export default Hero;
