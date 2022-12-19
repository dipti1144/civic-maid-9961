import React from 'react'
import {HStack, PinInput , PinInputField, Box, Heading, color} from "@chakra-ui/react"
import { padding } from '@mui/system';
import { useNavigate } from 'react-router-dom';
function Otp() {
     const navigate=useNavigate()
    const handleSubmit=(e)=>{
         e.preventDefault();
         alert("Paymnent SuccessFull")
         navigate("/makeup")

    }
  return (
    <Box w="165px"  margin="auto"  mt="30px" bg="ghostwhite" padding="20px 60px" >
        <Heading>Enter OTP</Heading>
    <form onSubmit={handleSubmit} >   
    <HStack mt="20px" >
      <PinInput type='alphanumeric'>
      <PinInputField w="30px" h="30px" required  />
      <PinInputField w="30px" h="30px" required />
      <PinInputField w="30px" h="30px" required />
      <PinInputField w="30px" h="30px" required />
    </PinInput>
  </HStack>
    <input
     style={{marginTop:"20px", color:"#fff", border:"none", background:"#ff3399"  ,padding:"5px 10px"}}
     type="submit" />
  </form> 
  </Box> 
  
  )
}

export default Otp