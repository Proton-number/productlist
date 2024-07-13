import { create } from 'zustand'

const appStore = create((set) => ({
  cartItem: 0,
  quantity: {},
  added: true,
  increase: (id) =>
    set((state) => ({
      quantity: {
        ...state.quantity,
        [id]: (state.quantity[id] || 0) + 1,
      },
    })),
  decrease: (id) =>
    set((state) => ({
      quantity: {
        ...state.quantity,
        [id]: Math.max(0, (state.quantity[id] || 0) - 1),
      },
    })),

//cart
  cart: [],

  //showing items in cart
  showItems: true,

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
    set((state) => {
      const updatedCart = state.cart.filter((itemId) => itemId !== id)
      return {
        cartItem: state.cartItem > 0 ? state.cartItem - 1 : 0,
        added: { ...state.added, [id]: false }, // Set 'added' to false
        cart: updatedCart,
        showItems: updatedCart.length === 0,
      }
    }),
}))

export default appStore
