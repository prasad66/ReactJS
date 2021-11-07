// /* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Product from './components/Product'


function App() {

  const fancyProduct={
    name:"Fancy Product",
    badge:"",
    minPrice:"40.00",
    maxPrice:"80.00",
  }
  const popularItem={
    name:"Popular Item",
    maxPrice:"80.00",
  }
  const specialItem={
    name:"Special Item",
    badge:"Sale",
    minPrice:"40.00",
    maxPrice:"80.00",
  }
  const saleItem={
    name:"Sale Item",
    badge:"Sale",
    minPrice:"40.00",
    maxPrice:"80.00",
}
  return (
    <>
      <Navbar />
      {/* <!-- Header--> */}
      <Header />


      {/* <!-- Section--> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          
            <Product productType={fancyProduct}/>
            <Product productType={specialItem}/>
            <Product productType={saleItem}/>
            <Product productType={popularItem}/>
            <Product productType={saleItem}/>
            <Product productType={fancyProduct}/>
            <Product productType={specialItem}/>
            <Product productType={popularItem}/>

          </div>
        </div>
      </section>

      
      {/* <!-- Footer--> */}
      <Footer />

    </>
  );
}

export default App;
