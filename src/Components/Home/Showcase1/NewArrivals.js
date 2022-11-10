import React from 'react'
import NewArrivalsImg from '../../../Assets/Images/Home/Showcase1/new-arrivals.jpg'
import BlackBtn from '../Buttons/BlackBtn'

const NewArrivals = () => {
  return (
    <div className='showcase-section-2b'>
      <div className='img-wrapper'>
        <img src={NewArrivalsImg} alt="" />
      </div>
      
      <div className='showcase-text'>
        <h1 className='mb-5'>New <br />Arrivals</h1>
        <BlackBtn title="SHOP NOW"/>
      </div>
    </div>
  )
}

export default NewArrivals