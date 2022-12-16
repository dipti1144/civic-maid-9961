import { Box, Card, useConst } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Component/Context/AuthContext';
import CardItem from './Card';
function Cart() {
  const [cart , setCart]= useState([]);
  const navigate=useNavigate();
  const [number , setNumber]=useState(1)
  
  // const [length , setLength]=useState(null)

  let total=0;
  cart.forEach((e)=>{
    let quantity=+(e.qnty)+1;
    let price=+(e.price);
    let totalPrice = quantity*price
    total=(total+totalPrice)
  })
  console.log(total)
  console.log(cart.length)
  

  useEffect(()=>{
    axios.get("https://render-mock-server.onrender.com/cart")
    .then((res)=>{
      setCart(res.data)
      console.log("cart:",res.data)
    })
  },[number])

  const updateCartItem=(id , q,number)=>{
    axios.patch(`https://render-mock-server.onrender.com/cart/${id}`,{
      "qnty":q+number
    })
    .then(()=>{
      setNumber(number+1)
    }).catch(err=>{
      console.log(err)
    })

  }

  function handleDelete(id) {
    deleteCartItem(id);
  }
  const deleteCartItem=(id)=>{
    axios.delete(`https://render-mock-server.onrender.com/cart/${id}`)
    .then(()=>setNumber(number-1))
    .catch(err=>{
        console.log("error",err)
    })
  }
  

  
  return (
    <>
    <Box 
     width="70%" 
     margin="auto"
      color="#fff"
      bg="skyblue"
      mt="15px"
      padding="10px"
      >
        <h3>MY BAG</h3>
    </Box>
    <Box w="70%" margin="auto"  >
      <Box mt="20px" w="60%">
        {
         cart.map((item)=>(
          <CardItem image={item.image}
          title={item.title}
          price={item.price}
          subcat={item.subcat}
          id={item.id}
          qnty={item.qnty}
          handleDelete={handleDelete}
          updateCartItem={updateCartItem}
           />
         ))
        }
      </Box>

      <Box></Box>
    </Box>
      

    </>
  )
}

export default Cart