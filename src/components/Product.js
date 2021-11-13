import React, { useState } from 'react'
import Rating from './Rating'

const Product = (props) => {

    const [viewAddCart, setViewAddCart] = useState(true);
    const [cartItems, setCartItems] = useState([]);

    const addCart = (item) => {
        cartItems.push(item);
        setViewAddCart(!viewAddCart);
        props.add(item);
    }
    const removeCart = (item) => {
        setViewAddCart(!viewAddCart);
        setCartItems(cartItems.filter(pItem => pItem.name !== item.name && pItem.price !== item.price))
        console.log(cartItems);
        props.remove(item);
    }

    return (
        <div className="col mb-5">
            <div className="card h-100">

                {/* <!-- Sale badge--> */}
                <div className="badge bg-dark text-white position-absolute" style={{ top: 0.5 + "rem", right: 0.5 + "rem" }}>{props.productType.badge}</div>

                {/* <!-- Product image--> */}
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                    <div className="text-center">

                        {/* <!-- Product name--> */}
                        <h5 className="fw-bolder">{props.productType.name}</h5>

                        {/* <!-- Product reviews--> */}
                        <Rating name={props.productType.name} />
                        {/* {
                           
                            props.productType.name==="Special Item" || props.productType.name==="Popular Item"?
                            <Rating name={props.productType.name} />:""
                        } */}
                        {/* <!-- Product price--> */}

                        {props.productType.name === "Special Item" || props.productType.name === "Sale Item" ? <span className="text-muted text-decoration-line-through">${props.productType.minPrice}</span> : ""}
                        {props.productType.name === "Fancy Product" ? <span>${props.productType.minPrice} - </span> : ""}
                        ${props.productType.maxPrice}
                    </div>
                </div>

                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    {
                        props.productType.name === "Fancy Product" ?
                            <div className="text-center"><button className="btn btn-outline-dark mt-auto">View Options</button></div> :

                            viewAddCart ?
                                <div className="text-center"><button className="btn btn-outline-dark" onClick={() => addCart({ name: props.productType.name, price: props.productType.maxPrice })}>Add to Cart</button></div> :
                                <div className="text-center"><button className="btn btn-outline-danger" onClick={() => removeCart({ name: props.productType.name, price: props.productType.maxPrice })}>Remove from Cart</button></div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Product
