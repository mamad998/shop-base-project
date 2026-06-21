"use client";

import CartDataProvider, { CartContext } from "./CartContext";

export default function CartContextWrapper({childern}){
    return <CartDataProvider>{childern}</CartDataProvider>
}