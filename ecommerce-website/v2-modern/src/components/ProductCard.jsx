import { useCartDispatch } from '../context/CartContext'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const dispatch = useCartDispatch()

  const handleAdd = () => {
    dispatch({ type: 'ADD', product })
  }

  return (
    <div className="card">
      <span className="card-icon">{product.image}</span>
      <h3 className="card-name">{product.name}</h3>
      <p className="card-desc">{product.desc}</p>
      <p className="card-price">NT$ {product.price.toLocaleString()}</p>
      <button className="add-btn" onClick={handleAdd}>加入購物車</button>
    </div>
  )
}
