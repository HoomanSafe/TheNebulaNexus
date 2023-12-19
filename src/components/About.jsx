import React from "react";
import logo from "../assets/logo.svg";

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
            “I’ve been a poor dog and a rich dog and I’ll choose rich every
            time.” Since my adoption in 2011 I’ve chartered the world on mega
            yachts, private jets, super secretive government tunnels and now
            we’ve found our way into the Ethereum Blockchain.
          </p>
          <img src={logo} alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
