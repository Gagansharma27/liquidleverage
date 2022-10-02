import React from "react";

export default function Nft(props) {

  return (
    <>
      <div className="bg-slate-800 w-full 2xl flex bg-opacity-75" >
        <div className=" w-3/5">
          <div className="container mx-auto flex flex-col text-center items-center ">
            <h1
              className="pt-4 text-3xl  w-3/4"
              style={{ color: `${props.color}` }}
            >
              {props.title}
            </h1>
            <div className="container mx-auto flex w-3/4 justify-around  ">
              <div className="flex flex-col text-center items-center py-8 w-1/2">
                <div className="container mx-auto flex flex-col items-center w-1/2 py-4 text-center">
                  <p className="text-5xl">{props.cost}</p>
                  <p className="text-sm">USDT mining cost</p>
                </div>
                <div className=" flex flex-col  items-center w-1/2 py-4">
                  <p className="text-5xl">{props.equity}</p>
                  <p className="text-sm">USDT equity</p>
                </div>
              </div>
              <div className="flex flex-col text-center items-center py-8 w-1/2">
                <div className=" flex flex-col  items-center w-1/2 py-4 text-center">
                  <p className="text-5xl">{props.supply}</p>
                  <p className="text-sm">total supply</p>
                </div>
                <div className=" flex flex-col  items-center w-1/2 py-4">
                  <p className="text-5xl">{props.perks}</p>
                  <p className="text-sm">additional perks</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-2/5 items-center justify-center flex ">
          <img
            src="/images/1_10.jpg"
            alt="bear"
            className="imagesBear"
            style={{
              maxWidth: "14vw",
              height: "auto",
              position: "absolute",
              boxShadow: " 0 0 25px white, 0 0 5px white",
            }}
          />
        </div>
      </div>
    </>
  );
}
