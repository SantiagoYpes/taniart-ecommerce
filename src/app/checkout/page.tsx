'use client'
import React from 'react'
import { CheckOutFlow } from './components/CheckOutFlow'
import Box from '@mui/material/Box';
import { GridItem } from './styles/GridItem';
import Grid from '@mui/material/Grid';
import { ListProducts } from './styles/ProductList';
const page = () => {
  return (
    <div className='flex justify-center w-full items-center'>
        <Grid container spacing={2}>
          <Grid size={5}>
            <GridItem><ListProducts /></GridItem>
          </Grid>
          <Grid size={5}>
            <GridItem><CheckOutFlow /></GridItem>
          </Grid>
        </Grid>

    </div>
  )
}

export default page
