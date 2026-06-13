import './Cart.css'

export default function Cart({ items, total, onUpdateQuantity, onRemoveItem, onClose }) {
  return (
    <>
      <div className="overlay" onClick={onClose} />
      <aside className="cart-panel">
        <div className="cart-header">
          <h2>購物車</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        {items.length === 0 ? (
          <p className="cart-empty">購物車是空的</p>
        ) : (
          <>
            <ul className="cart-list">
              {items.map(item => (
                <li key={item.id} className="cart-item">
                  <span className="cart-item-icon">{item.image}</span>
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">NT$ {item.price.toLocaleString()}</p>
                  </div>
                  <div className="cart-item-qty">
                    <button onClick={() => onUpdateQuantity(item.id, -1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                  </div>
                  <p className="cart-item-subtotal">
                    NT$ {(item.price * item.quantity).toLocaleString()}
                  </p>
                  <button className="remove-btn" onClick={() => onRemoveItem(item.id)}>✕</button>
                </li>
              ))}
            </ul>
            <div className="cart-footer">
              <div className="cart-total">
                <span>總計</span>
                <span>NT$ {total.toLocaleString()}</span>
              </div>
              <button className="checkout-btn">前往結帳</button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
