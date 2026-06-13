import products from '../data/products'
import ProductCard from './ProductCard'
import './ProductList.css'

export default function ProductList({ addToCart }) {
  return (
    <section>
      <h2 className="section-title">所有商品</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAdd={addToCart} />
        ))}
      </div>
    </section>
  )
}
