import Navbar from "../components/Navbar";
import Head from "next/head";
import Banner from "../components/Hero";
import About from "../components/Abt";
import Thenft from "../components/Thenft";
import Nft from "../components/Nft";
import Perks from "../components/perks";

export default function Home() {
  return (
    <>
      <Head>
        <title>Liquid Leverage</title>
      </Head>
      <div className="m-9 mx-16" >
        <Navbar />
        <Banner />
        <About/>
        <Thenft/>
        <Perks/>
      </div>
      
    </>
  );
}
