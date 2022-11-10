import React from 'react'
import { Grid } from '@mui/material';
import CardLarge from '../Cards/CardLarge';
import CardSmall from '../Cards/CardSmall';
import BlackTshirt from '../../../Assets/Images/Home/CardSection/pexels-anna-nekrashevich-8532616.jpg'

const CardSection2 = ({items = []}) => {
  return (
    <div className='container-fluid py-5'>
      <Grid container spacing={4}>
        <Grid item lg={2}></Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={4}>
          {
            items.map( product => <CardSmall key={product.articleNumber} item={product}/>).reverse()
          }
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <CardLarge title="2 FOR USD $49" img={BlackTshirt} />
        </Grid>
      </Grid>
    </div>
  )
}

export default CardSection2