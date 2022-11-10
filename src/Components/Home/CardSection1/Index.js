import React from 'react'
import { Grid, Box, styled } from '@mui/material';
import CardLarge from '../Cards/CardLarge';
import CardSmall from '../Cards/CardSmall';
import OrangeTop from '../../../Assets/Images/Home/CardSection/matas-katinas-7ITfJfAxxY4-unsplash.jpg'


const CardSection1 = ({items = []}) => {

  return (
    <div className='container-fluid py-5'>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <CardLarge title="2 FOR USD $29" img={OrangeTop} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={4}>
          {

            items.map( product => <CardSmall key={product.articleNumber} item={product}/>)

          }

          </Grid>
        </Grid>
      </Grid>
    </div>

  )
}

export default CardSection1