import React from 'react'
import Nft from './Nft'


export default function Thenft() {
  return (
    <>
    <div className='container text-left text-6xl mt-40 mb-12' >
    The Nft
    </div>
    <div className='flex flex-col space-y-28' >
    <Nft title="Bearish NFT" color="Red" cost="550" equity="500" supply="600" perks="2"/>
    <Nft title="Bullish NFT" color="green" cost="550" equity="500" supply="600" perks="2"/>
    <Nft title="Market maker" color="yellow" cost="550" equity="500" supply="600" perks="2"/>
    
    </div>
    
   
    </>
  )
}
