import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Shirt from '../Shirt/Shirt';
import Cart from '../Cart/Cart';
import './Shop.css';
import toast from 'react-hot-toast';

const Shop = () => {
    const shirts= useLoaderData();

    const[cart,setCart]=useState([]);



   const handleAddToCart= shirt=>{
     const exists= cart.find(ts=> ts._id === shirt._id);
     
     if(exists){
        toast.success('Already added!');
        }

    else {
        const newCart= [...cart,shirt];
         setCart(newCart);
       }
    }


   const removeFromCart= id =>{
        const remaining= cart.filter(ts=> ts._id !==id);
        setCart(remaining);
   }

    
    return (
        <div className='home-container'>
         
         <div className='t-shirts-container'>
             {
                shirts.map(shirt=> <Shirt 
                    key={shirt._id}
                    shirt={shirt}
                    handleAddToCart={handleAddToCart}
                   

                ></Shirt>)
             }
         </div>

         <div className='cart-container'>
            <Cart cart={cart}
                 removeFromCart={removeFromCart}
            ></Cart>

         </div>
            
        </div>
    );
};

export default Shop;