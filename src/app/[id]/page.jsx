import Link from "next/link";

export async function generateMetadata({params}){

    let { id } = await params;
    let res = await fetch(`https://fakestoreapi.com/products/${id}`);
    let product = await res.json();

    return {
        title: product.title,
        description: product.description,
        openGraph:{
            title: product.title,
        description: product.description,
        images: [product.image],
        }
    };
}

export default async function ProductDetail({params}){

    let { id } =  await params ;
    let response = await fetch(`https://fakestoreapi.com/products/${id}`);
    let product = await response.json();

    return(
        <div className="product-detail">
            <img src={product.image}/>
            <h2>{product.title}</h2>
            <h4>{product.description}</h4>
            <h5>Rate : {product.rating.rate}</h5>
            <p>{product.price} $</p>

            <Link href="/">Back to Home Page</Link>

        </div>
    )
}