"use client";

import CartDataProvider from "../Contexts/CartContext";
import "../app/styles/globals.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { SessionProvider } from "next-auth/react";
// import { Providers } from "./Components/Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <SessionProvider>
          <CartDataProvider>
            <Header />
            <main className="main-content">{children}</main>
            <Footer />
          </CartDataProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
