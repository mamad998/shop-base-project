"use client";

import { CartContext } from "@/Contexts/CartContext";
import { useContext } from "react";

export default function ClientFile(){
    
  let {cart , removeFromCart , updateQuantity , getTotal} = useContext(CartContext)
    return(
        <div className="cart">
            {
                cart.length == 0
                ?<p>No item in cart</p>
                :cart.map(
                    (product)=>(
                        <div key={product.id}>
                            <img src={product.image} alt="photo"/>
                            <div>
                                <h2>{product.title}</h2>
                                <p>${product.price}</p>
                                <input type="number" value={product.quantity} min="1"
                                onChange={(e)=>{updateQuantity(product.id , Number(e.target.value))}}
                                />
                                <button onClick={ ()=>{removeFromCart(product.id)}}>Remove</button>
                            </div>
                        </div>
                    )
                )
            }
            <div>
              <h3>Total price : ${getTotal().toFixed(2)}</h3>
            </div>
        </div>
    )
}