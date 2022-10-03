import Navbar from "../components/Navbar";
import Head from "next/head";
import Banner from "../components/Hero";
import About from "../components/Abt";
import Thenft from "../components/Thenft";
import Nft from "../components/Nft";
import Perks from "../components/perks";
import Team from "../components/Team";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Liquid Leverage</title>
      </Head>
      <div>
     
        <Navbar />
        <Banner />
  
        <About/>
        <Thenft/>
        <Perks/>
        <Team/>
        <Footer/>
      </div>
      
    </>
  );
}
