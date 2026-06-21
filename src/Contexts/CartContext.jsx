"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartDataProvider({children}){

    let [cart , setCart] = useState([]);

    useEffect(
        ()=>{
       try{
        if(typeof window === undefined) return;
        //  const cartLocal = JSON.parse(localStorage.getItem("cart"))
         const cartLocal = window.localStorage.getItem("cart")
        if(cartLocal){
            const parsed = JSON.parse(cartLocal)
            if(Array.isArray(parsed)){
                setCart(parsed)
            }
        }
       }catch(e){
        console.error("خطا در خواندن سبد از حافظهٔ مرورگر", e);
       }
        }
    ,[])

    useEffect(
        ()=>{
            try{
                if(typeof window === undefined)return;       
                window.localStorage.setItem("cart",JSON.stringify(cart))
            }catch(e){
        console.error("خطا در ذخیرهٔ سبد در حافظهٔ مرورگر", e);
            }
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