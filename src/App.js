// import { render } from '@testing-library/react';
import './App.css';
import imageData from './components/DataComponent';

const image = imageData();

function App() {
  return(
    <div>
      <h1>Kalvium Gallery</h1>

      <div className='images'>
        <img src={image[0].img} alt="" />
        <img src={image[1].img} alt="" />
        <img src={image[2].img} alt="" />
        <img src={image[3].img} alt="" />
      </div>
    </div>
  )
}

export default App;
