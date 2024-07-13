import React from 'react'
import {
  Stack,
  IconButton,
  Typography,
  Paper,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'
import ProductList from './ProductList'
import tick from '/src/images/icon-order-confirmed.svg'
import appStore from '../Store/appStore'

function Order({ totalOrder }) {
  const { closeDialog, open, order } = appStore()
  return (
    <>
      <Dialog open={open} onClose={closeDialog}>
        <Stack spacing={1} sx={{ padding: '15px' }}>
          <>
            <Box
              component="img"
              src={tick}
              alt="order confirmed"
              sx={{ width: '30px' }}
            />
          </>
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
            <Stack
              direction="row"
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Stack spacing={1}>
                <>
                  <Box />
                </>
                <Stack>
                  <Typography>Classic</Typography>
                  <Stack
                    spacing={1}
                    direction="row"
                    sx={{ alignItems: 'center' }}
                  >
                    <Typography sx={{ fontWeight: 'bold' }}>1x</Typography>
                    <Typography sx={{ fontWeight: 'bold' }}>@ 5.34</Typography>
                  </Stack>
                </Stack>
              </Stack>
          <Typography sx={{ fontWeight: 'bold' }}>$4.29</Typography>
            </Stack>
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
