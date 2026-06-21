"use client";

import CartContextWrapper from "../Contexts/CartContextWrapper";
import "../app/styles/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { SessionProvider } from "next-auth/react";
// import { Providers } from "./Components/Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <SessionProvider>
          <CartContextWrapper>
            <Header />
            <main className="main-content">{children}</main>
            <Footer />
          </CartContextWrapper>
        </SessionProvider>
      </body>
    </html>
  );
}
