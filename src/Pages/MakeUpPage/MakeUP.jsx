import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Box , HStack, Image } from '@chakra-ui/react';
import Product from './Product';

const getData=()=>{
    return axios.get(`https://render-mock-server.onrender.com/makeup`)
}

function MakeUP() {
    const [data , setData]=useState([])
    const [Loading , setLoading]=useState(false);
    const [error , setError]=useState(false);

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
    

  return (
    <>
    <Box marginTop="5px">
        <Image src="https://logan.nnnow.com/content/dam/nnnow-project/27-sep-2021/MakeupDesktop.jpg" w="80%" alt="makeup_banner" />
    </Box>
    <Box w="42%" display="flex" gap="20px" bg="ghostwhite" margin="auto" marginTop="20px" padding="16px" alignItems="center" >
        <p style={{fontSize:"20px"}} >Just Arrived</p>
        <p style={{fontSize:"20px"}}>|</p>
        <p style={{fontSize:"13px", color:"#656565"}}>Hey, beauty buff! We've got the latest and the best new makeup launches in the biz</p>
    </Box>
    <Box>

      {/* Make up Items map */}
        <HStack display="grid">
        {
            data.map((item)=>{
                return <Product 
                  key={item.id}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  title={item.title}
                  subcat={item.subcat}
                />
            })
        }
        </HStack>
      </Box>  
    </>
  )
}

export default MakeUP