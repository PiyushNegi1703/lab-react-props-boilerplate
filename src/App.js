// import { render } from '@testing-library/react';
import './App.css';


function App(props) {
  console.log(props.data)
  return(
    <div>
      <h1>Kalvium Gallery</h1>

      <div className='images'>
        {props.data.map((data) => (
          <img src={data.img} alt="" />
        ))}
      </div>
    </div>
  )
}

export default App;
