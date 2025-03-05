import ProductItem from "./ProductItem.jsx";

function ProductList({ products }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Item #:</th>
                    <th>Image:</th>
                    <th>Name:</th>
                    <th>Description:</th>
                    <th>Price:</th>
                    <th>Seller Id:</th>
                </tr>
            </thead>
            <tbody>
                { products.map((product) => 
                    <ProductItem key={ product.productNum }
                        {...product}
                    />)
                }
            </tbody>
        </table>
    )
}

export default ProductList;