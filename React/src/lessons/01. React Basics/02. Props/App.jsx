import React from 'react'

const App = () => {
  return <User 
    // img="urlHere"
    name='Erik Santos'
    age={16} 
    isMarried={false}
    hobbies={["Coding", "Playing", "Sleeping"]} 
  />
};

const User = ( {name, age, isMarried, hobbies} ) => {
    return <section>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Is Married: {isMarried}</h3> {/* Doesn't show for now */}
      <h4>Hobbies: {hobbies}</h4>
    </section>
};

export default App;