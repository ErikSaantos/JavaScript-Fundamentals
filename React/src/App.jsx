import React from 'react'
import Person from './lessons/01. React Basics/02. Props/Person.jsx';
import Product from './lessons/01. React Basics/02. Props/Product.jsx';

const App = () => {
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

export default App;