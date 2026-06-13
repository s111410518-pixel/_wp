import { Link } from 'react-router-dom'
import useCartStore from '../store/cartStore'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const addItem = useCartStore(s => s.addItem)

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="card-link">
        <div className="card-image">
          <span className="card-emoji">{product.image}</span>
          {product.tag && <span className={`card-tag ${product.tag === '熱銷' ? 'hot' : product.tag === '新品' ? 'new' : 'limited'}`}>{product.tag}</span>}
          {discount > 0 && <span className="card-discount">-{discount}%</span>}
        </div>
        <div className="card-body">
          <h3 className="card-name">{product.name}</h3>
          <p className="card-desc">{product.desc}</p>
          <div className="card-rating">
            <span className="stars">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}</span>
            <span className="reviews">({product.reviews})</span>
          </div>
          <div className="card-prices">
            <span className="current-price">NT$ {product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="original-price">NT$ {product.originalPrice.toLocaleString()}</span>
            )}
          </div>
        </div>
      </Link>
      <button className="add-cart-btn" onClick={(e) => { e.preventDefault(); addItem(product) }}>
        加入購物車
      </button>
    </div>
  )
}
