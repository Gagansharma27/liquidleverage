
import React from "react";

export default function Hero() {
  
  return (
    <>
      <div className=" banner w-full flex flex-col mt-11 space-y-7">
        <h1 className="text-8xl ">
          Supercharged <br /> investment on <br /> autopilot.
        </h1>
        <div className=" flex w-full mx-auto justify-center space-x-16 items-center">
        <img   src="/images/Binance-Logo.wine.png" width={100} height={100} />
        <img  src="/images/Bybit-logo.png" width={100} height={10} />
        <img  src="/images/Binance-Smart-Chain.png" width={100} height={100} />
        </div>
        </div>
    </>
  );
}
