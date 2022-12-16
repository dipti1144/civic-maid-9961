import React from 'react'
import {Box , Image , Heading, Button, Center} from "@chakra-ui/react"
import {EditIcon, DeleteIcon, ArrowUpIcon , ArrowDownIcon} from "@chakra-ui/icons"
import { TimeToLeave } from '@mui/icons-material'

function CardItem({image,subcat,title,price,qnty, updateCartItem,handleDelete,id}) {
  return (
    <>
      <Box display="flex" w="70%" margin="auto" gap="25px" alignItems="center">
         <Box>
            <Image src={image} alt={title} w="100px" />
         </Box>
         <Box> 
            <Heading as="h3">{subcat}</Heading>
            <p style={{margin:"10px 0px", color:"#ff3399", fontSize:"13px"}}>{title}</p>
            <p style={{fontWeight:"700" , fontSize:"14px"}}>Price : Rs {price}</p>
         </Box>
         <Box display="flex" alignItems="center" gap="10px">
          <Button
           onClick={()=>{
            if(qnty>0){
              updateCartItem(id, qnty,-1)
            }
           }}
           color="#fff"
           fontSize="1rem"
           border="none"
           backgroundColor="red"
           padding="2px 5px"
          >dec <ArrowDownIcon/>
          </Button>
          <Center fontWeight="700">{qnty+1}</Center>
          <Button
           onClick={()=>{
            if(qnty<9){
              updateCartItem(id,qnty,1)
            }
           }}
           color="#fff"
           fontSize="1rem"
           border="none"
           backgroundColor="green"
           padding="2px 5px"
          
          >
            inc <ArrowUpIcon/>
          </Button>
         </Box>
         <Box>
          <Button  onClick={handleDelete(id)}>
          <DeleteIcon />
          </Button>
         </Box>
        
      </Box>
      <hr/>
    </>
  )
}

export default CardItem