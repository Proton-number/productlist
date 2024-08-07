import { create } from 'zustand'

const appStore = create((set) => ({
  cartItem: 0,
  quantity: {},
  added: {},

  //cart
  cart: [],

  order: [],

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
      const updatedQuantity = { ...state.quantity }
      delete updatedQuantity[id]
      return {
        cartItem: state.cartItem > 0 ? state.cartItem - 1 : 0,
        added: { ...state.added, [id]: false },
        cart: updatedCart,
        showItems: updatedCart.length === 0,
        quantity: updatedQuantity,
      }
    }),

  //For Dialog
  open: false,

  openDialog: () =>
    set((state) => ({
      open: true,
    })),

  closeDialog: () =>
    set((state) => ({
      open: false,
    })),

  //start new order
  startNewOrder: () =>
    set((state) => ({
      cartItem: 0,
      quantity: {},
      added: {},
      cart: [],
      showItems: true,
      open: false,
    })),
}))

export default appStore
