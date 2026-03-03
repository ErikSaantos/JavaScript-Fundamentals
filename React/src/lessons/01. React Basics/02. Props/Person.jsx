import React from 'react'

const Person = (props) => { // Could use destructuring
  return (
    <div>
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
    </div>
  )
}

export default Person;