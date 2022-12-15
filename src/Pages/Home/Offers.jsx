import React from 'react'
import {Box,Image,Heading} from "@chakra-ui/react"

function Offers() {
    const images=[
        "https://logan.nnnow.com/content/dam/nnnow-project/13-oct-2022/Ikoo_Pstory1.jpg",
        "https://logan.nnnow.com/content/dam/nnnow-project/31-aug-2022/se/Hanzdefuko_Pstory.jpg",
        "https://logan.nnnow.com/content/dam/nnnow-project/15-feb-2022/PIXI_P-story.jpg",
        "https://logan.nnnow.com/content/dam/nnnow-project/25-oct-2022/ABH_P-story_Flat25off.jpg"
    ]
  return (
    <>
    <Heading mt="20px" >Our Top Beauty Offers</Heading>
     <Box w="80%" margin="auto" display="flex" justifyContent="center" gap="10px" marginTop="20px" >
        {
            images.map((el,i)=>{
                return <Image key={i} src={el} alt="offer image" w="25%" />
            })
        }
     </Box>
    </>
  )
}

export default Offers