"use client";

import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto lg:px-3 w-full">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
          <img
    src="/images/bolt.svg"
    alt="Sparkies Logo"
    className="w-16 h-16 "
  />
            
            <span className="text-4xl font-bold text-[#d4040a] ml-4">Sparkies</span>
            <span className="text-4xl font-bold "> Loans</span>
          </div>

          <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <li>
              <Link href="/" className="leading-normal no-underline text-cyan-950  text-lg hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="leading-normal no-underline text-cyan-950  text-lg hover:text-black">
                How it works
              </Link>
            </li>
            <li>
              <Link href="#" className="leading-normal no-underline text-cyan-950  text-lg hover:text-black">
                Loan Types
              </Link>
            </li>
            <li>
              <Link href="/store/products" className="leading-normal no-underline text-cyan-950  text-lg hover:text-black">
               Why Trust Us
              </Link>
            </li>
            <li>
              <Link href="/store/products" className="leading-normal no-underline text-cyan-950  text-lg hover:text-black">
                Success Stories
              </Link>
            </li>
            <li>
              <Link href="/store/products" className="leading-normal no-underline text-cyan-950  text-lg hover:text-black">
                FAQ
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="flex gap-4 max-lg:hidden">
            {dropdown ? (
              <div onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer text-black">
                <MdClose />
              </div>
            ) : (
              <div onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer text-black">
                <HiMenuAlt3 />
              </div>
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {dropdown && (
          <div className="lg:hidden w-full fixed top-24 bg-primary transition-all">
            <div className="w-full flex flex-col items-baseline gap-4">
              <ul className="flex flex-col justify-center w-full">
                <li>
                  <Link href="/" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/ticket" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">
                    Ticket
                  </Link>
                </li>
                <li>
                  <Link href="/explore" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">
                    Explore
                  </Link>
                </li>
                <li>
                  <Link href="/activity" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">
                    Activity
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
