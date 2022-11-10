import React from 'react'
import Grid from '@mui/material/Grid';
import PrimaryBtn from './Buttons/PrimaryBtn';

const Hero = () => {
  return (
    <div className='hero-bg mb-5'>
      <Grid container>
        <Grid item lg={4} className="hero-img-wrapper">
          <img className='hero-img' src="https://win22imgstorage.blob.core.windows.net/images/showcase-img-1.png" alt="" />
        </Grid>
        <Grid item lg={4} className="hero-content">
          <h1>Sale Up <br />To 50% Off</h1>
          <p>Online shopping free home delivery over $100</p>
          <PrimaryBtn title="SHOP NOW" />
          {/* <ColorButton><span className='partial-border'>SHOP NOW</span></ColorButton> */}
        </Grid>
        <Grid item lg={4} className="d-none d-lg-block">
          <img className='hero-img' src="https://win22imgstorage.blob.core.windows.net/images/showcase-img-2.png" alt="" />
        </Grid>
      </Grid>
      
    </div>
  )
}

export default Hero