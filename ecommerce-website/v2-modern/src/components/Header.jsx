import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Header.css'

export default function Header() {
  const cart = useCart()
  const location = useLocation()
  const totalItems = cart.reduce((s, i) => s + i.quantity, 0)

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">ShopWave 🌊</Link>
        <nav className="nav">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>首頁</Link>
          <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>商品</Link>
          <Link to="/cart" className={`cart-link ${location.pathname === '/cart' ? 'active' : ''}`}>
            🛒 購物車
            {totalItems > 0 && <span className="badge">{totalItems}</span>}
          </Link>
        </nav>
      </div>
    </header>
  )
}
