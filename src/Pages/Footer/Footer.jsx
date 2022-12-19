import { Box } from '@chakra-ui/react'
import React from 'react'


function Footer() {
  return (
    <>
     <Box display="flex" gap="40px" alignItems="center" w="50%" margin="auto" justifyContent="center" mt="4rem"  >
      <h4>WHO WE ARE</h4><h4>FREQUENTLY ASKED QUESTIONS </h4>        <h4>CONTECT US</h4>
     </Box>
     <Box mt="1.5rem" display="flex" gap="30px" alignItems="center" justifyContent="center">
       <img style={{cursor:"pointer"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXuJOZzykgBcnzCUFo-Yc7lJZkLnRWAAPmbw&usqp=CAU" width="20px" />
       <img style={{cursor:"pointer"}} src="https://toppng.com/uploads/preview/transparent-background-instagram-logo-115628768457dqqkcnfyz.png" width="20px"/>
        <img style={{cursor:"pointer"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPkAAADLCAMAAACbI8UEAAAAjVBMVEUAAAD////8/PykpKTx8fG/v7/s7Ozb29v39/e0tLSsrKypqan4+Pjl5eXh4eHo6OjV1dXJyclhYWGenp7Pz890dHSZmZmTk5O8vLyFhYVWVlZnZ2cUFBSBgYFBQUEyMjIbGxs6OjpLS0srKyt5eXkjIyM9PT0NDQ1ZWVlPT08aGhpsbGwuLi4mJiYSEhJUeCjpAAAKUElEQVR4nN2daWOiMBCG5fBA64EXUuvZWmuP/f8/b7FqJZA7kyH4ftpVRJ8CyVyZNLwaqDNsx80omCeTXtScDlo+xEkbECexqUHva39okPrev0VD0xM7TR5GswZTh3TaMTm5w+TNZzb2RZ/Lqf7pXSVvpSLsi16CltqJO5PrP9wkb3Pu8pLSUP7E/rzhMnl/rMB91kqWvZsdfJsYHCRPFLnP6smcuLnLjlze/ucceazBnenUF5zXX6x/D/wbE8vkIGaCtiQHNoomvNN2Jleb4PvvpRL506vRLGmmwac2eKOxZo7yuQGz+fdiiTxonCxhiRUZcGc6tqlnjff3Qzb3l4vkneztZ3tsXL2ZgWcKiqfsxEvigPj+VpF8cn4/tYxI15cxeKOREGeczgpPzzr3ZoHcvxwhNUkAS3USp2t1O90gWpbfzT8OBfLe9ZCmh60PEPDLVW81lxvae8S9XCD/GwwWiNBnwVzxs8azLeOdw1P+G0ny4f2wASo4xDMuFHkjk+R5O4I+RdiRvv2ioBX5nSQ58XSI7EE4LTDA94UvJcjbxKGfxgEfSfUxwEsXkiAv3HRHnGfdf8UAHxW/liAvhn+OKDc8ykNenqvy5L7EXwpemm6pmrrl782TDygfsY+Oca+X7HkvHOXJe7QPRZbB5wjgJYbR+DXMk9N9JbvWXIgP/hTtzvdynpxq65YsAFhR3ApgbQmTrBX9OggB8Zx3WAGRZfHnwqllHfw9F5e9Yme2vUeQD5mf3ilG8+VlfUb7c8/CeL67vXjwSHLa0H4VI85jLNtP+U98pU4JU6VZIG+zPn+WnXFOJ7SuoNlTZxQlb8V58xK4yZGPuGexMc75P/aoMx3fd7SXZ16RXGBMneAdmKYNXpHWfolc+DvAQ1Qo8YiCNpS8mthLBo7JPiGAFvXv786Vv9vP2oE6b4aJBS3d/ZAc+VTmk2XbX1/mmQVl0TMN/LH9pjGcVcOwli0qPzfLzuc5QXlvOEGovIghWs6GI/UM87R3bULSRFpjUnZ7SYkHoJU9Rqpi8utz5CoW1Q4gVrO2B0lT0RrJ++d78cfvMh/pipWNVnUsVc7lyRVdxsSsrqTzzw4jXWVnM0+unOqgRDTlJTuVQGhNqYDJkysMcVdtDEx5lGjzRTPa3SmItwv1ru244zlq9MtD5Fi0woEnzeuOkkY8i1EVTJBrXoafhc5YZzkec9Mz67cR5NqR0FeNex4lnfYbZZUgV5vRSSWqQUoccraTQZIHJl8yViuzx7nb2VVeJLlh4H83V/BlJjBoArHjCYXaKOMSpefoif5FJeHMatLkctEJvmaxVM0wjiXDroAuVn8ajHF3vXwtxPAQf2Sx5MnB7sFxJKiykQ6EGEme3KOmJfT0mkacBSb+C9w3saVADhwK3qUxa7xH8c8VyEsFUuY6PCdRqzzkw5W6ciQ9tnv2Rp7x22LazxvRGBUySuRWjavjdvc1D5qjQSs0MxhlJWvD/cr/xvhJSJK12y9CjJZYF9uXoK7UqyDhZUtsD5K+RtF+rRaW2C4UndxHjYXbFDsrwFiXihkStiq2/8BakVtJCQu8tmyfmbkWGT3TaUVrFh6ZRSbfqaKWA1wfUuSNJcn+COickt0c+UcxiPgAFg2nfjFH/us77bs5l3pqshzcCXEKmnLkN/PlufcH36m7ScPJfOXIc51M1knzagKgOFT2xCntyJEXvNP1OOkt4j5S+suSOCFwperP2umFDa5cA1kvsfOJWpWANdJcjjxELdlBEa9rRN5uf6/6h4KLl+A0qApzXy+8HJdRVZjr4vYEypPbXzaHrJksOUwi1SFx69EJ8seIRtzFLUsmyPFr7e2KW6xGRqMeKbvCDUWVyGvumRXEs+CK5J2qfyyo+KsPCrHXRzJmtvxanQL5I41xggZ/xXg7SiEDjrgtMcvkOBVLKIqpwExyT6WvsNsSlJ6XyNWXdDgqUV+Qcl6t3iHHu0SLSCk9fvEXylqRaD0dJZf6GJFITi6RSf4Y5oxwLR01f468YtSKhGsMqOQPML7vROCMmgmc2nObEneFYFSL1N5dFa+UZtXJoJTj2pNEezNmhVC9rViJXhjsfRpqXQIqsVyUs0NFjad1Xg5VghxpLZ0NyayW5O5KUtdCyG+ZtdH8/VgG9UyvSrV4Eu1EU8shXgZcvAdPfKyaQ1lyvUrFfx8fu9ePseS6/MjcGdNT1SxKKraoNyDPbvk6+a2CmKsaeTbB1Sa3vpUkkt9lbJii9NY3luwuOir7q/mLGhQAc9Zv6JOfNe2NUVZPa0u6UaXynnp+1+2otDQI98gkDaaDVudsBXdag3YcJc4nHOV7k3LJL4GZ7Wa33m0r5ZHWp/yGgFzy+hXI8QtE5MlrVyAnO5eLyeu2ekmlSaFgLKyT1dpovCqAi8jrtVpPqUefgFynQWJlUtvuVDTz16kUVm1rMKHNU5/h/U0JXCIaVTWQtBSbDovt3Br4Z79SbUUpJsfYEwpAkjEoFfKa3O/KOx/KeHVVbB6iKvWO8jLkT4A94yzpoAwuF5lw/1HX2BFLLobh+ko2nU2hJKM3bqO/a4BLx+GcrobV2v1NOmLncBmBQiBGh9zdainBqg1zclfdtiOnsyoQuaPFI2odxPXIvYHd3f+0JFinA0TuPcE3gzWUsIwdiNy9wJx8ZsGU3Bs6lWAy2MdVmTyz59xJKZps9aZBnk3tjjTINNrsTIvc852of/8yAdckz9SsfJjfGYHrk2eze7XF0Lq2GwD5GT44VVUi+WIIbkieKRwlsyoGe+NdLI3JLxpOF4sA8w9gviE7EPlZmMELgD1bwchbmLYdxK7cUOSoy3iN9m+8CYgctRIcZh92EPI2aqoZaF9mAPIObnBSsohbKHPyBW4dLMC2xBeZkveRayrgdl83JEc23X/gwI3Ifew49Ek/9lSWPrk/x+5xTt3kV1u65H4PGbvRSCG5dcnDCf7CBhj7xYx8VEH5yMbUHTcnD3tV1I58QY5tOuT+tJpqIe0UEgy5H6fVRJs/zcMQBuTD7kcl1A3lelZI8k48r7DuF8g1UyUPp5NlpQ3tT+Bj+h+5Tx01/c5w2k2eK8+ggURfGOTh/LhfzlZpMg963UmSrmaz5diRovYvaxfc+73bB07lhe96gbbaSuRO5YXvSuGNlzK5g/2CxspV25rkXt+pUu6N3RudIPe8tjOP+z/5BcUg5J4Xu8E+l+0aAEee+Z+Vmag3/ZuABl6kybPrXu1UHuBcbxp5lc/7oYt1venk5/4pVXCvm5jcTI9lgb38emVcA6Eqpq82QuyPdpgMMZkv4nipYYTyxB8SKyEXofj+eT+w3SZsOcV9uu8SxmQswn+/LWy6oQLJRKP6Ewv1jj8pWD5YT5IRSD9O1nA1f7txF30oL0kh6hzGKcRqjjcHqM9SzLGEzeTjXffi7/ZpBJgAN5ROXi1sRyvFKM5mFYwqmLN50s+fh/EiSD/2vD/BdrM+rYLFqKqJiyvjCiE/HA7ao2ncXES9yTyZT4JeN1o04/ZgeOmv5qr+AyGYl84NdxBJAAAAAElFTkSuQmCC" width="20px"
         />
         <img style={{cursor:"pointer"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmtHkjT6Wo_y5J-XCQXSK6jVULgHb6AOrjlg&usqp=CAU" width="40px" />
    </Box>
    <Box w="80%" margin="auto" mt="1.5rem" >
      <h3>BRANDS</h3>
      <p
      style={{marginTop:"10px" , marginBottom:"20px" , lineHeight:"30px", fontSize:"15px", color:"#656565"}} 
      >GlamourWorld Collectiom | Benefit Consmetics | Make Up For Ever | Cover FX | Stilta | Natio | Burt's Bees | Foreo | Samshbox | GlamGlow | Estee Lauder | Elizabeth Arden | Givency | Bobbi Brown | Shiseid0 | OPI | Forest Essentials | Percy & Reed | Boscia | Oscar Blandi | Burberry | CK Fragrance | Kenzo | TOm Ford | Bvlgari | Carolina Herrera | David Off | Giorgio Armani | Montblanc | Paco Rabanne | Yves Saint Laurent | Azzaro | Nina Ricci | Roberto Cavalli | Zirh | Omarfee </p>
    </Box>
    <Box mt="1.5rem" w="80%" margin="auto">
      <h3>MAKEUP</h3>
       <p
       style={{marginTop:"10px" , marginBottom:"20px" , lineHeight:"30px", fontSize:"15px", color:"#656565"}}
       >Face | Cheek | Eye | NAil | Makeup Palettes | Accessories</p>
    </Box>

    <Box mt="1.5rem" w="80%" margin="auto">
      <h3>SKINCARE</h3>
       <p
       style={{marginTop:"10px" , marginBottom:"20px" , lineHeight:"30px", fontSize:"15px", color:"#656565"}}
       >Moisturizers | Cleansers | Treatments | Masks | Eye Care | Sun Care | Lip Treatments</p>
    </Box>
    <Box mt="1.5rem" w="80%" margin="auto">
      <h3>OTHERS CATEGORIES</h3>
       <p
       style={{marginTop:"10px" , marginBottom:"20px" , lineHeight:"30px", fontSize:"15px", color:"#656565"}}
       >Fragrances | Tools & Brushes</p>
    </Box>
    <Box mt="1.5rem" w="80%" margin="auto">
      <h3>MY GLAMOURWORLD</h3>
       <p
       style={{marginTop:"10px" , marginBottom:"20px" , lineHeight:"30px", fontSize:"15px", color:"#656565"}}
       >My orders | Store locator | GlamourWorld FaceBook | GlamourWorld Instagram</p>
    </Box>
    </>
  )
}

export default Footer