import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState, useEffect } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { GoEyeClosed } from "react-icons/go";
import { BsBagPlusFill } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import { FaMinusCircle, FaPlusCircle, FaUserCircle } from "react-icons/fa";
import PagesSidebar from "./PagesSidebar";
import Cart from "./cart";
const Navbar = ({
  cart,
  clearCart,
  removeOneItem,
  addToCart,
  user,
  logout,
  toggleCart,
  sideCart,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const [cartIcon, setCartIcon] = useState(true);
  const [cartRef, setCartRef] = useState(null);
  const [pagessidebarRef, setPagessidebarRef] = useState(null);
  const ref = useRef();

  const router = useRouter();
  const onmouseover = () => {
    setDropdown(true);
  };
  const onmouseleave = () => {
    setDropdown(false);
  };

  const onclick = () => {
    setDropdown(true);
  };
  useEffect(() => {
    if (
      router.pathname == "/orders" ||
      router.pathname == "/checkout" ||
      router.pathname == "/buynow" ||
      router.pathname == "/login" ||
      router.pathname == "/signup" ||
      router.pathname == "/forgot" ||
      router.pathname == "/order"
    ) {
      setCartIcon(false);
    } else {
      setCartIcon(true);
    }
  }, [router.query]);

  // Pages Sidebar togggle function
  const handlePagesSidebar = () => {
    pagessidebarRef.current.classList.toggle("-translate-x-full");
  };

  // cart toggle 
  const handleCart = () => {
    cartRef.current.classList.toggle("translate-x-full");
  };

  return (
    <>
      <header
        className={`text-gray-400  bg-gray-900 body-font ${
          !sideCart && "overflow-hidden"
        }   border-b-2 border-slate-700 shadow-gray-900 shadow-md`}
      >
        <div className="md:w-full container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center text-white ">
            <img className="h-14 invert" src="/logo.png" alt="Logo" />
            <Link href={"/"}>
              <span className="text-xl cursor-pointer">ROOTCHOICE</span>
            </Link>
          </a>
          <nav className="hidden flex-col md:flex-row md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 lg:flex flex-wrap items-center text-base justify-center ">
            <Link href={"/"}>
              <a className="mr-5 hover:text-white font-bold cursor-pointer">
                Home
              </a>
            </Link>
            <Link href={"/tshirts"}>
              <a className="mr-5 hover:text-white font-bold cursor-pointer">
                Tshirts
              </a>
            </Link>
            <Link href={"/hoodes"}>
              <a className="mr-5 hover:text-white font-bold cursor-pointer">
                Hoodies
              </a>
            </Link>
            <Link href={"/mugs"}>
              <a className="mr-5 hover:text-white font-bold cursor-pointer">
                Mugs
              </a>
            </Link>
            <Link href={"/stickers"}>
              <a className="mr-5 hover:text-white font-bold cursor-pointer">
                Stickers
              </a>
            </Link>
            <Link href={"/about"}>
              <a className="mr-5 hover:text-white font-bold cursor-pointer">
                About us
              </a>
            </Link>
          </nav>

          <div className="flex items-center z-50">
            {dropdown && (
              <div
                onMouseOver={onmouseover}
                onMouseLeave={onmouseleave}
                className="flex justify-center text-center absolute top-40 right-44 sm:top-16 sm:right-20  bg-gray-900 text-white border-2 border-gray-500 rounded-l-lg rounded-b-lg px-4 py-3"
              >
                <div className="flex flex-col">
                  <span className="mb-2 font-bold border-b-2 border-gray-700 text-gray-400 hover:text-white ">
                    <Link href={"/account"}>
                      <a>My Account</a>
                    </Link>
                  </span>
                  <span className="mb-2  font-bold border-b-2 border-gray-700 text-gray-400 hover:text-white">
                    <Link href={"/orders"}>
                      <a>Orders</a>
                    </Link>
                  </span>
                  <span className="mb-2 font-bold  border-b-2 border-gray-700 text-gray-400 hover:text-white">
                    <Link href={"/seller"}>
                      <a>Switch to Selling</a>
                    </Link>
                  </span>
                  <span
                    onClick={logout}
                    className="mb-2 font-extrabold  border-b-2 border-gray-700 text-gray-400 hover:text-white"
                  >
                    <Link href={"/"}>
                      <a>Logout</a>
                    </Link>
                  </span>
                </div>
              </div>
            )}
            {user.value !== null ? (
              <a>
                <FaUserCircle
                  onClick={onclick}
                  className="text-2xl mr-3 cursor-pointer  "
                />
              </a>
            ) : (
              <Link href={"/login"}>
                <button className="hidden lg:flex ml-auto mr-3 bg-transparent text-xl font-extrabold underline  hover:text-white border-0 py-2 px-3 focus:outline-none active:bg-gray-600 rounded">
                  Login
                </button>
              </Link>
            )}
            {cartIcon && (
              <GiShoppingCart
                onClick={() => {
                  // toggleCart();
                  handleCart();
                }}
                className="hidden lg:flex text-3xl hover:text-white cursor-pointer"
              />
            )}
            <span className="lg:hidden">
              <CiMenuFries
                id="hamburgerIcon"
                className="ml-5 text-2xl"
                onClick={handlePagesSidebar}
              />
            </span>
          </div>
        </div>
        <div></div>
      </header>

      <div
        ref={ref}
        className={`pb-20 z-50 ${
          cart !== undefined && cart !== null && cart.length >= 6
            ? "overflow-y-scroll"
            : ""
        } border-2 sidebar transition-all   text-gray-400 bg-gray-900  border-gray-500 rounded-lg absolute top-0 ${
          sideCart ? "right-0 " : "hidden"
        } w-72 md:w-96 h-[50rem]`}
      >
        <div className="border-b-2 py-6 border-gray-500 ">
          <h1 className="text-xl text-center text-white font-extrabold mt-5">
            Your Cart
          </h1>
          <GoEyeClosed
            onClick={toggleCart}
            className="transition-all ease-in-out-quart duration-500 text-white absolute top-7 mt-5 mr-10 text-xl cursor-pointer right-2"
          />
        </div>
        
      </div>

      {/* ///////////////////////////////////////// */}
      <PagesSidebar
        handlePagesSidebar={handlePagesSidebar}
        setPagessidebarRef={setPagessidebarRef}
      />

      <Cart handleCart={handleCart} setCartRef={setCartRef} />
    </>
  );
};

export default Navbar;
