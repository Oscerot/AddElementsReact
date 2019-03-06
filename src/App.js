import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 20, belt: "red", id: 2 },
      { name: "Crystal", age: 40, belt: "gray", id: 3 }
    ]
  };

  //se hace esto para no alterar directamente el state. Es decir, no poner "this.state.ninjas = ..."
  addNinja = ninja => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  };

  //se usa el método filter porque es un método no destructivo (no altera el state, sino que crea un nuevo arreglo en la variable let ninjas sin modificar el original), ya que lo que no se debe hacer es alterar el state directamente (Sin usar el método setState)
  deleteNinja = id => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas
    });
  };

  componentDidMount() {
    console.log("component mounted");
  }

  render() {
    return (
      <div className="App">
        <h2>Fist App</h2>
        <p>Add a Ninja</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
