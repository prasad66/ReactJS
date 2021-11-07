import React from 'react'

const Button = (props) => {

    let buttonClass = props.outline+" btn mt-auto";
    return (
        <>
        {
            (props.name === "Fancy Product" ?
            <div className="text-center"><button className="btn btn-outline-dark mt-auto">View Options</button></div>:
            <div className="text-center"><button className={buttonClass} onClick={props.function}>{props.buttonText}</button></div>
            )
        }
        </>
    )
}

export default Button
