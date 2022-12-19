import { Box, Button, Card, useConst } from '@chakra-ui/react';
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

  let discount= -(total)*10/100
  console.log(discount)
  

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
  
  const handleDelete=(id)=>{
   axios.delete(`https://render-mock-server.onrender.com/cart/${id}`)
   .then((res)=>{
   console.log(res)
   })
   axios.get("https://render-mock-server.onrender.com/cart")
   .then((res)=>{
     setCart(res.data)
     console.log("cart:",res.data)
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
        <h3>MY BAG ( {cart.length} )</h3>
    </Box>
    
    <Box w="70%" margin="auto" display="flex" justifyContent="space-between"  >
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
       
       {/* total box */}
      <Box w="30%" textAlign="left" mt="30px" bg="ghostwhite" h="150px"  padding="20px">
        <Box  >
          <h3>OVERVIEW</h3>
        </Box>
        <Box display="flex" justifyContent="space-between" mt="15px" >
          <p>Subtotal</p>
          <p>Rs. {total}</p>
        </Box>
        <Box color="#ff3399" display="flex" justifyContent="space-between" mt="7px" >
          <p>Discount (10%)</p>
          <p>Rs. {discount}</p>
        </Box>
        <Box display="flex" justifyContent="space-between" mt="7px" mb="10px">
          <p>Delivery Charges</p>
          <p>Rs. 0</p>
        </Box>
        <hr/>
        <Box display="flex" justifyContent="space-between" mt="7px">
          <p>Total</p>
          <p>{total+discount}</p>
        </Box>
        <Box mt="40px"  >
        <Button onClick={()=>navigate("/payment")} fontWeight="700" fontSize="15px" padding="10px" color="#fff" bg="#ff3399" border="none"  w="100%" cursor="pointer" >CHECKOUT</Button>
        </Box>
      </Box>
    </Box>
    
    

    </>
  )
}

export default Cart