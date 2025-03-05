import { useState } from 'react'
import './App.css'
import ProductList from './ProductList.jsx'

// holds the state for the list of products and passes data a props to child components 
function App() {
  const [products] = useState([
    { productNum: 111, id: 1, name: 'Human Skeleton', imgUrl: `/img/ecomm_prodID0001.jpg`, desc: 'I didn\'t kill people to get these skeletons.', price: 9.99, sellerId: 'Herman Webster Mudgett'},
    { productNum: 222, id: 2, name: 'Human Rights', imgUrl: `/img/eComm_prodID0002.jpg`, desc: 'Why am ah wearin\' pah-pa?', price: 19.99, sellerId: 'Pedro Pascal' },
    { productNum: 333, id: 3, name: 'Toy Story 3', imgUrl: `/img/eComm_prodID0003.jpg`, desc: 'I didn\'t steal a police man\'s helmet', price: 29.99, sellerId: 'Disc-rete Movie Delivery' },
    { productNum: 444, id: 4, name: 'Bad Music', imgUrl: `/img/eComm_prodID0004.jpg`, desc: 'Why should I change my name, he\'s the one who sucks', price: 139.99, sellerId: 'Michael Bolton' },
    { productNum: 555, id: 5, name: 'Frozen Mementos', imgUrl: `/img/eComm_prodID0005.jpg`, desc: 'Get your Bundy-Pops', price: 1119.99, sellerId: 'Theodore Robert Cowell'}
  ])

  // Look into memoized data and nanoid for UniqueIds

  const [filter, setFilter] = useState('')

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(filter.toLowerCase()) ||
    product.sellerId.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h1>The e-Commerce Marketplace</h1>
      <input
        type="text"
        placeholder="Enter term to see table filtered by name or seller ID"
        value={ filter }
        onChange={ filterTerm => setFilter(filterTerm.target.value) }
      />
      <ProductList products={ filteredProducts }/>
      <footer>
        <p>&#x1f12f; 2025 Your Mom, Inc. No rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
