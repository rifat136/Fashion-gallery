import React from 'react';
import './Shirt.css';

const Shirt = ({shirt, handleAddToCart}) => {
    const{picture, name, price}= shirt;
    return (
        <div className='t-shirt'>
          <img src={picture} alt="" />

          <div className='pt-3 mx-5 '>
          <h2>{name}</h2>
          <h2>${price}</h2>
          </div>

          <div className='btn mx-20'>
                <button onClick={()=>handleAddToCart(shirt)} className='bg-amber-500 text-lime-950 hover:bg-lime-600'>Buy Now</button>
          </div>
        </div>
        
    );
};

export default Shirt;