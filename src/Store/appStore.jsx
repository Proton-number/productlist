import { create } from "zustand";

const appStore = create((set) => ({
  cartItem:0
}));

export default appStore