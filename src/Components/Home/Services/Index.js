import React from 'react'
import { Grid } from '@mui/material';

const Index = () => {
  return (
    <div className='container-fluid'>
      <div className='our-speciality p-5'>
        <h3 className='fw-bold text-center mb-3'>Our Speciality</h3>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <div className='our-speciality-item'>
              <div className='our-speciality-item-content'>
                <p className='fw-bold'>Track Your Order </p>
                <a href="#">Get Started <i className="fa-solid fa-angle-right"></i></a>
              </div>
              <div className='our-speciality-item-img'>
                <i className="fa-solid fa-truck-fast"></i>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className='our-speciality-item'>
              <div className='our-speciality-item-content'>
                <p className='fw-bold'>Make a Return </p>
                <a href="#">Get Started <i className="fa-solid fa-angle-right"></i></a>
              </div>
              <div className='our-speciality-item-img'>
                <i className="fa-solid fa-box"></i>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className='our-speciality-item'>
              <div className='our-speciality-item-content'>
                <p className='fw-bold'>Request a Price <br />Adjustment </p>
                <a href="#">Get Started <i className="fa-solid fa-angle-right"></i></a>
              </div>
              <div className='our-speciality-item-img'>
                <i className="fa-solid fa-hand-holding-dollar"></i>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Index