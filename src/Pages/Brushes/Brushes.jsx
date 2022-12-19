import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Box , HStack, Image,Container, Grid,Button , Select} from '@chakra-ui/react';
import Product from './BrushesCart';
import Footer from '../Footer/Footer';

const getData=()=>{
    return axios.get(`https://render-mock-server.onrender.com/brush`)
}

function Brushes() {

  
    const [data , setData]=useState([])
    const [Loading , setLoading]=useState(false);
    const [error , setError]=useState(false);
    const [sortBy , setSortBy]=useState(null)

   useEffect(()=>{
     setLoading(true)
     getData()
     .then((res)=>{
        console.log(res)
        setData(res.data)
        setLoading(false);
        setError(false);
     })
     .catch((err)=>{
        console.log(err)
        setError(true)
        setLoading(false)
        setData([])
        
     })
   },[])
   console.log(data)

   const handlesort=(e)=>{
    setSortBy(e.target.value)
    if(e.target.value==="lth"){
      data.sort((a,b)=>a.price-b.price)
      setData(data)
    }
    else if(e.target.value==="htl"){
      data.sort((a,b)=>b.price-a.price)
      setData(data);
    }
     else{
      setData(data)
    }
  }
    

    

  return (
    <>
    <Box display="flex" w="80%" margin="auto" padding ="10px 0px">
      <p style={{fontSize:"15px"}}>GlamourWorld</p>
      <p style={{marginLeft:"10px", marginRight:"15px"}}>/</p>
      <p style={{color:"#ff3399", fontSize:"14px"}}>Tools & Brushes products</p>
    </Box>
    <Box marginTop="5px">
        <Image src="https://logan.nnnow.com/content/dam/nnnow-project/27-sep-2021/Tools_BrushesDesktop.jpg" w="80%" alt="tools&brushes_banner" />
    </Box>
    <Box w="42%" display="flex" gap="20px" bg="ghostwhite" margin="auto" marginTop="20px" padding="16px" alignItems="center" >
        <p style={{fontSize:"20px"}} >Just Arrived</p>
        <p style={{fontSize:"20px"}}>|</p>
        <p style={{fontSize:"13px", color:"#656565"}}>Check out the latest in skincare at glamourWorld</p>
    </Box>
    <Box w="80%" display="flex" margin="auto" justifyContent="space-between" marginTop="30px" >

      <Grid w="15%" h="70px" >
      <Select placeholder='SortBy Price' onChange={(e)=>handlesort(e)} >
        <option value='lth'>SortBy Low-to-High</option>
        <option value='htl'>SortBy High-to-low</option>
      </Select>
      </Grid>

      {/* Make up Items map */}
        <Grid templateColumns='repeat(4, 1fr)' gap={10} w="80%" >
        {
            data.map((item)=>{
                return <Product 
                  key={item.id}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  title={item.title}
                  subcat={item.subcat}
                  id={item.id}
                />
            })
        }   
        </Grid>
      </Box>
      <Footer/>  
    </>
  )
}

export default Brushes