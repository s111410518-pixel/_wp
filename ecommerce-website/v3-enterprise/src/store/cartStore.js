import { create } from 'zustand'

const useCartStore = create((set, get) => ({
  items: [],
  isOpen: false,

  toggleCart: () => set(state => ({ isOpen: !state.isOpen })),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  addItem: (product) => set(state => {
    const existing = state.items.find(item => item.id === product.id)
    if (existing) {
      return {
        items: state.items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        isOpen: true,
      }
    }
    return {
      items: [...state.items, { ...product, quantity: 1 }],
      isOpen: true,
    }
  }),

  updateQuantity: (id, delta) => set(state => ({
    items: state.items
      .map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
      .filter(item => item.quantity > 0),
  })),

  removeItem: (id) => set(state => ({
    items: state.items.filter(item => item.id !== id),
  })),

  clearCart: () => set({ items: [] }),

  get totalItems() {
    return get().items.reduce((s, i) => s + i.quantity, 0)
  },

  get totalPrice() {
    return get().items.reduce((s, i) => s + i.price * i.quantity, 0)
  },
}))

export default useCartStore
