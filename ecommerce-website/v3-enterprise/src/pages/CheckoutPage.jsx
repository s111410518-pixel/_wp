import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useCartStore from '../store/cartStore'
import './CheckoutPage.css'

const initialForm = { name: '', phone: '', email: '', address: '', note: '' }

export default function CheckoutPage() {
  const navigate = useNavigate()
  const items = useCartStore(s => s.items)
  const clearCart = useCartStore(s => s.clearCart)
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const total = items.reduce((s, i) => s + i.price * i.quantity, 0)
  const shipping = total >= 2000 ? 0 : 100
  const grandTotal = total + shipping

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = '請填寫姓名'
    if (!form.phone.trim()) errs.phone = '請填寫電話'
    else if (!/^09\d{8}$/.test(form.phone)) errs.phone = '請填寫正確的手機號碼（09開頭10碼）'
    if (!form.email.trim()) errs.email = '請填寫 Email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = '請填寫正確的 Email 格式'
    if (!form.address.trim()) errs.address = '請填寫地址'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    setTimeout(() => {
      clearCart()
      navigate('/order-confirm', { state: { form, items, grandTotal } })
    }, 1500)
  }

  const updateField = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
  }

  if (items.length === 0) {
    navigate('/cart')
    return null
  }

  return (
    <div className="checkout-page page-enter">
      <h1 className="checkout-title">結帳</h1>

      <form className="checkout-layout" onSubmit={handleSubmit}>
        <div className="checkout-form">
          <h2 className="form-section-title">收件資訊</h2>

          <div className="form-group">
            <label htmlFor="name">姓名 <span className="required">*</span></label>
            <input id="name" type="text" placeholder="請輸入姓名" value={form.name} onChange={e => updateField('name', e.target.value)} className={errors.name ? 'error' : ''} />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">手機 <span className="required">*</span></label>
              <input id="phone" type="tel" placeholder="0912345678" value={form.phone} onChange={e => updateField('phone', e.target.value)} className={errors.phone ? 'error' : ''} />
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input id="email" type="email" placeholder="example@email.com" value={form.email} onChange={e => updateField('email', e.target.value)} className={errors.email ? 'error' : ''} />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="address">收件地址 <span className="required">*</span></label>
            <input id="address" type="text" placeholder="請輸入地址" value={form.address} onChange={e => updateField('address', e.target.value)} className={errors.address ? 'error' : ''} />
            {errors.address && <span className="field-error">{errors.address}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="note">備註</label>
            <textarea id="note" rows="3" placeholder="其他備註事項..." value={form.note} onChange={e => updateField('note', e.target.value)} />
          </div>
        </div>

        <aside className="checkout-summary">
          <h2 className="form-section-title">訂單摘要</h2>
          <ul className="checkout-items">
            {items.map(item => (
              <li key={item.id} className="checkout-item">
                <span className="checkout-item-icon">{item.image}</span>
                <div className="checkout-item-info">
                  <p className="checkout-item-name">{item.name}</p>
                  <p className="checkout-item-qty">x {item.quantity}</p>
                </div>
                <p className="checkout-item-price">NT$ {(item.price * item.quantity).toLocaleString()}</p>
              </li>
            ))}
          </ul>

          <div className="checkout-totals">
            <div className="checkout-line"><span>商品小計</span><span>NT$ {total.toLocaleString()}</span></div>
            <div className="checkout-line"><span>運費</span><span>{shipping === 0 ? '免運費' : `NT$ ${shipping}`}</span></div>
            <div className="checkout-line grand-total"><span>應付總額</span><span>NT$ {grandTotal.toLocaleString()}</span></div>
          </div>

          <button type="submit" className="place-order-btn" disabled={submitting}>
            {submitting ? '處理中...' : `確認訂單 — NT$ ${grandTotal.toLocaleString()}`}
          </button>
        </aside>
      </form>
    </div>
  )
}
