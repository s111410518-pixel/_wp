import { useCart, useCartDispatch } from '../context/CartContext'
import './CartPage.css'

export default function CartPage() {
  const cart = useCart()
  const dispatch = useCartDispatch()
  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0)

  if (cart.length === 0) {
    return (
      <div className="cart-page-empty">
        <span className="empty-icon">🛒</span>
        <h2>購物車是空的</h2>
        <p>快去選購一些好東西吧！</p>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h2 className="cart-page-title">購物車</h2>
      <div className="cart-layout">
        <ul className="cart-list">
          {cart.map(item => (
            <li key={item.id} className="cart-item">
              <span className="item-icon">{item.image}</span>
              <div className="item-info">
                <h3>{item.name}</h3>
                <p className="item-desc">{item.desc}</p>
                <p className="item-price">NT$ {item.price.toLocaleString()}</p>
              </div>
              <div className="item-qty">
                <button onClick={() => dispatch({ type: 'UPDATE_QTY', id: item.id, delta: -1 })}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch({ type: 'UPDATE_QTY', id: item.id, delta: 1 })}>+</button>
              </div>
              <p className="item-subtotal">
                NT$ {(item.price * item.quantity).toLocaleString()}
              </p>
              <button
                className="remove-btn"
                onClick={() => dispatch({ type: 'REMOVE', id: item.id })}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
        <aside className="cart-summary">
          <h3>訂單摘要</h3>
          <div className="summary-row">
            <span>商品數量</span>
            <span>{cart.reduce((s, i) => s + i.quantity, 0)} 件</span>
          </div>
          <div className="summary-row total">
            <span>總計</span>
            <span>NT$ {total.toLocaleString()}</span>
          </div>
          <button className="checkout-btn">前往結帳</button>
        </aside>
      </div>
    </div>
  )
}
