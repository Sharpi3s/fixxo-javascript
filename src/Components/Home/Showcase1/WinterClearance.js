import React from 'react'
import WinterClearanceImg from '../../../Assets/Images/Home/Showcase1/winter-clearance.jpg'
import BlackBtn from '../Buttons/BlackBtn'

const WinterClearance = () => {
  return (
    <div className='showcase-section-1b'>
      <div className='img-wrapper'>
        <img src={WinterClearanceImg} alt="" />
      </div>
      
      <div className='showcase-text'>
        <h1 className='mb-2'>Winter Clearance <br />Up to 70% Off!</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</p>
        <BlackBtn title="SHOP NOW"/>
      </div>
    </div>
  )
}

export default WinterClearance