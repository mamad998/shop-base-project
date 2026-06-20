"use client";

import { CartContext } from "@/Contexts/CartContext";
import Link from "next/link";
import { useContext } from "react";

export default function ProductItem({product}){

let {addToCart} = useContext(CartContext);

    return(
        <div className="product-item">
            <img src={product.image} />
            <h2>{product.title}</h2>
            <p>${product.price} </p>
            <button onClick={()=>{
                addToCart(product)
                alert(`Product :${product.title} added to cart `)
                }}>Add to Cart</button>
            <Link href={`/${product.id}`}>View more</Link>
        </div>
    )
}