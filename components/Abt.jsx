import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="mt-16 w-full">
      <h1 className=" container text-6xl text-right"> ABOUT US</h1>

      <div className="container flex mt-12 justify-between">
        <Image src="/images/1_8.jpg" width={400} height={500} />

        <div className="w-1/2 text-right flex flex-col space-y-20 text-lg">
          <p className>
            Liquid Leverage NFTs offers the first and only decentralised equity
            fund, fully traded by industry proffessionals on futures
            cryptocurrency markets.
          </p>
          <p>
            The funds generated from NFT minting are added to the trading team’s
            futures portfolio. At the end of every week, the profits generated
            are removed from the centralised exchange and distributed to the
            holders of the NFT according to the value of the NFT equity they
            own.
          </p>
          <p>
            With years of proven wealth generation using edged trading
            strategies, we project an average of 4.5% return on investment,
            weekly The minimum guaranteed return is 1% weekly. Extreme market
            volatility can see the ROI soar up to 15% weekly. No matter what
            direction the market turns.
          </p>
          <p>
            With an extremely limited supply, we want to limit our footprint on
            the market and keep our holder’s circle exclusive.
          </p>
        </div>
      </div>
      <div className=" container  flex items-center justify-center">
      <iframe className="mt-16 w-full"
       height={720}
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe>
      </div>
    </div>
  );
}
