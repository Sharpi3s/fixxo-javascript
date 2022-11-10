import React from 'react'
import { Box, styled } from '@mui/material';
import WhiteBtn from '../Buttons/WhiteBtn';


const WrapperBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#7E7F80',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem 0rem',
  color: '#fff'
  
}));

const Banner = () => {
  return (
    <div className='container'>
      <WrapperBox>
        <h1 className='fw-bold mb-3'>Up to 70% off*</h1>
        <p className='fw-bold mb-4'>Women's, Men's & Kids' Winter Fashion</p>
        <WhiteBtn title="FLASH SALE" />
      </WrapperBox>
    </div>
  )
}

export default Banner