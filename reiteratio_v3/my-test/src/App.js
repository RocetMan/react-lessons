import React, {Component} from 'react';
import Car from "./Car/Car"

class App extends Component {


  state = {
    cars: [
      {
        model: "Ford",
        years: 2013
      },
      {
        model: "Audi",
        years: 2011
      },
      {
        model: "BMW",
        years: 2018
      }
    ],

    toggleButton: false
  };

  toggleBtn = () => {
    this.setState({
      toggleButton: !this.state.toggleButton
    })

  };

  deleteCar = (index) => {
    let cars = [...this.state.cars];
    cars.splice(index, 1);

    this.setState({cars})

  };
  changeName = (value, index) => {
    const car = this.state.cars[index];
    let cars = [...this.state.cars];

    car.model = value;
    cars[index] =  car;
    this.setState({cars})
  };

  render() {

    let cars = null;

    if(this.state.toggleButton){
      cars = this.state.cars.map((car, index) => {
        return(
            <Car
              key={index}
              model={car.model}
              years={car.years}
              deleteCar={this.deleteCar.bind(this, index)}
              changeName={(event) => this.changeName(event.target.value, index)}
            />
        )
      })
    }
    return(
    <div>
      <button onClick={this.toggleBtn}>toggle</button>
      {cars}
    </div>
    )
  }


}

export default App;
