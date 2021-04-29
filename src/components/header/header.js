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

  return (
    <header
      className={`text-gray-600 body-font shadow-lg border-gray-900 sticky top-0 w-full z-10 ${
        offset > 10 ? "bg-white" : "bg-pink-300"
      } `}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
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
            className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">UnhasTa</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Beranda
          </Link>
          <Link to="/tulis" className="mr-5 hover:text-gray-900">
            Tulis
          </Link>
          <Link to="/baca" className="mr-5 hover:text-gray-900">
            Baca
          </Link>
        </nav>
        {name ? (
          <p>My profile</p>
        ) : (
          <Link
            to="/masuk"
            className="inline-flex items-center bg-pink-700 border-5 py-1 px-3 focus:outline-none hover:bg-pink-900 rounded text-gray-100 mt-4 md:mt-0"
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
        )}
      </div>
    </header>
  );
}
