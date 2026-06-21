// import Link from "next/link";
// import { notFound } from "next/navigation"; // برای نمایش صفحه ۴۰۴ اگر محصول نبود

// export async function generateMetadata({params}){

//     let { id } = await params;
//     let res = await fetch(`https://fakestoreapi.com/products/${id}`);
//     let product = await res.json();

//     return {
//         title: product.title,
//         description: product.description,
//         openGraph:{
//             title: product.title,
//         description: product.description,
//         images: [product.image],
//         }
//     };
// }

// export default async function ProductDetail({params}){

//     let { id } =  await params ;
//     let response = await fetch(`https://fakestoreapi.com/products/${id}`);
//     let product = await response.json();

//     return(
//         <div className="product-detail">
//             <img src={product.image}/>
//             <h2>{product.title}</h2>
//             <h4>{product.description}</h4>
//             <h5>Rate : {product.rating.rate}</h5>
//             <p>{product.price} $</p>

//             <Link href="/">Back to Home Page</Link>

//         </div>
//     )
// }


import Link from "next/link";
import { notFound } from "next/navigation"; // برای نمایش صفحه ۴۰۴ اگر محصول نبود

export async function generateMetadata({ params }) {
    const { id } = await params;

    try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);

        // اگر پاسخ سرور موفق نبود، متادیتا پیش‌فرض برگردان
        if (!res.ok) return { title: "Product Not Found" };

        const product = await res.json();

        return {
            title: product.title,
            description: product.description,
            openGraph: {
                title: product.title,
                description: product.description,
                images: [product.images[0]], // لیست عکس‌ها به صورت آرایه
            }
        };
    } catch (error) {
        return { title: "Store" }; // در صورت خطای شبکه
    }
}

export default async function ProductDetail({ params }) {
    const { id } = await params;

    const response = await fetch(`https://dummyjson.com/products/${id}`);

    // ✅ بسیار مهم: اگر محصول وجود نداشت یا API قطع بود
    if (!response.ok) {
        return notFound(); // کاربر را به صفحه ۴۰۴ هدایت کن
    }

    const product = await response.json();

    return (
        <div className="product-detail">
            <img src={product.images[0]} alt={product.title} />
            <h2>{product.title}</h2>
            <h4>{product.description}</h4>
            {/ استفاده از Optional Chaining برای جلوگیری از ارور اگر rating وجود نداشت /}
            <h5>Rate : {product?.rating?.rate}</h5>
            <p>{product.price} $</p>

            <Link href="/">Back to Home Page</Link>
        </div>
    );
}
