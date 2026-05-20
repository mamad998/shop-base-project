export async function fetchData(){
    let response = await fetch('https://fakestoreapi.com/products');
    let data = await response.json();
    return data
}
export default async function ServerComponent(){
let products = await fetchData();
    return(
        <ul>
            {
                products.map(
                    (product,index)=>(
                        <li key={index}>{product.title} - {product.price}</li>
                    )
                )
            }
        </ul>
    )
}