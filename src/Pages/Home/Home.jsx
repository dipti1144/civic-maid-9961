import React from 'react'
import Footer from '../Footer/Footer'
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
    <div>
      <Footer/>
    </div>
      
    </>
  )
}

export default Home