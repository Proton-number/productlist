import React from 'react'
import { Box, Button, IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import appStore from '../Store/appStore'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

function AddToCart({ id }) {
  const { added, increase, decrease, quantity, addCart } = appStore()

  // Check if the product with this ID is added
  const isAdded = added[id] || false
  return (
    <Box sx={{ marginLeft: '15%', marginTop: '4px' }}>
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
            width: '170px',
            height: '50px',
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
            width: '170px',
            height: '50px',
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
        {quantity[id] || 0}
        </Button>
      )}
    </Box>
  )
}

export default AddToCart
