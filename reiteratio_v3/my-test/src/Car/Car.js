import React from "react"


const Car = (props) => {


  return(
      <div>
        <p>Model: <b>{props.model}</b></p>
        <p>Years: <b>{props.years}</b></p>
        <button onClick={props.deleteCar}>delete</button>
        <input onChange={props.changeName} type="text"/>
      </div>
  )
};


export default Car
