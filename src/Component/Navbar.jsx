import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const links=[
    {path:"/" , text:"HOME"},
    {path:"/makeup", text:"MAKEUP"},
    {path:"/skin" , text:"SKINCARE"}
]

function Navbar() {
    const defaultStyle={
        color:"black",
        textDecoration:"none",
        fontSize:"15px",
        fontWeight:"bold"
    }
    const activeStyle={
        color:"#ff3399",
        textDecoration:"none",
        fontSize:"15px",
        fontWeight:"bold"
    }
  return (
    <div>
       <Box bgColor="ghostwhite">
        <Heading as="h1" fontSize="50px" >SEPHORA</Heading>
       </Box>
        <Box
         display="flex"
         alignItems="center"
         justifyContent="space-between"
         w="50%"
         margin="auto"
         mt="20px"
         mb="10px"
        >
            {
                links.map((link)=>(
                    <NavLink 
                    key={link.path} 
                    to={link.path} 
                    style={({isActive})=>{
                        return isActive ? activeStyle : defaultStyle
                    }}>{link.text}</NavLink>
                ))
            }
        </Box>
        <hr/>
    </div>
  )
}

export default Navbar