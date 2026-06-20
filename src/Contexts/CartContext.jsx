"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartDataProvider({children}){

    let [cart , setCart] = useState([]);

    useEffect(
        ()=>{
        const cartLocal = JSON.parse(localStorage.getItem("cart"))

        if(cartLocal){
            setCart(cartLocal)
        }
        }
    ,[])

    useEffect(
        ()=>{
        localStorage.setItem("cart",JSON.stringify(cart))
        }
    ,[cart])

    function addToCart (product){
        setCart(prev =>{
            let selectedProduct = prev.find(item=> item.id == product.id);

            if(!selectedProduct){
                return [...prev , {...product , quantity : 1}];
            }else{
               return prev.map(
                    (item)=> item.id == product.id
                    ?{...item , quantity : item.quantity + 1}
                    :item
                )
                
            }
        }
            
        );
    }
    function updateQuantity(productID , newQuantity){
        setCart(prev=>
            prev.map((item)=>(
                item.id == productID
                ?{...item , quantity : newQuantity}
                :item
            )
        )
        )
    }
    
    function getTotal (){
        let total = 0;
        cart.forEach(item=>total += item.quantity * item.price)
            return total;
    }

    function removeFromCart(productID){
        setCart(prev => prev.filter((product)=> product.id != productID));
    }

    return(
        <CartContext.Provider value={ {cart , addToCart , removeFromCart , addToCart , updateQuantity , getTotal} }>
            {children}
        </CartContext.Provider>
    )
}