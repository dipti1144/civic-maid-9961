import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Box , HStack, Image,Container, Grid,Button } from '@chakra-ui/react';
import Product from '../MakeUpPage/Product';

const getData=()=>{
    return axios.get(`https://render-mock-server.onrender.com/skincare`)
}

function Skin() {
  return (
    <div>skinCare</div>
  )
  //   const [data , setData]=useState([])
  //   const [Loading , setLoading]=useState(false);
  //   const [error , setError]=useState(false);

  //  useEffect(()=>{
  //    setLoading(true)
  //    getData()
  //    .then((res)=>{
  //       console.log(res)
  //       setData(res.data)
  //       setLoading(false);
  //       setError(false);
  //    })
  //    .catch((err)=>{
  //       console.log(err)
  //       setError(true)
  //       setLoading(false)
  //       setData([])
        
  //    })
  //  },[])
  //  console.log(data)
    

  // return (
  //   <>
  //   <Box display="flex" w="80%" margin="auto" padding ="10px 0px">
  //     <p style={{fontSize:"15px"}}>GlamourWorld</p>
  //     <p style={{marginLeft:"10px", marginRight:"15px"}}>/</p>
  //     <p style={{color:"#ff3399", fontSize:"14px"}}>skinCare products</p>
  //   </Box>
  //   <Box marginTop="5px">
  //       <Image src="https://logan.nnnow.com/content/dam/nnnow-project/27-sep-2021/SkincareDesktop.jpg" w="80%" alt="skinCare_banner" />
  //   </Box>
  //   <Box w="42%" display="flex" gap="20px" bg="ghostwhite" margin="auto" marginTop="20px" padding="16px" alignItems="center" >
  //       <p style={{fontSize:"20px"}} >Just Arrived</p>
  //       <p style={{fontSize:"20px"}}>|</p>
  //       <p style={{fontSize:"13px", color:"#656565"}}>Check out the latest in skincare at glamourWorld</p>
  //   </Box>
  //   <Box w="80%" display="flex" margin="auto" justifyContent="space-between" marginTop="30px" >

  //     <Grid w="15%" h="70px" >
  //     <Button colorScheme='blue' background="pink" color="" border="none" marginBottom="10px">Low-to-high</Button>
  //     <Button colorScheme='blue'  background="skyblue" color="" border="none">High-to-low</Button>
  //     </Grid>

  //     {/* Make up Items map */}
  //       <Grid templateColumns='repeat(4, 1fr)' gap={10} w="80%" >
  //       {
  //           data.map((item)=>{
  //               return <Product 
  //                 key={item.id}
  //                 image={item.image}
  //                 price={item.price}
  //                 rating={item.rating}
  //                 title={item.title}
  //                 subcat={item.subcat}
  //               />
  //           })
  //       }   
  //       </Grid>
  //     </Box>  
  //   </>
  // )
}

export default Skin