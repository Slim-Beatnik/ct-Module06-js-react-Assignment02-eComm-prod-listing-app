function ProductItem(props) {
    const placeholderUrl = './assets/img/eComm_placeholds.jpg'
    return (
            <tr>
                <td style={{ display: 'none' }}>{ props.productNum }</td>
                <td>{ props.id }</td>
                <td><img src={ props.imgUrl ?? formatImgName(props.id) } alt={props.name} onError={ (e) => e.target.src = placeholderUrl} /></td> 
                <td>{ props.name }</td>
                <td>{ props.desc }</td>
                <td>${ props.price }</td>
                <td>{ props.sellerId }</td>
            </tr>
    )// ?? is checking if imgUrl is null or undefined. ?? is the nullish coalescing operator - yay for learning new things. 
    // format: objectToCheck ?? defaultValueOrObject ( ||= is only available in vanilla js. )
}

ProductItem.defaultProps = {
    id: 0,
    imgUrl: './public/img/eComm_placeholds.jpg',
    name: 'product',
    desc: 'description',
    price: 'contact seller',
    sellerId: 'storeName'
}

function formatImgName(id) {
    return './public/img/eComm_prodID' + String(id).padStart(4, "0") + '.jpg'
}

export default ProductItem