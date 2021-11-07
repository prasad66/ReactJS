import React, { useState } from 'react'
import Button from './Button'
import Rating from './Rating'

const Product = (props) => {

    const [viewAddCart, setViewAddCart] = useState(true);
    const [buttonName, setButtonName] = useState("Add to Cart")
    const [buttonClass,setButtonClass] = useState("btn-outline-dark")

    const onClickHandler = (event) => {
        if (viewAddCart) {
            setButtonName("Remove from Cart")
            setViewAddCart(!viewAddCart);
            setButtonClass("btn-outline-danger");
        }else{
            setButtonName("Add to Cart")
            setViewAddCart(!viewAddCart);
            setButtonClass("btn-outline-dark");
        }

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

                        {/* <!-- Product price--> */}

                        {props.productType.name === "Special Item" || props.productType.name === "Sale Item" ? <span className="text-muted text-decoration-line-through">${props.productType.minPrice}</span> : ""}
                        {props.productType.name === "Fancy Product" ? <span>${props.productType.minPrice} - </span> : ""}
                        ${props.productType.maxPrice}
                    </div>
                </div>

                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <Button function={onClickHandler} name={props.productType.name} buttonText={buttonName} outline={buttonClass}/>

                </div>
            </div>
        </div>
    )
}

export default Product
