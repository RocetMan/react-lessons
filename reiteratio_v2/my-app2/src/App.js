import React, {Component} from 'react';
import Car from './Car/Car';

class App extends Component {

  state = {

    name: 'My title',

    cars: [

      {
        year: 2011,
        model: 'ford',

      },
      {
        year: 2017,
        model: 'ford',

      },
      {
        year: 2012,
        model: 'ford',

      },
    ],

    toggle: false

  };
  deleteCar = (index) => {

    let cars = [...this.state.cars];

    cars.splice(index, 1);

    this.setState({

      cars: cars

    })

  };
  changeName = (value, index) => {

    const car = this.state.cars[index];

    car.model = value;

    let cars = [...this.state.cars];

    cars.model = car;

    this.setState({
      cars: cars
    })


  };

  toggleCar = () => {

    this.setState({

      toggle: !this.state.toggle

    })

  };


  render() {

    let cars = null;

    if(this.state.toggle){
      cars = this.state.cars.map((car, index) => {
        return (
            <Car
                key = {index}
                model={car.model}
                year={car.year}
                deleteCar={this.deleteCar.bind(this, index)}
                changeName = {(event) => this.changeName(event.target.value, index) }
            />
        );
      });
    }

    return (
        <div>
          <h1>{this.state.name}</h1>
          <button onClick={this.toggleCar}>Toggle</button>
          {cars}
        </div>
    );
  }

}

export default App;
