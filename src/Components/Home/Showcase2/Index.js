import React from 'react'
import Conscious from './Conscious'
import TopPicks from './TopPicks'
import { Grid } from '@mui/material';

const Index = () => {
  return (
    <div className='container-fluid py-5'>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <TopPicks />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Conscious />
        </Grid>
      </Grid>
    </div>
  )
}

export default Index