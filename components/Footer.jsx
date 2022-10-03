import React from "react";

export default function Footer() {
  return (
    <div className="mt-16">


        <div className="bg-slate-400 grid grid-cols-3 items-center ">
      
        <div> <img src="/images/asset_2.png" alt="bear" width={300} /></div>
        <div><img src="/images/asset_3.png" alt="lion" width={300}/></div>
        <div><img src="/images/asset_4.png" alt="deer" width={300}/></div>

        </div>
        <div className="container bg-[#00000] h-10">
        <p className="hidden"></p>
        </div>
        
        <div className="bg-slate-400 grid grid-cols-3">
          <p>Brendon-Lead Training</p>
          <p>Sam - Market Reasearch</p>
          <p>jorge-TA guru</p>
        </div>
  
    </div>
  );
}
