import { create } from "zustand";

export const useCartStore = create((set) => ({
  items: [],

  addItem: (product) =>
    set((state) => {
      // check if item already exists in cart
      const exists = state.items.find((item) => item.id === product.id);

      if (exists) {
        // update quantity
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      // add new item
      return {
        items: [...state.items, { ...product, quantity: 1 }],
      };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  clearCart: () => set({ items: [] }),

  getTotalItems: () =>
    set((state) => state.items.reduce((n, item) => n + item.quantity, 0)),
}));
