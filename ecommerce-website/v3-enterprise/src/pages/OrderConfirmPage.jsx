import { Link, useLocation, Navigate } from 'react-router-dom'
import './OrderConfirmPage.css'

export default function OrderConfirmPage() {
  const location = useLocation()
  const order = location.state

  if (!order) {
    return <Navigate to="/" replace />
  }

  const orderId = 'ES' + Date.now().toString(36).toUpperCase()

  return (
    <div className="confirm-page page-enter">
      <div className="confirm-card">
        <div className="confirm-header">
          <span className="confirm-icon">✅</span>
          <h1>訂單已確認</h1>
          <p className="confirm-subtitle">感謝您的購買，我們將盡快為您出貨！</p>
        </div>

        <div className="confirm-body">
          <div className="order-info">
            <div className="info-row">
              <span>訂單編號</span>
              <span className="info-value">{orderId}</span>
            </div>
            <div className="info-row">
              <span>收件人</span>
              <span className="info-value">{order.form.name}</span>
            </div>
            <div className="info-row">
              <span>聯絡電話</span>
              <span className="info-value">{order.form.phone}</span>
            </div>
            <div className="info-row">
              <span>收件地址</span>
              <span className="info-value">{order.form.address}</span>
            </div>
            {order.form.note && (
              <div className="info-row">
                <span>備註</span>
                <span className="info-value">{order.form.note}</span>
              </div>
            )}
          </div>

          <div className="order-items">
            <h3>訂購商品</h3>
            {order.items.map(item => (
              <div key={item.id} className="order-item">
                <span className="order-item-icon">{item.image}</span>
                <div className="order-item-info">
                  <p className="order-item-name">{item.name}</p>
                  <p className="order-item-qty">x {item.quantity}</p>
                </div>
                <p className="order-item-price">NT$ {(item.price * item.quantity).toLocaleString()}</p>
              </div>
            ))}
          </div>

          <div className="order-total">
            <span>總計</span>
            <span className="total-amount">NT$ {order.grandTotal.toLocaleString()}</span>
          </div>
        </div>

        <div className="confirm-actions">
          <Link to="/" className="home-btn">回到首頁</Link>
          <Link to="/products" className="shop-more-btn">繼續購物</Link>
        </div>
      </div>
    </div>
  )
}
