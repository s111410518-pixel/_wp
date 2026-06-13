import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import useCartStore from '../store/cartStore'
import products from '../data/products'
import './ProductDetailPage.css'

export default function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const addItem = useCartStore(s => s.addItem)
  const [qty, setQty] = useState(1)

  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return (
      <div className="not-found page-enter">
        <span className="not-found-icon">🔍</span>
        <h2>商品不存在</h2>
        <p>找不到此商品，可能已被移除</p>
        <Link to="/products" className="back-link">返回商品列表</Link>
      </div>
    )
  }

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      addItem(product)
    }
  }

  return (
    <div className="product-detail page-enter">
      <button className="back-btn" onClick={() => navigate(-1)}>← 返回</button>

      <div className="detail-main">
        <div className="detail-image">
          <span className="detail-emoji">{product.image}</span>
          {product.tag && <span className={`detail-tag ${product.tag === '熱銷' ? 'hot' : product.tag === '新品' ? 'new' : 'limited'}`}>{product.tag}</span>}
        </div>

        <div className="detail-info">
          <p className="detail-category">{product.category}</p>
          <h1 className="detail-name">{product.name}</h1>
          <div className="detail-rating">
            <span className="stars">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}</span>
            <span className="rating-num">{product.rating}</span>
            <span className="reviews">({product.reviews} 則評價)</span>
          </div>

          <div className="detail-prices">
            <span className="detail-current">NT$ {product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <>
                <span className="detail-original">NT$ {product.originalPrice.toLocaleString()}</span>
                <span className="detail-discount">省 NT$ {(product.originalPrice - product.price).toLocaleString()} ({discount}% OFF)</span>
              </>
            )}
          </div>

          <p className="detail-desc">{product.desc}</p>
          <p className="detail-spec">{product.details}</p>

          <div className="detail-qty">
            <span>數量</span>
            <div className="qty-controls">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
          </div>

          <div className="detail-actions">
            <button className="add-to-cart" onClick={handleAdd}>
              加入購物車 — NT$ {(product.price * qty).toLocaleString()}
            </button>
            <button className="buy-now" onClick={() => { addItem(product); navigate('/checkout') }}>
              立即購買
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="related-section">
          <h2 className="section-title">相關商品</h2>
          <div className="related-grid">
            {related.map(p => (
              <Link to={`/products/${p.id}`} key={p.id} className="related-card">
                <span className="related-emoji">{p.image}</span>
                <h3>{p.name}</h3>
                <p className="related-price">NT$ {p.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
