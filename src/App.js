import './style.css'
import React, {useEffect, useState}  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navigation/Navbar'
import Footer from './Components/Navigation/Footer'
import Home from './Views/Home';
import Products from './Views/Products';
import ProductDetails from './Views/ProductDetails';
import Contact from './Views/Contact';
import NotFound from './Views/NotFound'
import { ProductsContext, FeaturedProductsContext, CardProductsContext } from './contexts/contexts'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF7373"
    },
    secondary: {
      main: "#fcfcfc"
    }
  }
});

function App() {
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [cardSection, setCardSection] = useState([])

  useEffect(() => {
    const fetchAllData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllData()

    const fetchFeaturedData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeaturedData()

    const fetchCardData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setCardSection(await result.json())
    }
    fetchCardData()

  }, [setProducts, setFeatured, setCardSection])  



  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename='/'>
        <ProductsContext.Provider value={products}>
        <FeaturedProductsContext.Provider value={featured}>
        <CardProductsContext.Provider value={cardSection}>
          <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route exact path="/contact" element={<Contact />} />
              {/* <Route exact path="/about" element={<About />} /> */}
              <Route path="*" element={<NotFound />}/>
            </Routes>
          <Footer />
        </CardProductsContext.Provider>
        </FeaturedProductsContext.Provider>
        </ProductsContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
