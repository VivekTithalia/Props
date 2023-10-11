import React from 'react'

const Home = (props) => {
  return (
    <>
    
        
    <div className="container">
        <div className="items">
            <h3>Name: {props.name}</h3>
            <h3>age:{props.age}</h3>
            <h3>city:{props.city}</h3>
        </div>
        <div className="items">
            <h3>Name: {props.name1}</h3>
            <h3>age:{props.age1}</h3>
            <h3>city:{props.city1}</h3>
        </div>
        <div className="items">
            <h3>Name: {props.name3}</h3>
            <h3>age:{props.age3}</h3>
            <h3>city:{props.city3}</h3>
        </div>
        
    </div>
    
    </>
  )
}

export default Home