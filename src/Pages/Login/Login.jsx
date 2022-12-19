import React, { useContext, useState } from 'react'
import {FormControl, FormLabel , Input , FormHelperText, Box, Heading, Alert, AlertIcon, AlertDescription, AlertTitle} from "@chakra-ui/react"
import { AuthContext } from '../../Component/Context/AuthContext';
import { useNavigate } from 'react-router-dom';
// import {AlertIcon} from "@chakra-ui/icons"

function Login() {

    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [loading,setLoading]=useState("");
    const {loginUser}=useContext(AuthContext)
    const navigate=useNavigate();

    // const Alart=()=>{
       
    // }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        setLoading(true);
        fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({email,password})
        })
        .then((res)=> res.json())
        .then((res)=>{
            if(res.token){
                console.log(res.token)
                loginUser(res.token)
                alert("login successfully")               
                navigate("/makeup")
            }
        })
        .catch(err=>{
            setLoading(false);
            console.log(err)
        })
    }


  return (
    <>
   
    <form style={{
        width:"20%", 
        margin:"auto",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" , 
        padding:"40px 30px" , 
        marginTop:"50px", 
        borderRadius:"20px",
       
    }}
    onSubmit={handleSubmit}
        >
           
        <Box>
            <Heading mb="20px">Login</Heading>
        </Box>
        <Box margin="auto" textAlign="left" display="grid" gap={14} >
            <FormControl>
                <p style={{fontSize:"14px", color:"gray"}}>Enter Email address</p>
                <Input 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type='email' 
                w="95%" 
                h="30px" 
                required
                paddingLeft="10px" />
            <FormHelperText fontSize="13px" color="#ff3399" >We'll never share your email.</FormHelperText>
            </FormControl>
      
            <FormControl>
                <p style={{fontSize:"14px", color:"gray"}}>Enter Email password</p>
                <Input 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    type='password' 
                    w="95%" 
                    h="30px" 
                    required
                    paddingLeft="10px" />
                <FormHelperText fontSize="13px" color="#ff3399" >We'll never share your password.</FormHelperText>
            </FormControl>
        </Box>
        <Input 
           cursor="pointer"
           type="submit" 
            w="80%"
           mt="30px"
            h="35px"
           border="none"
           color="white"
           bg="#ff3399"
           fontSize="18px"
           fontWeight="700"
           disabled={loading}
       />
       <p style={{marginTop:"30px", fontSize:"12px", color:"blue"}}>
       By proceeding, you agree to Privacy Policy, Terms & Conditions
       </p>
      
      </form>
      {/* <img scr="https://image.shutterstock.com/image-photo/makeup-products-cosmetic-bag-macaroons-260nw-548156077.jpg" /> */}
      {/* </div> */}
    </>
  )
}   

export default Login