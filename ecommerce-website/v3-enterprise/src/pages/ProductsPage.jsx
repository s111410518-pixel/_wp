import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import products, { categories } from '../data/products'
import ProductCard from '../components/ProductCard'
import './ProductsPage.css'

const sortOptions = [
  { value: 'default', label: '預設排序' },
  { value: 'price-asc', label: '價格：低到高' },
  { value: 'price-desc', label: '價格：高到低' },
  { value: 'rating', label: '評價最高' },
  { value: 'name', label: '名稱' },
]

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || '全部'
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('default')

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams)
    if (cat === '全部') {
      params.delete('category')
    } else {
      params.set('category', cat)
    }
    setSearchParams(params)
  }

  const filtered = useMemo(() => {
    let result = products.filter(p => {
      const matchCategory = activeCategory === '全部' || p.category === activeCategory
      const matchSearch = p.name.includes(search) || p.desc.includes(search) || p.category.includes(search)
      return matchCategory && matchSearch
    })

    switch (sort) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break
      case 'price-desc': result.sort((a, b) => b.price - a.price); break
      case 'rating': result.sort((a, b) => b.rating - a.rating); break
      case 'name': result.sort((a, b) => a.name.localeCompare(b.name)); break
    }
    return result
  }, [activeCategory, search, sort])

  return (
    <div className="products-page page-enter">
      <div className="products-header">
        <h1 className="products-title">所有商品</h1>
        <p className="products-count">共 {filtered.length} 件商品</p>
      </div>

      <div className="products-toolbar">
        <div className="toolbar-left">
          <input
            type="text"
            className="search-input"
            placeholder="搜尋商品名稱、描述..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="toolbar-right">
          <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="categories-bar">
        {categories.map(cat => (
          <button
            key={cat}
            className={`cat-chip ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="no-results">
          <span className="no-results-icon">🔍</span>
          <h3>沒有符合的商品</h3>
          <p>請試試其他關鍵字或分類</p>
        </div>
      ) : (
        <div className="products-grid">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
