import React from "react"
import  "./style.css"

const Car = (props) =>{

  let classes = ['input'];

  if(props.model !== ""){
    classes.push("valid")
  } else {
    classes.push("error")
  }

  return (
      <div>
        <p>Model: <b>{props.model}</b></p>
        <p>Year: <b>{props.year}</b></p>
        <button onClick={props.deleteCar}>delete this item</button>
        <input onChange={props.changeName} className={classes.join(" ")} value={props.model} type="text"/>
      </div>
  )

};


export default Car
