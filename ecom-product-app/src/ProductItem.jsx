function ProductItem(props) {
    return (
        <tr>
            <td>{ props.id }</td>
            <td><img src={ props.imgUrl || formatImgName(props.id) } alt={props.name} onerror="this.src='./assets/img/eComm_placeholds';" /></td>
            <td>{ props.name }</td>
            <td>{ props.desc }</td>
            <td>{ props.price }</td>
            <td>{ props.sellerId }</td>
        </tr>
    )
}

ProductItem.defaultProps = {
    id: 0,
    imgUrl: './assets/img/eComm_placeholds.jpg',
    name: 'product',
    desc: 'description',
    price: 'contact seller',
    sellerId: 'storeName'
}

function formatImgName(id) {
    return './assets/img/eComm_prodID' + String(id).padStart(4, "0") + '.jpg'
}

export default ProductItem