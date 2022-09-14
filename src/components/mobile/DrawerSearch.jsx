import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function DrawerSearch({
  children,
  isOpenSearch,
  setIsOpenSearch,
}) {
  console.log(isOpenSearch);
  return (
    <main
      className={
        " fixed bg-gray-900 bg-opacity-0 inset-0 transform ease-in-out " +
        (isOpenSearch
          ? " transition-opacity opacity-100 duration-500 translate-y-0  "
          : " transition-all delay-500 opacity-0 translate-y-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-screen top-16 absolute bg-white h-fit shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpenSearch ? " translate-y-0" : " translate-y-full")
        }
      >
        <article className="relative max-w-screen pb-10 bg-white flex flex-col space-y-6 h-fit z-0">
          <header className="p-4 mx-6 font-bold text-lg self-end">
            <AiOutlineClose
              size={20}
              onClick={() => {
                setIsOpenSearch(false);
              }}
            />
          </header>
          {children}
        </article>
      </section>
    </main>
  );
}
