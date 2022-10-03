import React from "react";

export default function Perks() {
  return (
    <div className="container mx-auto flex mt-24 items-center ">
      <div className="container mx-auto ">
        <img src="/images/asset_6.png" alt="bearbull" />
      </div>
      <div className="container mx-auto flex flex-col space-y-14">
        <h1 className="text-6xl text-center">PERKS</h1>
        <h2 className="text-xl text-center">Different tier of NFT will unlock more perks</h2>
        <ul className="text-center space-y-2">
          <li>Equity bearing NFT paying profit weekly.</li>
          <li>
            Private discord access with full view of active trades and overall
            PnL.
          </li>
          <li>Access to live tracking of portfolio growth</li>
          <li>Private access to trading signals on many USDT pairs.</li>
          <li>Private access to copy trading</li>
          <li>
            Weekly mentorship and 1 on 1 training with our most profitable
            traders.
          </li>
        </ul>
      </div>
    </div>
  );
}
