import React from 'react'
import Carousel from 'react-material-ui-carousel'

const images=[
    "https://d32baadbbpueqt.cloudfront.net/Homepage/a41d5b02-1299-4e1a-b4e1-ba19484796b5.gif",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/1fb4eae2-6719-4f1f-b80e-efda1cf48362.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/1fa29c9d-b7b6-4aa9-ac54-a2195c10fc63.jpg",
  ]
  

function Banner() {
  return (
    <Carousel
            className='carasousel'
            autoPlay={true}
            animation='slide'
            navButtonsAlwaysInvisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style: {
                    backgroundColor: "#494949",
                    color: "#494949",
                    borderRadius: 0,
                    marginTop: "10px"
                }
            }}
        >
            {
                images.map((imag, i) => {
                    return (
                        <>
                            <img style={{ width: "100%" }} src={imag} alt="" className="banner_img" />
                        </>
                    )
                })
            }
        </Carousel>
  )
}

export default Banner