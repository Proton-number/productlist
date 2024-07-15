import { Stack, Box, Typography, Grid } from '@mui/material'
import React from 'react'
import ProductList from './ProductList'
import AddToCart from './Button'

function Dessert() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        Dessert
      </Typography>

      <Grid container columns={{ xs: 5, sm: 12, lg: 10 }}>
        {ProductList.map((product) => {
          return (
            <Grid item xs={3} sm={4} lg={3} key={product.id}>
              <Stack sx={{ marginBottom: '20px' }}>
                <React.Fragment>
                  <Box
                    component="img"
                    src={product.img}
                    alt={product.description}
                    sx={{
                      width: { xs: '230px', sm: '220px', lg: '250px' },
                      height: { xs: '230px', sm: '220px', lg: '250px' },
                      borderRadius: '20px',
                      
                    }}
                  />
                </React.Fragment>
                <AddToCart id={product.id} />
                <Typography
                  sx={{ fontWeight: 'bold', opacity: '50%' }}
                  variant="subtitle2"
                >
                  {product.name}
                </Typography>
                <Typography sx={{ fontWeight: 'bold' }}>
                  {product.description}
                </Typography>
                <Typography
                  sx={{ color: 'hsl(18, 100%, 39%)', fontWeight: 'bold' }}
                  variant="subtitle2"
                >
                  {product.price}
                </Typography>
              </Stack>
            </Grid>
          )
        })}
      </Grid>
    </Stack>
  )
}

export default Dessert
