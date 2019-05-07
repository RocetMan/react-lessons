import React, { Component } from 'react';
import Car from "./Car/Car"


class App extends Component {
  state = {
    title: "This is my app",
    cars:[
      {
        name: "Ford",
        Year: 2019
      },
      {
        name: "Audi",
        Year: 2018
      },
      {
        name: "BMW",
        Year: 2017
      }
    ],
    toggleCar: false

  };

  toggleCar = () =>{

    this.setState({
      toggleCar: !this.state.toggleCar
    })
  };


  changeName = (value, index) =>{

    const car = this.state.cars[index];

    car.name = value;

    let cars = [...this.state.cars];

    cars[index] = car;

    this.setState({cars})

  };

  deleteItem = (index) => {

    let cars = [...this.state.cars];

    cars.splice(index, 1);

    this.setState({cars})

  };

  render() {

    let cars = null;

    if(this.state.toggleCar){
      cars = this.state.cars.map((car, index) => {
            return (
                <Car
                    key={index}
                    name={car.name}
                    year={car.Year}
                    changeName={(event) => this.changeName(event.target.value, index)}
                    deleteItem={this.deleteItem.bind(this, index)}
                />
            );
          },
      )
    }

    return (
     <div className={"my-app"}>
       <h1>{this.state.title}</h1>
       <button onClick={this.toggleCar}>toggle button</button>

       {cars}

     </div>
    );
  }
}

export default App;
