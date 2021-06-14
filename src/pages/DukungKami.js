import React from "react";
import { Link } from "react-router-dom";

export default function DukungKami() {
  return (
    <section className="text-gray-600 body-font bg-gray-100">
      <div className="container px-5 py-16 mx-auto flex flex-wrap">
        <div className="mx-auto md:w-2/3 lg:w-8/12 mb-4">
          <h1 class=" text-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider text-gray-900 mb-6">
            Dukung pengembang SuaraUnhas
          </h1>
          <p className="text-left text-lg text-gray-800">
            Kamu bisa mendukung SuaraUnhas dengan banyak cara. Sesuai dengan
            kemampuan yang kamu miliki. Beberapa caranya adalah seperti berikut
          </p>
        </div>
        <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-2 title-font font-medium text-sm">
            1
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                Menulisa Kode
              </h2>
              <p className="leading-relaxed">
                Bantu SuaraUnhas dengan bersama-sama menulis dan memperbaiki{" "}
                <a
                  className="text-indigo-600 font-bold"
                  href="https://github.com/Dinel13/multi-user-blog"
                  rel="noreferrer"
                  target="_blank"
                >
                  sumber kode{" "}
                </a>
                . Saat ini SauraUnhas mengunakan pustaka ReactJS, Express,
                NodeJS, MonggoDB, Redux , Tailwind dan beberapa lainya.
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-2 title-font font-medium text-sm">
            2
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                Sumbangan dana
              </h2>
              <p className="leading-relaxed">
                SuaraUnhas membutuhkan dana untuk biaya sewa dan pemeliharaan
                server, hosting maupun domain. Sumbangan dana sekecil apapun
                dari kamu akan sangat membantu kami untuk terus berkembang.
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-2 title-font font-medium text-sm">
            3
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                Kritik dan saran
              </h2>
              <p className="leading-relaxed">
                <Link to="/kritik-saran " className="text-indigo-600 font-bold">
                  Kritik atau saran
                </Link>{" "}
                yang membangun juga adalah bentuk dukungan yang sangat berarti
                bagi kami. Karena sebagai penguna suaraUnhas maka kamulah yang
                paling tahu apa yang masih harus kami perbaiki
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-2 title-font font-medium text-sm">
            4
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                Menulis dan Bagikan
              </h2>
              <p className="leading-relaxed">
                Terakhir, mari mulai{" "}
                <Link to="/kritik-saran " className="text-indigo-600 font-bold">
                  menulis
                </Link>{" "}
                dan bagikan karya terbaik kamu di suaraUnhas. karena semakin
                banyak kamu menulis dan membagikan karyamu berati juga semakin
                banyak orang yang dapat memanfaatkan SuaraUnhas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
