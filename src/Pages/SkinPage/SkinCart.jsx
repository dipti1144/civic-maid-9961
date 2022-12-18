import { VStack,Stack ,Box,Heading , Image, Badge, Button} from '@chakra-ui/react'
import { StarIcon } from "@chakra-ui/icons"
import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link, useNavigate } from 'react-router-dom';

function SkinCart({image,title,price,rating,subcat,id}) {
  const navigate=useNavigate()
  console.log(id)
    
   
  return (
    
          <Box 
          maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow="rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset" padding="10px">
            <Link to={`/skin${id}`}>
            <Image src={image} alt={title} w="100%" />
            </Link>
            <Box p='6'>
              <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' color='red' backgroundColor="pink" padding="2px 20px 2px 10px" borderRightRadius="10px" >
                  New
                </Badge>
              </Box>
              <Box 
                  color='gray'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='sm'
                  textTransform='uppercase'
                  ml='2'>
                    {subcat}

              </Box>
      
              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
              >
                {title}
              </Box>
      
              <Box>
                Price : ₹ {price}
                <Box as='span' color='gray' fontSize='sm'>
                  / wk
                </Box>
              </Box>
      
              <Box display='flex' mt='2' alignItems='center'>
                {Array(5)
                  .fill('')
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={3 < Number(rating) ? 'teal' : 'gray'}
                    />
                  ))}
              </Box>
            </Box>
            <Box display="flex" marginTop="10px" alignItems="center"  justifyContent="space-between" >
              <button onClick={()=>navigate(`/skin${id}`)} style={{color:"white" ,fontWeight:"700", background:"#222222" ,display:"flex", alignItems:"center", gap:"10px", padding:"5px 10px" ,border:"none" ,cursor:"pointer"}} >
                view more...
              </button>
            </Box>
          </Box>
        )
    //   }
//   )
}

export default SkinCart
