import { VStack,Stack ,Box,Heading , Image} from '@chakra-ui/react'
import React from 'react'

function Product({image,title,price,rating,subcat}) {
  return (
    <Stack>
        <Box>
            <Image src={image} alt={title} />
        </Box>
        <Box>
            <Heading>{subcat}</Heading>
        </Box>
        <Box>
            <p>{title}</p>
        </Box>
        <Box>
            <Heading>Rs. {price}</Heading>
        </Box>
        <Box>
            <p>{rating}</p>
        </Box>
    </Stack>
  )
}

export default Product