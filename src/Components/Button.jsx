import React from 'react'
import { Box, Button, IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import appStore from '../Store/appStore'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

function AddToCart({ id }) {
  const { added, increase, decrease, quantity, addCart } = appStore()

  const isAdded = added[id] || false
  return (
    <Box
      sx={{ marginLeft: { xs: '30%', sm: '10%', lg: '15%' }, marginTop: '4px' }}
    >
      {!isAdded ? (
        <Button
          onClick={() => addCart(id)}
          startIcon={
            <AddShoppingCartIcon sx={{ color: 'hsl(12, 100%, 43%)' }} />
          }
          variant="contained"
          sx={{
            borderRadius: '25px',
            fontWeight: 'bold',
            textTransform: 'none',
            backgroundColor: 'white',
            color: 'black',
            width: { xs: '200px', sm: '170px' },
            height: { xs: '60px', sm: '50px' },
            '&:hover': {
              backgroundColor: 'white',
              color: ' hsl(12, 100%, 43%)',
              border: '1px solid hsl(12, 100%, 43%)',
            },
          }}
        >
          {' '}
          Add to Cart
        </Button>
      ) : (
        <Button
          disableRipple
          startIcon={
            <IconButton onClick={() => decrease(id)} sx={{ color: 'white' }}>
              <RemoveCircleOutlineIcon />
            </IconButton>
          }
          endIcon={
            <IconButton onClick={() => increase(id)} sx={{ color: 'white' }}>
              <AddCircleOutlineIcon />
            </IconButton>
          }
          sx={{
            borderRadius: '25px',
            fontWeight: 'bold',
            textTransform: 'none',
            backgroundColor: ' hsl(12, 100%, 43%)',
            color: 'white',
            width: { xs: '200px', sm: '170px' },
            height: { xs: '60px', sm: '50px' },
            '& .MuiButton-startIcon': {
              marginRight: '40px',
            },
            '& .MuiButton-endIcon': {
              marginLeft: '40px',
            },
            '&:hover': {
              backgroundColor: 'hsl(12, 100%, 43%)',
              color: 'white',
            },
          }}
        >
          {quantity[id] || 1}
        </Button>
      )}
    </Box>
  )
}

export default AddToCart
