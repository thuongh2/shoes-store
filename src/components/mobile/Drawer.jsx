import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Drawer({ children, isOpen, setIsOpen }) {

  return (
    <main
      className={
        " fixed z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 -translate-x-0  "
          : " transition-all delay-500 opacity-0 -translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-[40%] left-0 absolute bg-white h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " -translate-x-0 " : " -translate-x-full ")
        }
      >
        <article className="relative max-w-md pb-10 flex flex-col space-y-6 h-screen">
          <header className="p-4 font-bold text-lg self-end">
            <AiOutlineClose
              size={20}
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </header>
          {children}
        </article>
      </section>
      <section
        className="w-screen h-screen cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
