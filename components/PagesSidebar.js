import { useEffect } from "react";
import { useRef } from "react";
import { FaTshirt } from "react-icons/fa";
import { PiHoodieBold } from "react-icons/pi";
import { AiFillHome } from "react-icons/ai";
import { ImCart } from "react-icons/im";
import { FaMugSaucer, FaCircleUser, FaRProject } from "react-icons/fa6";
import { BiSolidSticker } from "react-icons/bi";
import { HiInformationCircle } from "react-icons/hi";
import { IoMdLogOut } from "react-icons/io";
import { RiPagesFill } from "react-icons/ri";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaSignInAlt } from "react-icons/fa";
import { BsPenFill } from "react-icons/bs";
import "flowbite";

import Link from "next/link";
export default function PagesSidebar({
  handlePagesSidebar,
  setPagessidebarRef,
  clearCart,
  removeOneItem,
  addToCart,
  user,
  logout,
  toggleCart,
  sideCart,
}) {
  const ref = useRef();
  useEffect(() => {
    ref && setPagessidebarRef(ref);
  }, []);

  return (
    <>
      <aside>
        <div
          ref={ref}
          id="pages-sidebar"
          className="fixed top-0 left-0 z-[100] h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-gray-900"
          tabIndex="-1"
          aria-labelledby="pages-sidebar-label"
        >
          <h5
            id="pages-sidebar-label"
            className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
          >
            Menu
          </h5>
          <button
            onClick={handlePagesSidebar}
            type="button"
            data-drawer-hide="pages-sidebar"
            aria-controls="pages-sidebar"
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
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <AiFillHome />
                  <span className="ml-3">Home</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown"
                  data-collapse-toggle="dropdown"
                >
                  <RiPagesFill />
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    E-commerce
                  </span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <ul id="dropdown" className="hidden py-2 space-y-2 pl-5">
                  <Link href={"/tshirts"}>
                    <li className="pt-2">
                      <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        {/* <div className="flex justify-center"> */}
                        <FaTshirt />
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          Tshirt
                        </span>
                        {/* </div> */}
                      </div>
                    </li>
                  </Link>
                  <Link href="/hoodies">
                    <li className="pt-2">
                      <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <PiHoodieBold />
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          Hoodies
                        </span>
                      </div>
                    </li>
                  </Link>
                  <Link href="/mugs">
                    <li className="pt-2">
                      <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaMugSaucer />
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          Mugs
                        </span>
                      </div>
                    </li>
                  </Link>
                  <Link href={"/tshirts"}>
                    <li className="pt-2">
                      <div
                        href="/stickers"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <BiSolidSticker />
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          Stickers
                        </span>
                      </div>
                    </li>
                  </Link>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaRProject />
                  <span className="flex-1 ml-3 whitespace-nowrap">VIP's</span>
                  <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Pro
                  </span>
                </a>
              </li>
              <Link href={"/orders"}>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <FaCircleUser />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Profile
                    </span>
                  </a>
                </li>
              </Link>
              <li >
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <ImCart className=" text-white" />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Your Cart
                  </span>
                </div>
              </li>

              <Link href={"/orders"}>
                <li>
                  <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <BsFillBagCheckFill />
                    <span class="flex-1 ml-3 whitespace-nowrap">
                      Your Orders
                    </span>
                  </div>
                </li>
              </Link>
              <Link href={"/login"}>
                <li>
                  <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <FaSignInAlt />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Sign In
                    </span>
                  </div>
                </li>
              </Link>
              <Link href={"/signup"}>
                <li>
                  <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <BsPenFill />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Sign Up
                    </span>
                  </div>
                </li>
              </Link>

              <li onClick={logout}>
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IoMdLogOut />
                  <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                </div>
              </li>

              <Link href={"/about"}>
                <li>
                  <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <HiInformationCircle />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      About us
                    </span>
                  </div>
                </li>
              </Link>
              <Link href={"/contact"}>
                <li>
                  <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <HiInformationCircle />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Contact Us
                    </span>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
