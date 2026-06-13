import './ProductCard.css'

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="card">
      <span className="card-icon">{product.image}</span>
      <h3 className="card-name">{product.name}</h3>
      <p className="card-category">{product.category}</p>
      <p className="card-price">NT$ {product.price.toLocaleString()}</p>
      <button className="add-btn" onClick={() => onAdd(product)}>加入購物車</button>
    </div>
  )
}
