import React from "react";
import logo from "../assets/img1.svg";

function Hero() {
  return (
    <section className=" w-full pt-36">
      <div className="container grid lg:grid-cols-2 justify-between items-center gap-20">
        <article className="flex flex-col gap-6">
          <h1 className=" text-white text-5xl font-bold font-SpaceGro max-w-[500px] leading-[1.2]">
            Hi, I’m Beast! mark Zuckerbergs puppy.{" "}
          </h1>
          <p className="max-w-[522px] text-white text-base font-normal font-['Space Grotesk'] leading-loose tracking-tight">
            I’m a Puli breed living in Palo Alto and have 2.4 million followers
            on Facebook. I was adopted in 2011 by the tech giant Mark Zuckerberg
            and his wife Priscilla Chan.
          </p>
          <a
            href="https://t.me/BeastTheDog"
            className="w-[181px] block h-[52px] relative"
          >
            <div className="w-[173px] h-11 left-[8px] top-[8px] absolute bg-yellow-400" />
            <div className="w-[177px] px-6 py-3.5 left-0 top-0 absolute bg-gradient-to-r from-amber-500 to-orange-500 border border-white justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-base font-bold font-['Space Grotesk']">
                Telegram
              </div>
            </div>
          </a>
        </article>
        <img src={logo} alt="" className="lg:w-[40rem]" />
      </div>
    </section>
  );
}

export default Hero;
