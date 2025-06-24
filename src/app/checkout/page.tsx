import React from 'react'
import { CheckOutFlow } from './components/CheckOutFlow'
import Box from '@mui/material/Box';
import { GridItem } from './styles/GridItem';
import Grid from '@mui/material/Grid';
const page = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={8}>
            <GridItem>size=8</GridItem>
          </Grid>
          <Grid size={4}>
            <GridItem><CheckOutFlow /></GridItem>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default page
