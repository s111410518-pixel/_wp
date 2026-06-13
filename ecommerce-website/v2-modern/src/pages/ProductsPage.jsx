import { useState } from 'react'
import products, { categories } from '../data/products'
import ProductCard from '../components/ProductCard'
import './ProductsPage.css'

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('全部')
  const [search, setSearch] = useState('')

  const filtered = products.filter(p => {
    const matchCategory = activeCategory === '全部' || p.category === activeCategory
    const matchSearch = p.name.includes(search) || p.desc.includes(search)
    return matchCategory && matchSearch
  })

  return (
    <div className="products-page">
      <div className="products-toolbar">
        <input
          type="text"
          className="search-input"
          placeholder="搜尋商品..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="categories">
          {categories.map(cat => (
            <button
              key={cat}
              className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="product-grid">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="no-results">沒有符合的商品</p>
      )}
    </div>
  )
}
