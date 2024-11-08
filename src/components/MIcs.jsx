import React from "react";
import cat from "../assets/logo.png";

function Mics() {
  return (
    <section className=" w-full py-36">
      <div className="container flex justify-center items-center flex-col gap-28">
        <h1>
          <div className="max-w-[815px] text-center text-6xl font-bold font-SpaceGro">
            Tokenomics{" "}
          </div>
        </h1>

        <div className=" justify-start items-start gap-5 flex flex-wrap">
          <div className="px-[84px] pt-[100px] pb-[56.29px] border border-amber-500 flex-col justify-end items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-center gap-[89px] inline-flex">
              <div className="w-[155.77px] h-[159.71px] relative">
                <img src={cat} alt="" />
              </div>
              <div className="flex-col justify-start items-center gap-2 flex">
                <div className="text-center text-white text-2xl font-normal font-['Space Grotesk']">
                  Supply
                </div>
                <div className="text-center text-white text-[32px] font-bold font-['Space Grotesk']">
                  100 Billion
                </div>
              </div>
            </div>
          </div>
          <div className="px-[84px] pt-[100px] pb-[56.29px] border border-amber-500 flex-col justify-end items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-center gap-[89px] inline-flex">
              <div className="w-[155.77px] h-[159.71px] relative">
                <img src={cat} alt="" />
              </div>
              <div className="flex-col justify-start items-center gap-2 flex">
                <div className="text-center text-white text-2xl font-normal font-['Space Grotesk']">
                  Taxes{" "}
                </div>
                <div className="text-center text-white text-[32px] font-bold font-['Space Grotesk']">
                  5%{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="px-[84px] pt-[100px] pb-[56.29px] border border-amber-500 flex-col justify-end items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-center gap-[89px] inline-flex">
              <div className="w-[155.77px] h-[159.71px] relative">
                <img src={cat} alt="" />
              </div>
              <div className="flex-col justify-start items-center gap-2 flex">
                <div className="text-center text-white text-2xl font-normal font-['Space Grotesk']">
                  Max{" "}
                </div>
                <div className="text-center text-white text-[32px] font-bold font-['Space Grotesk']">
                  4%{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mics;
