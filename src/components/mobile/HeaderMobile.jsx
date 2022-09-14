import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import DrawerSearch from "./DrawerSearch";

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  return (
    <div className="h-[74px] w-full bg-white z-40 drop-shadow-lg">
      <div className="flex items-center min-w-full justify-between h-full px-3">
        {/* logo end category */}
        <div className="flex w-full gap-2 justify-between">
          {/* image logo */}
          <div className="">
            <AiOutlineBars size={25} onClick={() => setIsOpen(true)} />
          </div>
          {isOpen ? (
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <div className="px-5 hover:cursor-pointer">
                <ul className="flex flex-col gap-6 text-base">
                  <Link to="/search/sales">
                    <li className="hover:cursor-pointer hover:text-cyan-700 transition">
                      Sales
                    </li>
                  </Link>
                  <Link to="/search/sales">
                    <li className="hover:cursor-pointer hover:text-cyan-700 transition">
                      Sneakers
                    </li>
                  </Link>
                  <Link to="/search/sales">
                    <li className="hover:cursor-pointer hover:text-cyan-700 transition">
                      Shoes
                    </li>
                  </Link>
                  <Link to="/search/sales">
                    <li className="hover:cursor-pointer hover:text-cyan-700 transition">
                      Slippers
                    </li>
                  </Link>
                  <Link to="/search/sales">
                    <li className="hover:cursor-pointer hover:text-cyan-700 transition">
                      Accesories
                    </li>
                  </Link>
                </ul>
              </div>
            </Drawer>
          ) : (
            <></>
          )}
          {/* image logo */}
          <div className="md:px-5 py-1 hover:cursor-pointer">
            <img
              src="https://eu.muroexe.com/img/logo-16394270912.jpg"
              alt="logo"
            />
          </div>
          {/* end */}
          {/* menu icon */}
          <div className="">
            <ul className="flex gap-2 sm:gap-6 hover:cursor-pointer">
              <li>
                <BsSearch size={25} onClick={() => setIsOpenSearch(true)} />
                {isOpenSearch ? (
                  <DrawerSearch
                    isOpenSearch={isOpenSearch}
                    setIsOpenSearch={setIsOpenSearch}
                  >
                    <form className="px-5">
                      <label
                        for="default-search"
                        class="mb-4 text-sm font-medium block"
                      >
                        Search
                      </label>
                      <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          class="block p-4 pl-10 w-full text-sm border focus:outline-none focus:border-blue-500 "
                          placeholder="Search Mockups, Logos..."
                          required
                        />
                        <button
                          type="submit"
                          class="text-white absolute right-2.5 bottom-2.5 bg-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 "
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </DrawerSearch>
                ) : (
                  <></>
                )}
              </li>
              <li>
                <Link to="/login">
                  <FaUserAlt size={25} />
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <FaShoppingCart size={25} />
                </Link>
              </li>
            </ul>
          </div>
          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
