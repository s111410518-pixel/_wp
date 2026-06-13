import { Link } from 'react-router-dom'
import useCartStore from '../store/cartStore'
import products from '../data/products'
import './HomePage.css'

export default function HomePage() {
  const addItem = useCartStore(s => s.addItem)
  const featured = products.filter(p => p.tag === '熱銷' || p.tag === '新品').slice(0, 4)
  const categories = [
    { name: '電子', icon: '💻', desc: '3C 科技新品', color: '#3498db' },
    { name: '配件', icon: '🎒', desc: '質感配件選物', color: '#e67e22' },
    { name: '生活', icon: '🏠', desc: '品味居家生活', color: '#2ecc71' },
  ]

  return (
    <div className="home-page page-enter">
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">2026 夏季新品</span>
          <h1 className="hero-title">質感生活<br />從這裡開始</h1>
          <p className="hero-subtitle">精選全球好物，為你打造更有品味的日子</p>
          <Link to="/products" className="hero-cta">
            立即探索
            <span className="cta-arrow">→</span>
          </Link>
        </div>
        <div className="hero-visual">
          <span className="hero-emoji">🛍️</span>
        </div>
      </section>

      <section className="categories-section">
        <h2 className="section-title">商品分類</h2>
        <div className="categories-grid">
          {categories.map(cat => (
            <Link to={`/products?category=${cat.name}`} key={cat.name} className="cat-card" style={{ '--cat-color': cat.color }}>
              <span className="cat-icon">{cat.icon}</span>
              <h3>{cat.name}</h3>
              <p>{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <div className="section-header">
          <h2 className="section-title">精選推薦</h2>
          <Link to="/products" className="view-all">查看全部 →</Link>
        </div>
        <div className="featured-grid">
          {featured.map(product => (
            <div key={product.id} className="featured-card">
              <Link to={`/products/${product.id}`} className="featured-card-link">
                <span className="featured-emoji">{product.image}</span>
                <h3>{product.name}</h3>
                <p className="featured-desc">{product.desc}</p>
                <p className="featured-price">NT$ {product.price.toLocaleString()}</p>
              </Link>
              <button className="featured-add" onClick={() => addItem(product)}>
                加入購物車
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
