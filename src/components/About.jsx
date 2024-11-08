import React from "react";
import logo from "../assets/logo.png";

function About() {
  return (
    <section className=" w-full py-36">
      <div className="container flex justify-center items-center flex-col gap-28">
        <h1>
          <div className="max-w-[815px] text-center text-6xl font-bold font-SpaceGro">
            I’m worth <span className="text-yellow-400">billions</span>
          </div>
        </h1>

        <div className="w-full grid lg:grid-cols-2 justify-between items-center gap-16">
          <p className="max-w-[522px] text-white text-base font-normal font-['Space Grotesk'] leading-loose tracking-tight">
            Yep! You heard it right. BILLIONS!
            <br />
            <br />
            “The main goal of this nebula nexus is to help fans
globally so they can realize and achieve their dreams of becoming secure crypto traders.
          </p>
          <img src={logo} alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
