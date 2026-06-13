import './Header.css'

export default function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="logo">MiniShop</h1>
        <button className="cart-btn" onClick={onCartClick}>
          🛒 購物車 {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </button>
      </div>
    </header>
  )
}
