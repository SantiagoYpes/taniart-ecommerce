'use client'
import React from 'react'
import { CheckOutFlow } from './components/CheckOutFlow'
import { GridItem } from './styles/GridItem';
import Grid from '@mui/material/Grid';
import { ListProducts } from './components/ProductList';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
const page = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Grid container justifyContent='center' alignContent='center' alignItems='center' spacing={2} sx={{ width: '100%' }}>
        <Grid size={5}>
          <GridItem>
            <Typography color="secondary" variant='h4' component="span">Resumen de tu Compra</Typography>
            <Divider />
            <ListProducts />
            
          </GridItem>
        </Grid>
        <Grid size={3}>
          <GridItem><CheckOutFlow /></GridItem>
        </Grid>
      </Grid>

    </div>
  )
}

export default page
