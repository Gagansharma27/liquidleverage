import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="container mx-auto  m-0 flex items-center justify-between ">
        <div className="flex space-x-24   ">
          <Image src="/images/liquid-logo-02.png" width={200} height={150} />

          <div className="flex items-center space-x-12">
            <p>About us</p>
            <p>NFTS</p>
            <p>Perks</p>
            <p>Teams</p>
          </div>
        </div>
        <button className="text-gray-600 bg-white font-medium rounded-full text-sm px-16 py-2.5 mr-2 mb-2 "> Mint </button>
      </div>
    </>
  );
}
