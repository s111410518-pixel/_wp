import { createContext, useContext, useReducer } from 'react'

const CartContext = createContext(null)
const CartDispatch = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.find(item => item.id === action.product.id)
      if (existing) {
        return state.map(item =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...state, { ...action.product, quantity: 1 }]
    }
    case 'UPDATE_QTY': {
      return state.map(item =>
        item.id === action.id
          ? { ...item, quantity: Math.max(1, item.quantity + action.delta) }
          : item
      ).filter(item => item.quantity > 0)
    }
    case 'REMOVE':
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [])

  return (
    <CartContext.Provider value={cart}>
      <CartDispatch.Provider value={dispatch}>
        {children}
      </CartDispatch.Provider>
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}

export function useCartDispatch() {
  return useContext(CartDispatch)
}
