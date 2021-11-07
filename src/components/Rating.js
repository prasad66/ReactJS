import React from 'react'

const Rating = (props) => {
    return (
        <>
        {
                  props.name==="Special Item" || props.name==="Popular Item"? 
                <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
              </div>:""
            }
        </>
    )
}

export default Rating
