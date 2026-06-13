import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import OrderConfirmPage from './pages/OrderConfirmPage'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Header />
      <CartDrawer />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirm" element={<OrderConfirmPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
