import React from 'react'

const Product = ( {name, price} ) => { // Could be just props
    return (
        <div>
            <h2>Product's Name: {name}</h2>
            <p>Product's Price: {price}</p>
        </div>
    )
}

export default Product;