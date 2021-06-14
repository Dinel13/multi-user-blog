import React, { useRef } from "react";

export default function Newsletter() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const submitHandler = () => {};
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Newsletter
          </h1>
          <p className="lg:w-1/2 md:w-2/3 text-left mx-auto leading-relaxed text-base">
            Dengan berlanganan newsletter kami, kamu akan mendapatkan informasi
            terbaru dari kami. Informasi ini dapat berupa tulisan dari mahasiswa
            lain, saran atau tentang perbaikan dari website ini.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={submitHandler} className="flex flex-wrap -m-2">
            <div className="p-2 w-1/3">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-700"
                >
                  Nama
                </label>
                <input
                  type="text"
                  required
                  ref={nameRef}
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-2/3">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  ref={emailRef}
                  name="email"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex ml-0 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
              >
                Berlanganan
              </button>
            </div>
            <small className="pl-2 text-xs italic">
              Kamu dapat membatalkan langganan newsletter kapan saja.
            </small>
          </form>
        </div>
      </div>
    </section>
  );
}
