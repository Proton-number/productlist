import React from 'react'
import { Stack, Typography, Box, Button, Dialog } from '@mui/material'
import ProductList from './ProductList'
import tick from '/src/images/icon-order-confirmed.svg'
import appStore from '../Store/appStore'
function Order({ totalOrder, quantity }) {
  const { closeDialog, open, cart, startNewOrder } = appStore()
  return (
    <>
      <Dialog open={open} onClose={closeDialog}>
        <Stack spacing={1} sx={{ padding: '15px', overflow: 'none' }}>
          <React.Fragment>
            <Box
              component="img"
              src={tick}
              alt="order confirmed"
              sx={{ width: '30px' }}
            />
          </React.Fragment>
          <Typography sx={{ fontWeight: 'bold' }} variant="h4">
            Order Confirmed
          </Typography>
          <Typography sx={{ fontWeight: 'bold' }} variant="subtitle2">
            We hope you enjoy your food!
          </Typography>

          <Box
            sx={{
              backgroundColor: 'hsl(27, 69%, 97%)',
              borderRadius: '10px',
              padding: '10px',
            }}
          >
            {cart.map((itemId, index) => {
              const product = ProductList.find(
                (product) => product.id === itemId,
              )
              const priceNumber = product
                ? parseFloat(product.price.replace('$', ''))
                : 0
              const itemQuantity = quantity[itemId] || 1
              const totalPrice = itemQuantity * priceNumber
              return (
                <React.Fragment key={index}>
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                    }}
                  >
                    <Stack direction="row" spacing={2}>
                      <React.Fragment>
                        <Box
                          component="img"
                          src={product.thumbnail}
                          sx={{ width: '80px' }}
                        />
                      </React.Fragment>
                      <Stack>
                        <Typography sx={{ fontWeight: 'bold' }}>
                          {product.description}
                        </Typography>
                        <Stack
                          spacing={1}
                          direction="row"
                          sx={{ alignItems: 'center' }}
                        >
                          <Typography
                            sx={{
                              fontWeight: 'bold',
                              color: 'hsl(12, 100%, 43%)',
                            }}
                          >
                            {itemQuantity}x
                          </Typography>
                          <Typography sx={{ fontWeight: 'bold' }}>
                            @ {priceNumber.toFixed(2)}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                    <Typography sx={{ fontWeight: 'bold' }}>
                      ${totalPrice.toFixed(2)}
                    </Typography>
                  </Stack>
                </React.Fragment>
              )
            })}
            <Stack
              direction="row"
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>Order Total</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                ${totalOrder.toFixed(2)}
              </Typography>
            </Stack>
          </Box>

          <Stack sx={{ alignItems: 'center' }}>
            <Button
              onClick={startNewOrder}
              variant="contained"
              sx={{
                textTransform: 'none',
                backgroundColor: 'hsl(12, 100%, 44%)',
                borderRadius: '25px',
                width: '320px',
                height: '50px',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: 'hsl(14, 100%, 33%)',
                  color: 'hsl(25, 100%, 91%)',
                },
              }}
              disableElevation
            >
              Start New Order
            </Button>
          </Stack>
        </Stack>
      </Dialog>
    </>
  )
}

export default Order
