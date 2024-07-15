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
import Order from './Order'

function Cart() {
  const {
    cartItem,
    showItems,
    quantity,
    cart,
    removeFromCart,
    openDialog,
  } = appStore();

  const totalOrder = cart.reduce((total, cartItemId) => {
    const product = ProductList.find((product) => product.id === cartItemId)
    const priceNumber = product ? parseFloat(product.price.replace('$', '')) : 0
    const totalPrice = (quantity[cartItemId] || 1) * priceNumber
    return total + totalPrice
  }, 0)

  const confirmOrderHandler = () => {
    openDialog()
  }

  return (
    <>
      <Stack>
        <Paper
          elevation={2}
          sx={{
            padding: '20px',
            width: { lg: '300px' },
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
                <React.Fragment>
                  <Box component="img" src={emptyCart} alt="empty cart" />
                </React.Fragment>
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
                  const totalPrice = (quantity[cartItems] || 1) * priceNumber

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
                            <Typography
                              sx={{
                                fontWeight: 'bold',
                                color: 'hsl(12, 100%, 43%)',
                              }}
                            >
                              {' '}
                              {quantity[cartItems] || 1}x
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: 'bold',
                              }}
                            >
                              @ ${priceNumber.toFixed(2)} $
                              {totalPrice.toFixed(2)}
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
                  <Typography sx={{ fontWeight: 'bold' }}>
                    Order Total
                  </Typography>

                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    ${totalOrder.toFixed(2)}
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
                  <React.Fragment>
                    <Box component="img" src={logo} />
                  </React.Fragment>
                  <Typography>
                    This is a <b>carbon-neutral</b> delivery
                  </Typography>
                </Stack>
                <Stack sx={{ alignItems: 'center' }}>
                  <Button
                    onClick={confirmOrderHandler}
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
      <Order totalOrder={totalOrder} quantity={quantity} />
    </>
  )
}

export default Cart
