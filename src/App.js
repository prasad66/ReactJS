// /* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/*eslint-disable-next-line no-unused-vars*/
import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Product from './components/Product'


function App() {

  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const products = [
    {
      id: 1,
      name: "Fancy Product",
      badge: "",
      minPrice: "40.00",
      maxPrice: "80.00",
    },
    {
      id: 2,
      name: "Special Item",
      badge: "Sale",
      minPrice: "20.00",
      maxPrice: "18.00",
    },
    {
      id: 3,
      name: "Sale Item",
      badge: "Sale",
      minPrice: "50.00",
      maxPrice: "25.00",
    },
    {
      id: 4,
      name: "Popular Item",
      maxPrice: "40.00",
    },
    {
      id: 5,
      name: "Fancy Product",
      badge: "",
      minPrice: "40.00",
      maxPrice: "80.00",
    },
    {
      id: 6,
      name: "Special Item",
      badge: "Sale",
      minPrice: "20.00",
      maxPrice: "18.00",
    },
    {
      id: 7,
      name: "Sale Item",
      badge: "Sale",
      minPrice: "50.00",
      maxPrice: "25.00",
    },
    {
      id: 8,
      name: "Popular Item",
      maxPrice: "40.00",
    },
  ]

  const addCart = (item) => {
    cartItems.push(item);
    setCartCount(prev => prev + 1);
    setTotal(prev => prev + +item.price);
  }
  const removeCart = (item) => {
    setCartItems(cartItems.filter(pItem => pItem.name !== item.name && pItem.price !== item.price))
    console.log(cartItems);
    setTotal(prev => prev - item.price);
    setCartCount(prev => prev - 1);
  }


  return (
    <>
      <Navbar count={cartCount} items={cartItems} total={total} />

      {/* <!-- Header--> */}
      <Header />

      {/* <!-- Products Section--> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

            {
              products.map(product => {
                return <Product productType={product} add={addCart} remove={removeCart} key={product.id} />
              })
            }

          </div>
        </div>
      </section>


      {/* <!-- Footer--> */}
      <Footer />

    </>
  );
}

export default App;
