import React from 'react'
import Product from './Product.jsx';
import Person from './Person.jsx';

const Challenge = () => {
    return (
        <div>
            <Person 
                name="Erik"
                age={17}
            />

            <Product 
                name="potato"
                price={30.5}
            />
        </div>
    )
}

export default Challenge;