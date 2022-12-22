import { Component } from "react";
import "./App.css"
import imageData from "./components/DataComponent";

export default class AppClass extends Component{
  // code here
  render(){
    return(
      <div>
      <h1>Kalvium Gallery</h1>

      <div className='images'>
        <img src={imageData()[0].img} alt="" />
        <img src={imageData()[1].img} alt="" />
        <img src={imageData()[2].img} alt="" />
        <img src={imageData()[3].img} alt="" />
      </div>
    </div>
    )
  }
}
