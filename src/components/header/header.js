import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const [offset, setOffset] = useState(0);
  const name = useSelector((state) => state.auth.name);
  useEffect(() => {
    //to get value of scrool
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  const clickMenu = () => {
    const navItem = document.getElementById("nav-item");
    if (navItem.classList.contains("flex")) {
      navItem.classList.remove("flex");
      navItem.classList.add("lg:flex");
      navItem.classList.add("hidden");
    } else {
      navItem.classList.add("flex");
      navItem.classList.remove("lg:flex");
      navItem.classList.remove("hidden");
    }
  };

  return (
    <header
      className={`text-gray-600 body-font shadow-lg border-gray-900 sticky top-0 w-full z-10 ${
        offset > 10.58 ? "bg-gray-100" : "bg-red-500"
      }`}
    >
      <div
        className={`flex items-center justify-between flex-wrap ${
          offset > 10 ? "p-3" : "p-4"
        }`}
      >
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-pink-700 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-2 text-2xl text-gray-800">SuaraUnhas</span>
        </Link>
        <div className="block md:hidden" onClick={clickMenu}>
          <button className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600 hover:text-gray-700 hover:border-3 hover:border-gray-700">
            <svg
              className="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <nav
          className="w-full flex-grow md:items-center md:w-auto hidden md:flex ml-2"
          id="nav-item"
        >
          <div className="flex-grow">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-gray-800  mr-4"
            >
              Beranda
            </Link>
            <Link
              to="/tulis"
              className="block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-gray-800  mr-4"
            >
              Tulis
            </Link>
            <Link
              to="/bacaan"
              className="block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-gray-800  mr-4"
            >
              Baca
            </Link>
          </div>
          {name ? (
            <div className="flex items-end">
              <Link
                to="/akunku"
                className="inline-flex items-center text-sm mr-2 p-2 leading-none mt-4 md:mt-0 border border-transparent rounded text-gray-50 bg-pink-700 hover:bg-pink-600 hover:text-gray-900  "
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 mr-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Akunku
              </Link>
            </div>
          ) : (
            <div className="flex items-end">
              <Link
                to="/daftar"
                className="inline-flex items-center text-sm mr-1.5 p-2 leading-none mt-0 border bg-transparent border-gray-800 rounded text-gray-800  hover:bg-pink-600 hover:text-gray-50 hover:border-pink-600  "
              >
                Daftar
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </Link>
              <Link
                to="/masuk"
                className="inline-flex items-center text-sm  p-2 leading-none mt-0 border border-transparent rounded text-gray-50 bg-pink-700 hover:bg-pink-600 hover:text-gray-900  "
              >
                Masuk
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
