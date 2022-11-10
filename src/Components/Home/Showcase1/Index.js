import React from 'react'
import NewArrivals from './NewArrivals'
import WinterClearance from './WinterClearance'
import { Grid } from '@mui/material';

const Showcase1 = () => {
  return (

    <div className='container-fluid py-5'>
      <Grid container>
        <Grid item xs={12} lg={7}>
          <WinterClearance />
        </Grid>
        <Grid item xs={12} lg={5}>
          <NewArrivals />
        </Grid>
      </Grid>
    </div>
  )
}

export default Showcase1