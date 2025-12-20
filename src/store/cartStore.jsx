// import { create } from "zustand";

// export const useCartStore = create((set) => ({
//   cartItems: [],
//   cartOpen: false,

//   addToCart: (item) =>
//     set((state) => {
//       const existing = state.cartItems.find((i) => i.id === item.id);

//       if (existing) {
//         return {
//           cartItems: state.cartItems.map((i) =>
//             i.id === item.id
//               ? { ...i, quantity: i.quantity + item.quantity }
//               : i
//           ),
//         };
//       }

//       return {
//         cartItems: [...state.cartItems, item],
//       };
//     }),

//   removeFromCart: (id) =>
//     set((state) => ({
//       cartItems: state.cartItems.filter((i) => i.id !== id),
//     })),

//   toggleCart: () =>
//     set((state) => ({
//       cartOpen: !state.cartOpen,
//     })),

//   openCart: () =>
//     set(() => ({
//       cartOpen: true,
//     })),
// }));

"use client";

import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],
  cartOpen: false,

  // Toggle cart drawer
  toggleCart: () =>
    set((state) => ({
      cartOpen: !state.cartOpen,
    })),

  // Explicit open/close
  openCart: () => set({ cartOpen: true }),
  closeCart: () => set({ cartOpen: false }),

  // Add to Cart
  addToCart: (item) =>
    set((state) => {
      const existing = state.cartItems.find((i) => i.id === item.id);

      if (existing) {
        // If item already exists, increase quantity
        return {
          cartItems: state.cartItems.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        };
      }

      // Otherwise add new item
      return {
        cartItems: [...state.cartItems, item],
      };
    }),

  // Increase quantity inside drawer
  increaseQuantity: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

  // Decrease quantity but not below 1
  decreaseQuantity: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),

  // Remove item from cart
  removeItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),

  // Clear cart (optional)
  clearCart: () => set({ cartItems: [] }),
}));

