import React, { useContext } from 'react'
import Hero from '../Components/Home/Hero'
import FeaturedProducts from '../Components/Home/FeaturedProduct/Index'
import Showcase1 from '../Components/Home/Showcase1/Index'
import Showcase2 from '../Components/Home/Showcase2/Index'
import Services from '../Components/Home/Services/Index'
import CardSection1 from '../Components/Home/CardSection1/Index'
import CardSection2 from '../Components/Home/CardSection2/Index'
import Banner from '../Components/Home/Banner/Index'
import Support from '../Components/Home/Support/Index'

import { FeaturedProductsContext, CardProductsContext } from '../contexts/contexts'

const Home = () => {

  const products = useContext(FeaturedProductsContext);
  const cardProducts = useContext(CardProductsContext);

  return (
    <div className=''>
      <Hero />
      <Showcase1 />
      <FeaturedProducts items={products} />
      <Showcase2 />
      <Services />
      <CardSection1 items={cardProducts} /> 
      <CardSection2 items={cardProducts} /> 
      <Banner /> 
      <Support />
    </div>
  )
}

export default Home

