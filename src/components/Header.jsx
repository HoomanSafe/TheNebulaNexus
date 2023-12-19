import React from "react";

function Header() {
  return (
    <header className="-3 w-full bg-d-600 absolute top-0 z-50">
      <nav className="container ">
        <div className="border border-[#D35236] w-full h-full p-5 rounded-b-lg border-t-0 flex justify-between items-center">
          <a href="" className="text-white text-2xl font-bold font-SpaceGro">
            BeastTheDog
          </a>{" "}
          <div className="hidden justify-start items-start gap-[72px] lg:inline-flex">
            <div className="text-white text-base font-normal font-['Inter']">
              Home
            </div>
            <div className="text-white text-base font-normal font-['Inter']">
              About
            </div>
            <div className="text-white text-base font-normal font-['Inter']">
              Tokenomics
            </div>
          </div>
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
        </div>
      </nav>
    </header>
  );
}

export default Header;
