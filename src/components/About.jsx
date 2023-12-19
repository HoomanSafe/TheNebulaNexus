import React from "react";
import logo from "../assets/logo2.svg";

function About() {
  return (
    <section className=" w-full py-36">
      <div className="container flex justify-center items-center flex-col gap-28">
        <h1>
          <div className="max-w-[815px] text-center text-6xl font-bold font-SpaceGro">
            About <span className="text-yellow-400">BeastTheDog</span>
          </div>
        </h1>

        <div className="w-full grid lg:grid-cols-2 justify-between items-center gap-16">
          <p className="max-w-[522px] text-white text-base font-normal font-['Space Grotesk'] leading-loose tracking-tight">
            Floki, Meet DeFido! This brand new token was born merely moments
            after Coinbase tweeted their dog named “DeFido” at Elon Musk. & this
            French Bulldog is ready for lift off! Come join him on his journey
            to the Moon base and beyond!
            <br />
            <br />
            Floki, Meet DeFido! This brand new token was born merely moments
            after Coinbase tweeted their dog named “DeFido” at Elon Musk. & this
            French Bulldog is ready for lift off! Come join him on his journey
            to the Moon base and beyond!
          </p>
          <img src={logo} alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
