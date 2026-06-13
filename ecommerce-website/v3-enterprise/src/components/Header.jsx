import { Link, useLocation } from 'react-router-dom'
import useCartStore from '../store/cartStore'
import './Header.css'

export default function Header() {
  const location = useLocation()
  const items = useCartStore(s => s.items)
  const openCart = useCartStore(s => s.openCart)
  const totalItems = items.reduce((s, i) => s + i.quantity, 0)

  const navLinks = [
    { path: '/', label: '首頁' },
    { path: '/products', label: '商品' },
  ]

  return (
    <header className="header">
      <div className="header-inner container">
        <Link to="/" className="logo">
          <span className="logo-icon">◆</span>
          EliteStore
        </Link>

        <nav className="nav">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button className="cart-btn" onClick={openCart}>
          <span className="cart-icon">🛒</span>
          <span className="cart-label">購物車</span>
          {totalItems > 0 && (
            <span className="cart-badge">{totalItems > 99 ? '99+' : totalItems}</span>
          )}
        </button>
      </div>
    </header>
  )
}
