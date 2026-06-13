import { Link } from 'react-router-dom'
import { useCartDispatch } from '../context/CartContext'
import products from '../data/products'
import './HomePage.css'

export default function HomePage() {
  const dispatch = useCartDispatch()
  const featured = products.slice(0, 4)

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>發現你的風格</h1>
          <p>精選質感好物，為生活增添美好</p>
          <Link to="/products" className="hero-btn">探索商品</Link>
        </div>
      </section>

      <section className="featured">
        <h2 className="section-title">熱門商品</h2>
        <div className="featured-grid">
          {featured.map(product => (
            <div key={product.id} className="featured-card">
              <span className="featured-icon">{product.image}</span>
              <h3>{product.name}</h3>
              <p className="featured-price">NT$ {product.price.toLocaleString()}</p>
              <button
                className="add-btn"
                onClick={() => dispatch({ type: 'ADD', product })}
              >
                加入購物車
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
