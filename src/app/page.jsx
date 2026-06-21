// import ProductList from "../components/ProductList";

// export function generateMetadata(){
//     return {
//         title: "Home | Your online Shop",
//         description: "Browse amazing products ....",
//         openGraph:{
//             title: "Home | Your online Shop social media",
//         description: "Browse amazing products social media",
//         }
//     };
// }

// export default async function Home(){
//     let response = await fetch("https://fakestoreapi.com/products");
//     let products = await response.json();

//     return(
//         <div className="home">
//             <ProductList products={products}/>
//         </div>
//     )
// }



import ProductList from "../components/ProductList";

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
    try {
        const response = await fetch("https://dummyjson.com/products", { 
            next: { revalidate: 3600 },// هر یک ساعت یکبار دیتا را تازه کن (به جای force-dynamic)
            headers:{
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'application/json',
            },
        });

        // ✅ گام اول: چک کردن اینکه آیا پاسخ موفق بوده است یا نه
        if (!response.ok) {
            // اگر API ارور داد، یک آرایه خالی برگردان تا سایت کرش نکند
            console.error("API Error: ", response.status);
            return (
                <div className="home">
                    <p>متأسفانه در حال حاضر محصولاتی یافت نشد. لطفاً بعداً تلاش کنید.</p>
                </div>
            );
        }

        const data = await response.json();
        const products = data.products

        return(
            <div className="home">
                <ProductList products={products}/>
            </div>
        );

    } catch (error) {
        // ✅ گام دوم: مدیریت خطاهای شبکه (مثلاً اگر API کلاً قطع باشد)
        console.error("Fetch Error: ", error);
        return (
            <div className="home">
                <p>خطایی در برقراری ارتباط با سرور رخ داد.</p>
            </div>
        );
    }
}