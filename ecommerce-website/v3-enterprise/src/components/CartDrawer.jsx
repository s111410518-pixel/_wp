import { useNavigate } from 'react-router-dom'
import useCartStore from '../store/cartStore'
import './CartDrawer.css'

export default function CartDrawer() {
  const navigate = useNavigate()
  const items = useCartStore(s => s.items)
  const isOpen = useCartStore(s => s.isOpen)
  const closeCart = useCartStore(s => s.closeCart)
  const updateQuantity = useCartStore(s => s.updateQuantity)
  const removeItem = useCartStore(s => s.removeItem)
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0)

  const handleCheckout = () => {
    closeCart()
    navigate('/checkout')
  }

  return (
    <>
      <div className={`drawer-overlay ${isOpen ? 'visible' : ''}`} onClick={closeCart} />
      <aside className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h2>購物車</h2>
          <button className="drawer-close" onClick={closeCart}>✕</button>
        </div>

        {items.length === 0 ? (
          <div className="drawer-empty">
            <span className="empty-icon">🛒</span>
            <p>購物車是空的</p>
          </div>
        ) : (
          <>
            <ul className="drawer-list">
              {items.map(item => (
                <li key={item.id} className="drawer-item">
                  <span className="item-icon">{item.image}</span>
                  <div className="item-body">
                    <p className="item-name">{item.name}</p>
                    <p className="item-price">NT$ {item.price.toLocaleString()}</p>
                    <div className="item-qty">
                      <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>
                  <p className="item-total">NT$ {(item.price * item.quantity).toLocaleString()}</p>
                  <button className="item-remove" onClick={() => removeItem(item.id)}>✕</button>
                </li>
              ))}
            </ul>

            <div className="drawer-footer">
              <div className="drawer-total">
                <span>小計</span>
                <span className="total-price">NT$ {total.toLocaleString()}</span>
              </div>
              <button className="drawer-checkout" onClick={handleCheckout}>前往結帳</button>
              <button className="drawer-view-cart" onClick={() => { closeCart(); navigate('/cart') }}>
                查看購物車
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
