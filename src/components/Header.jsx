"use client";

import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CartDrawer from "./CartDrawer"; // make sure this exists in /components

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const { isSignedIn } = useUser();
  const router = useRouter();

  // Example cart items — replace with dynamic logic later
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item A", price: 10 },
    { id: 2, name: "Item B", price: 20 },
  ]);

  const showDropdown = () => setDropdown(!dropdown);

  const handleCartClick = () => {
    if (!isSignedIn) {
      router.push("/login"); // redirect guest to login
    } else {
      setCartOpen(!cartOpen); // toggle cart drawer for logged-in users
    }
  };

  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto lg:px-3 w-full">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex items-center">
            <span className="text-4xl font-bold text-primary">Shop</span>
            <span className="text-4xl font-bold"> It</span>
          </div>

          {/* Middle: Desktop Nav */}
          <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <li>
              <Link href="/" className="leading-normal text-cyan-950 text-lg hover:text-black">Home</Link>
            </li>
            <li>
              <Link href="#" className="leading-normal text-cyan-950 text-lg hover:text-black">Gallery</Link>
            </li>
            <li>
              <Link href="#" className="leading-normal text-cyan-950 text-lg hover:text-black">Category</Link>
            </li>
            <li>
              <Link href="#" className="leading-normal text-cyan-950 text-lg hover:text-black">Products</Link>
            </li>
          </ul>

          {/* Right: Cart + User + Wishlist */}
          <div className="flex gap-4 items-center max-lg:hidden">
            {/* Cart icon */}
            <div className="relative">
              <FaShoppingCart
                className="text-2xl text-cyan-950 hover:text-black cursor-pointer"
                onClick={handleCartClick}
              />
              {isSignedIn && cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  {cartItems.length}
                </span>
              )}
            </div>

            {/* User icon */}
            <Link href="/login" className="text-2xl text-cyan-950 hover:text-black cursor-pointer">
              <FaUser />
            </Link>

            {/* Heart icon for wishlist */}
            <Link href="/wishlist" className="text-2xl text-cyan-950 hover:text-black cursor-pointer">
              <FaHeart />
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex lg:hidden">
            {dropdown ? (
              <MdClose onClick={showDropdown} className="text-[22px] cursor-pointer text-black" />
            ) : (
              <HiMenuAlt3 onClick={showDropdown} className="text-[22px] cursor-pointer text-black" />
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {dropdown && (
          <div className="lg:hidden w-full fixed top-24 bg-primary transition-all z-40">
            <div className="w-full flex flex-col gap-4">
              <ul className="flex flex-col w-full">
                <li>
                  <Link href="/" className="px-6 h-10 flex items-center text-white font-bold text-lg hover:text-primary border-b border-[#ffffff1a]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/ticket" className="px-6 h-10 flex items-center text-white font-bold text-lg hover:text-primary border-b border-[#ffffff1a]">
                    Ticket
                  </Link>
                </li>
                <li>
                  <Link href="/explore" className="px-6 h-10 flex items-center text-white font-bold text-lg hover:text-primary border-b border-[#ffffff1a]">
                    Explore
                  </Link>
                </li>
                <li>
                  <Link href="/activity" className="px-6 h-10 flex items-center text-white font-bold text-lg hover:text-primary border-b border-[#ffffff1a]">
                    Activity
                  </Link>
                </li>
              </ul>

              {/* Mobile Login / Sign Up Buttons */}
              <div className="flex flex-col gap-2 px-6 py-4">
                <Link
                  href="/login"
                  className="px-4 py-2 bg-transparent border border-white text-white rounded text-center hover:bg-white hover:text-primary transition"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 bg-indigo-700 text-white rounded text-center hover:bg-indigo-800 transition"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        toggleCart={() => setCartOpen(false)}
        cartItems={cartItems}
      />
    </nav>
  );
}
