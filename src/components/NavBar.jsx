import React, { useState } from "react";
import LogoAnandaBlanco from "../assets/LogoAnandaBlanco.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full background-gradiente p-5">
        <div className="w-[90%] mx-auto flex justify-between items-center">
          <div className="flex text-white items-center gap-5">
            <img
              src={LogoAnandaBlanco}
              alt="logo ananda"
              className="w-[50px] h-[65px]"
            />
          </div>
          <div className="flex items-center gap-10">
            <div className="hidden md:flex items-center w-full justify-end gap-10">
              <div className="hover:bg-[#7daa92] hover:text-white flex items-center rounded-full p-2 cursor-pointer shadow-lg">
                <p className="text-lg font-semibold text-white">
                  Quienes somos
                </p>
              </div>
              <div className="hover:bg-[#7daa92] hover:text-white flex items-center rounded-full p-2 cursor-pointer shadow-lg">
                <p className="text-lg font-semibold text-white">Novedades</p>
              </div>
              <div className="hover:bg-[#7daa92] hover:text-white flex items-center rounded-full p-2 cursor-pointer shadow-lg">
                <p className="text-lg font-semibold text-white">Contacto</p>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white text-2xl focus:outline-none"
              >
                {isOpen ? (
                  "X"
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#ffffff"
                      d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden w-[90%] mx-auto mt-5 flex flex-col gap-5">
            <div className="hover:bg-[#7daa92] hover:text-white flex items-center rounded-full p-2 cursor-pointer shadow-lg">
              <p className="text-lg font-semibold text-white">Quienes somos</p>
            </div>
            <div className="hover:bg-[#7daa92] hover:text-white flex items-center rounded-full p-2 cursor-pointer shadow-lg">
              <p className="text-lg font-semibold text-white">Novedades</p>
            </div>
            <div className="hover:bg-[#7daa92] hover:text-white flex items-center rounded-full p-2 cursor-pointer shadow-lg">
              <p className="text-lg font-semibold text-white">Contacto</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
