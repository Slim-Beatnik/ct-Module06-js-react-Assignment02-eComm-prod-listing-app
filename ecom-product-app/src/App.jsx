import { useState } from 'react'
import './App.css'
import ProductList from './ProductList.jsx'

// holds the state for the list of products and passes data a props to child components 
function App() {
  const [products] = useState([
    { id: 1, name: 'Human Skeleton', imgUrl: './assets/img/eComm_prodID0001.jpg', desc: 'Lorem', price: 9.99, sellerId: 'Herman Webster Mudgett' },
    { id: 2, name: 'Human Rights', imgUrl: './assets/img/eComm_prodID0002.jpg', desc: 'Ipsum', price: 19.99, sellerId: 'Pedro Pascal' },
    { id: 3, name: 'Toy Story 3', imgUrl: './assets/img/eComm_prodID0003.jpg', desc: 'Dolor', price: 29.99, sellerId: 'Disc-rete Movie Delivery' },
    { id: 4, name: 'Bad Music', imgUrl: './assets/img/eComm_prodID0004.jpg', desc: 'Sit', price: 139.99, sellerId: 'Michael Bolton' },
    { id: 5, name: 'Frozen Mementos', imgUrl: './assets/img/eComm_prodID0005.jpg', desc: 'Amet', price: 1119.99, sellerId: 'Theodore Robert Cowell' }
  ])

  return (
    <div>
      <h1>Your Mom</h1>
      <ProductList products={ products }/>
    </div>
  )
}

export default App
