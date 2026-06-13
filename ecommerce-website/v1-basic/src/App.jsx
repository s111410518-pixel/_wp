import { useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import './App.css'

export default function App() {
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const updateQuantity = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      ).filter(item => item.quantity > 0)
    )
  }

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="app">
      <Header
        cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
        onCartClick={() => setShowCart(true)}
      />
      <main className="main">
        <ProductList addToCart={addToCart} />
      </main>
      {showCart && (
        <Cart
          items={cartItems}
          total={total}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeItem}
          onClose={() => setShowCart(false)}
        />
      )}
    </div>
  )
}
