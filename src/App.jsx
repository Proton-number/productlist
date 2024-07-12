import React from 'react'
import './App.css'
import { Stack } from '@mui/material'
import Dessert from './Components/Dessert'
import Cart from './Components/Cart'

function App() {
  return (
    <>
      <Stack direction={{ xs: 'column', lg: 'row' }} spacing={2}>
        <Dessert />
        <Cart />
      </Stack>
    </>
  )
}

export default App
