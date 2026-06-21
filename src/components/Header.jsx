"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import Link from "next/link";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";


export default function Header() {

  const {data : session} = useSession();

  const [isRender , setIsRender] = useState(false);

  useEffect(
    ()=> setIsRender(true)
  ,[])

  if(!isRender){
    return null
  }
  return (
    <header>
      <Link href="/">
        <h1>DigiKala shop store</h1>
      </Link>

      <Link href="/cart" className="cartheader">
        <FontAwesomeIcon icon={faShoppingCart} /> cart
      </Link>
      
      <div>
        {
          session
          ?(<>
          <span className="mx-4">Hi {session.user.name}</span>
          <button onClick={()=>{signOut()}}>signOut</button>
          </>
          )
          :<button onClick={()=>{signIn()}}>signIn</button> 
        }
      </div>
      <div className="social-media-links">
        <a href="https://saeed-sharifi.ir/" target="_blank" rel="noopener noreferrer">Website</a>
        <a href="https://instagram.com/shariff_saeed" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://linkedin.com/in/shariff-saeed" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </header>
  );
}



