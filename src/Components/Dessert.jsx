import { Stack, Box, Typography,  Grid } from '@mui/material'
import React from 'react'
import ProductList from "./ProductList"
import AddToCart from './Button'



function Dessert() {
  return (
    <Stack spacing={2}>
        <Typography variant='h4'sx={{fontWeight:"bold"}}>Dessert</Typography>

      <Grid container  columns={{ xs: 6, sm: 8, lg: 12 }} >
      {ProductList.map((product, index) => (
       <Grid item xs={3} sm={4} lg={3.3}  key={index}>
           <Stack  sx={{marginBottom:"20px"}}>
           <Box component="img"  src={product.img} alt={product.description} sx={{width:"200px", height:"200px", borderRadius:"20px"}}/>
           <AddToCart/>
              <Typography sx={{fontWeight:"bold", opacity:"50%"}} variant='subtitle2'>{product.name}</Typography>
               <Typography sx={{fontWeight:"bold"}}>{product.description}</Typography>
               <Typography sx={{color:"hsl(18, 100%, 39%)",fontWeight:"bold"}} variant='subtitle2'>{product.price}</Typography>
           </Stack>
            </Grid>
       ))}
      </Grid>
    
    </Stack>
  )
}

export default Dessert