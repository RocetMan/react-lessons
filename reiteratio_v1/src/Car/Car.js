import React from "react"
import classes from "./Car.css"


const Car = (props) => {

  const validation = ["input"];

  if(props.name !== ""){
    validation.push('error')
  } else {
    validation.push('valid')
  }

  return (
      <div className={classes.container}>
        <p>Model: <b>{props.name}</b></p>
        <p>Year: <b>{props.year}</b></p>
        <input type="text" onChange={props.changeName} className={validation.join(" ")} value={props.name}/>
        <button onClick={props.deleteItem}>delete item</button>
      </div>
  )
};



export default Car