import ProductItem from "./ProductItem.jsx";

function ProductList({ products }) {
    return (
        <table>
            <caption>Products for sale here:</caption>
            <tr>
                <th>Item #:</th>
                <th>Image:</th>
                <th>Name:</th>
                <th>Description:</th>
                <th>Price:</th>
                <th>Seller Id:</th>
            </tr>
            <tbody>
                { products.map((product, index) => 
                    <ProductItem
                        id={ index + 1 }
                        imgUrl={ product.imgUrl }
                        name={ product.name }
                        desc={ product.desc }
                        price={ product.price } 
                        sellerId={ product.sellerId }
                    />)
                }
            </tbody>
        </table>
    )
}

export default ProductList;