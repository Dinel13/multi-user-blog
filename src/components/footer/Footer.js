import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-gray-800 body-font border-gray-200 border bg-red-300">
      <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link
            to="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-pink-600 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">SuaraUnhas</span>
          </Link>
          <p className="mt-2 text-sm text-gray-700">
            Tempatnya anak Unhas berbagi suara dan inspirasi
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="sm:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-1.5">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  to="/bacaan/kategori/Kegiatan"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Info Kegiatan
                </Link>
              </li>
              <li>
                <Link
                  to="/bacaan/kategori/Materi Kuliah"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Materi Kuliah
                </Link>
              </li>
              <li>
                <Link
                  to="/bacaan/kategori/Inspirasif"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Inspirasif
                </Link>
              </li>
              <li>
                <Link
                  to="/bacaan/kategori/Kritik"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Kritik
                </Link>
              </li>
              <li>
                <Link
                  to="/bacaan/kategori/Opini"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Opini
                </Link>
              </li>
            </nav>
          </div>
          <div className="sm:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-1.5">
              HALAMAN LAIN
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  to="/tentang-suaraUnhas"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Tentang SuaraUnhas
                </Link>
              </li>
              <li>
                <Link
                  to="/developper"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Tentang Pengembang
                </Link>
              </li>
              <li>
                <Link
                  to="/kritik-saran"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Kritik dan Saran
                </Link>
              </li>
              <li>
                <Link
                  to="/dukung-kami"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Dukung Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/newsletter"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  to="/bantuan"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Bantuan
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-red-500">
        <div className="container mx-auto py-3 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-800 text-sm text-center sm:text-left">
            ©2021 SuaraUnhas by
            <a
              href="https://github.com/Dinel13"
              rel="noreferrer"
              target="_blank"
              className="text-gray-900 ml-1 font-medium"
            >
              dinel
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              href="https://www.instagram.com/salahuddin_hafid/"
              rel="noreferrer"
              target="_blank"
              className="ml-3 text-gray-800"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/salahuddin-hafid/"
              rel="noreferrer"
              target="_blank"
              className="ml-3 text-gray-800"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
