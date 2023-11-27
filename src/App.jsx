import React, { Component } from "react";
import Carousel from "./components/Carousel";
import "./App.css";


export default class App extends Component {

  constructor(){
    super()
  }

  render(){
    return(
      <div className="App">
        <Carousel />
      </div>
    )
  }
}