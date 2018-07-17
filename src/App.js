import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonApp from './components/ButtonApp';
import ListComponent from './components/ListComponent';

class App extends Component {
  constructor() {
    //Ejecuta el constructor del padre
    super();
    this.state = {
      value: 0,
      characters: null
    }
    this.disminuir = this.disminuir.bind(this);
  }

  //Existen dos maneras de mandar a llamar a los métodos.
  //Con arrow functions y con métodos como en Java.
  aumentar = () => {
    this.setState({
      value: this.state.value + 1
    });
  }

  disminuir() {
    this.setState({
      value: this.state.value - 1
    });
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.value}</p>
        <ButtonApp method={this.aumentar} name={"Aumentar"} />
        <ButtonApp method={this.disminuir} name={"Dismnuir"} />
        <ListComponent />
      </div>
    );
  }
}

export default App;
