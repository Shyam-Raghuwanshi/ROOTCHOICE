import React, { useRef, useEffect } from "react";
import { BsBagPlusFill } from "react-icons/bs";
import { FaMinusCircle, FaPlusCircle, FaUserCircle } from "react-icons/fa";
import "flowbite";

import Link from "next/link";
export default function Cart({
  handleCart,
  setCartRef,
  clearCart,
  removeOneItem,
  addToCart,
  user,
  cart,
}) {
  const ref = useRef();
  useEffect(() => {
    ref && setCartRef(ref);
  }, []);

  return (
    <>
      <aside>
        <div
          ref={ref}
          className="fixed top-0 right-0 z-[100] h-screen p-4 overflow-x-auto overflow-x-hidden transition-transform translate-x-full bg-white w-96 dark:bg-gray-900"
          tabIndex="-1"
        >
          <h5
            
            className="text-base font-semibold text-gray-500 dark:text-gray-400"
          >
            Your Cart
          </h5>
          <button
            onClick={handleCart}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <div className="mt-10 px-5 ">
                {cart == null && (
                  <h1 className="text-2xl font-bold">
                    Please login for preview your cart.
                  </h1>
                )}
                <ol className="list-decimal font-thin  text-white">
                  {cart !== undefined && cart !== null && cart.length == 0 && (
                    <div className="w-full flex text-center justify-center text-xl font-semibold">
                      Cart is empty. Please add some items.
                    </div>
                  )}
                  {cart !== undefined &&
                    cart !== null &&
                    cart.map((k) => {
                      return (
                        <li
                          key={k.slug}
                          className="mt-5 border-b-2 h-auto pb-4 border-slate-500 "
                        >
                          <div className="flex flex-row">
                            <div className="ml-2 w-44 font-serif">
                              {k.name} ({k.size}/{k.varient})
                            </div>
                            <div className="flex items-center justify-center text-lg">
                              <FaMinusCircle
                                onClick={() => {
                                  removeOneItem(
                                    k.slug,
                                    k.title,
                                    k.price,
                                    k.name,
                                    k.size,
                                    k.varient
                                  );
                                }}
                                className="ml-20 cursor-pointer"
                              />
                              <span className="pl-3 pr-3">{k.quantity}</span>
                              <FaPlusCircle
                                onClick={() => {
                                  addToCart(
                                    k.email,
                                    k.slug,
                                    k.title,
                                    k.price,
                                    k.name,
                                    k.size,
                                    k.varient,
                                    k.img
                                  );
                                }}
                                className="cursor-pointer"
                              />
                            </div>
                          </div>
                        </li>
                      );
                    })}
                </ol>
              </div>
              <div className="flex w-full  justify-center absolute bottom-2 pt-4">
                {cart !== undefined &&
                user.value != null &&
                cart !== null &&
                cart.length == 0 ? (
                  <button className=" disabled flex mr-2 text-slate-600 bg-slate-800 border-2 border-slate-700  py-2 px-2 active:bg-slate-700  rounded-lg text-lg">
                    <BsBagPlusFill className="mr-2 mt-1" />
                    Checkout
                  </button>
                ) : (
                  <Link href={"/checkout"}>
                    <button className=" flex mr-2 text-white bg-slate-600 border-2 border-slate-400  py-2 px-2 active:bg-slate-700  rounded-lg text-lg">
                      <BsBagPlusFill className="mr-2 mt-1" />
                      Checkout
                    </button>
                  </Link>
                )}

                {cart !== undefined &&
                user.value != null &&
                cart !== null &&
                cart.length == 0 ? (
                  <button
                    disabled
                    onClick={clearCart}
                    className="flex ml-2 text-slate-600 bg-slate-800 border-2 border-slate-700  py-2 px-2  rounded-lg text-lg"
                  >
                    Clear Cart
                  </button>
                ) : (
                  <button
                    onClick={clearCart}
                    className="flex ml-2 text-white bg-slate-600 border-2 border-slate-400  py-2 px-2 active:bg-slate-700  rounded-lg text-lg"
                  >
                    Clear Cart
                  </button>
                )}
              </div>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
