import React from 'react'
import Banner from './Banner'
import OfferDetails from './OfferDetails'
import Offers from './Offers'


function Home() {
  return (
    <>
    <div style={{marginTop:"5px"}}>
      <Banner/>
    </div>
    <div>
      <Offers/>
    </div>
    <div style={{marginTop:"25px"}}>
      <OfferDetails/>
    </div>
      
    </>
  )
}

export default Home