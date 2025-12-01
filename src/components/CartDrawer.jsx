"use client";

import Link from "next/link";

export default function CartDrawer({ isOpen, toggleCart, cartItems }) {
  return (
    <>
      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={toggleCart} className="text-xl font-bold">
            ×
          </button>
        </div>

        <div className="p-4 flex flex-col gap-4 overflow-y-auto h-full">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))
          )}

          <div className="mt-auto">
            <Link
              href="/checkout"
              className="block w-full text-center bg-cyan-950 text-white py-2 rounded hover:bg-black transition"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30"
          onClick={toggleCart}
        ></div>
      )}
    </>
  );
}
