import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{
  // code here
  render(){
    return(
      <div>
      <h1>Kalvium Gallery</h1>

      <div className='images'>
        {this.props.data.map((data) => (
          <img src={data.img} alt="" />
        ))}
      </div>
    </div>
    )
  }
}
