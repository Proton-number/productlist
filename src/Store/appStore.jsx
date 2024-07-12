import { create } from 'zustand'

const appStore = create((set) => ({
  cartItem: 0,
  quantity: 0,
  added: true,
  increase: () => set((state) => ({ quantity: state.quantity + 1 })),
  decrease: () =>
    set((state) => ({ quantity: state.quantity > 0 ? state.quantity - 1 : 0 })),

  cart: [],
  setCart: (cart) => set({ cart }),

  //showing items in cart
  showItems: true,
  setShowItems: (showItems) => set({ showItems }),

  //add to cart
  addCart: (id) =>
    set((state) => ({
      cartItem: state.cartItem + 1,
      added: { ...state.added, [id]: true },
      showItems: false,
      cart: [...state.cart, id],
    })),
  //remove from cart
    removeFromCart: (id) => 
      set((state) => ({
        cartItem: state.cartItem > 0 ?  - 1 :0,
        added: { ...state.added, [id]: false }, // Set 'added' to false
        cart: state.cart.filter(itemId => itemId !== id),
      })),
}))

export default appStore
