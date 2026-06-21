"use client";

import { Children } from "react";
import CartDataProvider, { CartContext } from "./CartContext";

export default function CartContextWrapper({children}){
    return <CartDataProvider>{children}</CartDataProvider>
}