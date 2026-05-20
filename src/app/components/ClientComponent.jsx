"use client";
import { useState } from "react";

 export default function ClientComponent(){
    let [count , setCount] = useState(0);
    return(
        <div>
            <h1 className="text-black font-semibold">Client Component</h1>
            <h3>The Value count is :{count}</h3>
            <button onClick={()=>{setCount(count+1)}}> add to Cart</button>
        </div>
    )
 }