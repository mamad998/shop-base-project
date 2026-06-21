import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
    // 🛡️ لایه حفاظتی اول: اگر products کلاً نیامده باشد یا آرایه نباشد
    if (!products || !Array.isArray(products)) {
        return <p>در حال حاضر محصولی برای نمایش یافت نشد.</p>;
    }

    // 🛡️ لایه حفاظتی دوم: اگر لیست محصولات خالی باشد
    if (products.length === 0) {
        return <p>لیست محصولات خالی است.</p>;
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}