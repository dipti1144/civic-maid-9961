import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


const links=[
    {path:"/" , text:"Home"},
    {path:"/makeup", text:"MakeUp"},
    {path:"/skin" , text:"Skincare"},
    {path:"/brushes", text:"Tools & Brushes"},
    
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
    <div style={{
        position:"sticky",
        top:"0",
        width:"100%",
        background:"#fff",
        zIndex:9
    }} >
       <Box bgColor="ghostwhite">
        <Heading as="h1" fontSize="50px" >GlamourWorld</Heading>
       </Box>
       <Box
       display="flex"
       alignItems="center"
       w="80%"
       margin="auto"
    //    mt="20px"
    //    mb="10px"
       >
        <Box
         display="flex"
         alignItems="center"
         justifyContent="space-between"
         margin="auto"
         mt="20px"
         mb="10px"
         gap="10px"
         w="50%"
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

        <Box display="flex" w="10%" alignItems="end" justifyContent="space-between">

        
        <Box >
            {/* <FavoriteIcon/> */}
            
            <FavoriteBorderOutlinedIcon/>
        </Box>
        <Box>
            <Link to="/cart" >
            <ShoppingBagOutlinedIcon/>
            </Link>
        </Box>
        <Box>
            <Link to="/login" >
            <AccountCircleOutlinedIcon/>
            </Link>
        </Box>
        </Box>
        </Box>
        <hr/>
    </div>
  )
}

export default Navbar