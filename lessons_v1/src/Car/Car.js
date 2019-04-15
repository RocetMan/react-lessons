import React from 'react';
import "./Car.css"



const Car = (props) => {


  const className = ['input'];

  if(props.name !== ''){
    className.push('valid')
  } else {
    className.push('error')
  }


  return (
      <div style={
        {
          border: "1px solid #3ccc",
          maxWidth: "200px",
          margin: "15px auto",
          padding: "10px"
        }
      }>
        <p>Car name: <b>{props.name}</b></p>
        <p>Car year: <b>{props.year}</b></p>
        <input type="text" onChange={props.changeName} value={props.name} className={className.join(' ')}/>
        <button onClick={props.deleteItem}>Delete this item</button>

      </div>
  )
};




export default Car