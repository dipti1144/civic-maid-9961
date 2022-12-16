import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Box , color, Heading, Image} from "@chakra-ui/react"
import {} from "@chakra-ui/icons"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';



function MakeUpDescription() {
    const navigate=useNavigate();
    const {id}=useParams()
    const [data,setData]=useState({});
    const [liked , setLiked]=useState(false)
    console.log(id)

    useEffect(()=>{
     axios.get(`https://render-mock-server.onrender.com/makeup/${id}`)
     .then(res=>{
        console.log(res.data)
        setData(res.data)
     })
     .catch(err=>{
        console.log(err)
     })
    },[])

    const handleAddtoCart=()=>{
        axios.post("https://render-mock-server.onrender.com/cart",data)
        .then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }

  return (
    <>
        <Box display="flex" margin="auto"  w="80%" mt="5px" >
            <p style={{display:"flex", gap:"10px" , color:"gray"}}>GlamourWorld / GlamourWorls Collection / <p style={{color:"#ff3366"}} >{data.subcat}</p></p>
        </Box>
        <Box display="flex" w="60%" margin="auto" mt="50px" justifyContent="space-between" >
            <Box  w="10%" >
               <Image src={data.image} w="100%" />
            </Box>
            <Box w="50%" >
               <Image src={data.image} w="100%" />
            </Box>
            <Box w="35%" textAlign="left"  display="grid" gap="10px" h="150px" >
               <Heading as="h3">GlamourWolrd Collection</Heading>
               <p style={{ size:"14px", color:"#ff3399"}}> {data.subcat} : {data.title}  </p>
               <p>rating : {data.rating}</p>
               <h4> price : ₹ {data.price}</h4>
               <Box w="50%" display="flex" alignItems="center" justifyContent="space-between " >
                <Box >
                    <FavoriteBorderOutlinedIcon/>
                </Box>
                <Box>
                <button style={{
                    padding:"5px 10px", 
                    display:"flex", 
                    alignItems:"center" , 
                    justifyContent:"space-between",
                    fontWeight:"700",
                    color:"white",
                    backgroundColor:"black",
                    cursor:"pointer",
                    gap:"5px"
                    }} 
                    onClick={handleAddtoCart}
                    >Add to Cart<ShoppingBagOutlinedIcon/></button>
                </Box>
            </Box>
            </Box>
            
        </Box>
     </>
   
  )
}

export default MakeUpDescription