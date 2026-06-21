export const dynamic = 'force-dynamic';
import ProductList from "./components/ProductList";

export function generateMetadata(){
    return {
        title: "Home | Your online Shop",
        description: "Browse amazing products ....",
        openGraph:{
            title: "Home | Your online Shop social media",
        description: "Browse amazing products social media",
        }
    };
}

export default async function Home(){
    let response = await fetch("https://fakestoreapi.com/products/");
    let products = await response.json();

    return(
        <div className="home">
            <ProductList products={products}/>
        </div>
    )
}
