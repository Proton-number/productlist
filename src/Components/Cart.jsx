import React from 'react'
import { Stack, Box, Typography, Paper } from '@mui/material'
import emptyCart from "/src/images/illustration-empty-cart.svg"
import appStore from '../Store/appStore'


function Cart() {
 const {cartItem} = appStore();


  return (
    <Stack >
      <Paper elevation={2} sx={{padding:"20px", width:"300px", height:"300px", borderRadius:"25px"}}>
        <Stack  spacing={2}>
          <Typography variant='h5' sx={{fontWeight:"bold", color:"hsl(18, 100%, 39%)"}}>Your cart ({cartItem})</Typography>

          <Stack spacing={2} sx={{justifyContent:"center", alignItems:"center", height:"200px"}}>
            <Box component='img' src={emptyCart} alt="empty cart"/>
            <Typography variant='body1' sx={{color:"hsl(10, 24%, 45%)",fontWeight:"bold"}}>Your added items will appear here</Typography>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  )
}

export default Cart