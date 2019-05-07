import React from 'react';
import "./Car.css"



class Car extends React.Component{

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('Car componentWillReceiveProps', nextProps, nextContext)
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('Car shouldComponentUpdate', nextProps, nextState, nextContext);
    return true
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('Car componentWillUpdate', nextProps, nextState, nextContext)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Car componentDidUpdate', prevProps, prevState, snapshot)
  }

  render() {
    console.log('car render');
   const className = ['input'];

   if(this.props.name !== ''){
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
         <p>Car name: <b>{this.props.name}</b></p>
         <p>Car year: <b>{this.props.year}</b></p>
         <input
             type="text"
             onChange={this.props.changeName}
             value={this.props.name}
             className={className.join(' ')}
         />
         <button onClick={this.props.deleteItem}>Delete this item</button>

       </div>
   )
 }

}




export default Car