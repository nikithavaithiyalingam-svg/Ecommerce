import React from 'react';
import './Screen.css';
import { Link } from 'react-router-dom';

import Gallery from '../Components/Gallery'
import Services from '../Components/Services'
import BestSelling from '../Components/BestSelling';

const Index = () => {
  return (
    <div>
      <div className='main'>
        <div className='text-content'>
          <h6 className='new-arrivals' style={{fontSize:'30px'}}>New Arrivals Only</h6>
          <h1 className='collection-title' style={{fontSize:'60px'}}>
            New 
            <br />Collections For <br />Everyone  
          </h1>
          <button className='btn-collection' style={{margin:'10px 0'}}>
            <Link to='products' style={{ textDecoration: "none", color: "white",fontSize:'18px'}}>Latest Collection</Link>
          </button>
        </div>
        <div className='img-men' style={{marginTop:'-10px'}}></div>
      </div>
      <Services />
      <BestSelling/>
      <Gallery />
    </div>
  );
};

export default Index;
