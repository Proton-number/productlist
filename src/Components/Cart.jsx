import React from 'react'
import {
  Stack,
  IconButton,
  Typography,
  Paper,
  Box,
  Button,
} from '@mui/material'
import emptyCart from '/src/images/illustration-empty-cart.svg'
import appStore from '../Store/appStore'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import logo from '/src/images/icon-carbon-neutral.svg'
import ProductList from './ProductList'

function Cart() {
  const { cartItem, showItems, quantity, cart, removeFromCart } = appStore()

  return (
    <Stack>
      <Paper
        elevation={2}
        sx={{
          padding: '20px',
          width: '300px',
          height: 'auto',
          borderRadius: '25px',
        }}
      >
        <Stack spacing={2}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold', color: 'hsl(18, 100%, 39%)' }}
          >
            Your cart ({cartItem})
          </Typography>

          {showItems ? (
            <Stack
              spacing={2}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '200px',
              }}
            >
              <Box component="img" src={emptyCart} alt="empty cart" />
              <Typography
                variant="body1"
                sx={{ color: 'hsl(10, 24%, 45%)', fontWeight: 'bold' }}
              >
                Your added items will appear here
              </Typography>
            </Stack>
          ) : (
            <>
              {cart.map((cartItems, index) => {
                const product = ProductList.find(
                  (product) => product.id === cartItems,
                )
                const priceNumber = product
                  ? parseFloat(product.price.replace('$', ''))
                  : 0
                  const grandTotal = 0;
                const totalPrice = (quantity[cartItems] || 0) * priceNumber;
                grandTotal += totalPrice;
                return (
                  <React.Fragment key={index}>
                    <Stack
                      direction="row"
                      sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Stack>
                        <Typography sx={{ fontWeight: 'bold' }}>
                          {product ? product.description : 'Unknown Product'}
                        </Typography>
                        <Stack direction="row" spacing={2}>
                          <Typography> {quantity[cartItems] || 0}</Typography>
                          <Typography>
                            @ ${priceNumber.toFixed(2)} ${totalPrice.toFixed(2)}
                          </Typography>
                        </Stack>
                      </Stack>
                      <IconButton
                        sx={{ color: 'black' }}
                        onClick={() => removeFromCart(cartItems)}
                      >
                        <HighlightOffIcon />
                      </IconButton>
                    </Stack>
                  </React.Fragment>
                )
              })}
              <Stack
                direction="row"
                sx={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography sx={{ fontWeight: 'bold' }}>Order Total</Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                $3.79
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  backgroundColor: 'hsl(27, 69%, 97%)',
                  borderRadius: '10px',
                  padding: '10px',
                  alignItems: 'center',
                }}
              >
                <Box component="img" src={logo} />
                <Typography>
                  This is a <b>carbon-neutral</b> delivery
                </Typography>
              </Stack>
              <Stack sx={{ alignItems: 'center' }}>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: 'none',
                    backgroundColor: 'hsl(12, 100%, 44%)',
                    borderRadius: '25px',
                    width: '320px',
                    height: '58px',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: 'hsl(14, 100%, 33%)',
                      color: 'hsl(25, 100%, 91%)',
                    },
                  }}
                  disableElevation
                >
                  Confirm Order
                </Button>
              </Stack>
            </>
          )}
        </Stack>
      </Paper>
    </Stack>
  )
}

export default Cart
