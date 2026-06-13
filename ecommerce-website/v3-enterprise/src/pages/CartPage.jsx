import { Link, useNavigate } from 'react-router-dom'
import useCartStore from '../store/cartStore'
import './CartPage.css'

export default function CartPage() {
  const navigate = useNavigate()
  const items = useCartStore(s => s.items)
  const updateQuantity = useCartStore(s => s.updateQuantity)
  const removeItem = useCartStore(s => s.removeItem)
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0)

  if (items.length === 0) {
    return (
      <div className="cart-empty-page page-enter">
        <div className="empty-state">
          <span className="empty-icon">🛒</span>
          <h2>購物車是空的</h2>
          <p>看看有什麼好東西吧！</p>
          <Link to="/products" className="shop-link">去購物</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page page-enter">
      <h1 className="cart-page-title">購物車 ({items.reduce((s, i) => s + i.quantity, 0)} 件)</h1>

      <div className="cart-layout">
        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item-card">
              <div className="cart-item-left">
                <Link to={`/products/${item.id}`} className="cart-item-icon">{item.image}</Link>
                <div className="cart-item-info">
                  <Link to={`/products/${item.id}`} className="cart-item-name">{item.name}</Link>
                  <p className="cart-item-price">NT$ {item.price.toLocaleString()}</p>
                </div>
              </div>
              <div className="cart-item-right">
                <div className="cart-item-qty">
                  <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <p className="cart-item-total">
                  NT$ {(item.price * item.quantity).toLocaleString()}
                </p>
                <button className="cart-item-remove" onClick={() => removeItem(item.id)}>
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="cart-summary">
          <h3>訂單摘要</h3>
          <div className="summary-line">
            <span>商品小計</span>
            <span>NT$ {total.toLocaleString()}</span>
          </div>
          <div className="summary-line">
            <span>運費</span>
            <span>{total >= 2000 ? '免運費' : 'NT$ 100'}</span>
          </div>
          <div className="summary-line total">
            <span>總計</span>
            <span>NT$ {(total >= 2000 ? total : total + 100).toLocaleString()}</span>
          </div>
          {total < 2000 && (
            <p className="free-shipping-hint">
              再消費 NT$ {(2000 - total).toLocaleString()} 即可免運費
            </p>
          )}
          <button className="checkout-btn" onClick={() => navigate('/checkout')}>
            前往結帳
          </button>
          <Link to="/products" className="continue-shopping">繼續購物</Link>
        </aside>
      </div>
    </div>
  )
}
