import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="container flex mt-11 justify-between ">
        <h1 className="text-8xl">
          {" "}
          Supercharged <br /> investment on <br /> autopilot.
        </h1>
       <div className="pr-16">
        <Image src="/images/1_8.jpg" width={400} height={500} />
        </div>
       
      </div>
      <div className="container w-full mt-6 flex items-center justify-around px-72">
        <Image src="/images/Binance-Logo.wine.png" width={150} height={100} />
        <Image src="/images/Bybit-logo.png" width={150} height={50} />
        <Image src="/images/Binance-Smart-Chain.png" width={150} height={100} />
      </div>
    </>
  );
}
