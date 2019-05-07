import React, { Component } from 'react';
import Car from "./Car/Car"

class App extends Component {

 state = {

   cars: [
     {name: 'ford', year: 2018},
     // {name: 'Audi', year: 2016},
     // {name: 'Mazda', year: 2015},
   ],

   pageTitle: 'React components',
   showCars: false

 };
  changeName = (name, index) =>{

    const car = this.state.cars[index];

    car.name = name;

    let cars = [...this.state.cars];

    cars[index] = car;

    this.setState({cars})

  };

  deleteItem = (index) => {

    let cars = [...this.state.cars];

    cars.splice(index, 1);

    this.setState({cars})

  };

 carsHandler = () => {
   this.setState({
     showCars: !this.state.showCars
   })
 };


 componentWillMount() {
   console.log('componentWillMount')
 }

 componentDidMount() {
   console.log('componentDidMount')
 }



  render() {
    console.log('render');
    const divStyle ={
      textAlign: "center"
    };


    let cars = null;

    if(this.state.showCars){
      cars = this.state.cars.map((car, index) => {
        return (
            <Car
                key={index}
                name={car.name}
                year={car.year}
                changeName={(event) => this.changeName(event.target.value, index)}
                deleteItem={this.deleteItem.bind(this, index)}
            />
        );
      })
    }


    return (
      <div className="App" style={divStyle}>

        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.carsHandler}>toggle cars</button>

        {cars}


        {/*{ this.state.showCars*/}
        {/*    ?*/}
        {/*    this.state.cars.map((car, index) => {*/}
        {/*      return (*/}
        {/*          <Car*/}
        {/*              key={index}*/}
        {/*              name={car.name}*/}
        {/*              year={car.year}*/}
        {/*              changeName={(event) => this.changeName(event.target.value, index)}*/}
        {/*              deleteItem={this.deleteItem.bind(this, index)}*/}
        {/*          />*/}
        {/*      );*/}
        {/*    })*/}
        {/*    : null*/}
        {/*}*/}


      </div>
    );
  }
}

export default App;
