import React from 'react'

const CartItems = (props) => {
    return (
        <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Cart Items</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {
                            props.items.length > 0 ?
                                <div className="m-3">
                                    <table className="table border" >
                                        <thead>
                                            <tr>
                                                <th>Item Name</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                props.items.map(item => {
                                                    return <>
                                                        <tr>
                                                            <td>{item.name}</td>
                                                            <td>{item.price}</td>
                                                        </tr>
                                                    </>
                                                })}
                                            <tr>
                                                <td>Total</td>
                                                <td>Rs.{props.total}/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                : <p>No Items in the cart!!!!</p>
                        }
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-success">Proceed</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
