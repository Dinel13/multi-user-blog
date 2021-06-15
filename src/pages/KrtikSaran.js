import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { showNotification } from "../store/uiSlice";
import PendingButton from "../components/button/PendingButton";

export default function KririkSaran() {
  const dispatch = useDispatch();
  const textRef = useRef("");
  const emailRef = useRef("");
  const [pending, setPending] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    setPending(true);
    try {
      const respon = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/other/feedback`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value,
            message: textRef.current.value,
          }),
        }
      );
      const data = await respon.json();
      console.log(data);
      if (!respon.ok) {
        throw new Error(data.message || "Tidak bisa mengirim saran dan kritik");
      }
      setPending(false);
      emailRef.current.value = "";
      textRef.current.value = "";
    } catch (error) {
      console.log(error);
      setPending(false);
      dispatch(
        showNotification({
          status: "confirm",
          title: "Gagal mendapatkan data",
          message: "DSFSDFSDFDSF",
          action: null,
        })
      );
    }
  };
  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?q=Fakultas%20teknik%20Universitas%20Hasanuddin&t=&z=13&ie=UTF8&iwloc=&output=embed"
          style={{ filter: "grayscale(1) contrast(1.5) opacity(0.6)" }}
        ></iframe>
      </div>
      <div className="container px-5 py-16 mx-auto flex">
        <form
          onSubmit={submitHandler}
          className="lg:w-5/12 md:w-4/5 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-2 shadow-md"
        >
          <h2 className="text-gray-900 text-xl  sm:text-2xl md:text-3xl  mb-1 font-bold tracking-wider">
            Kritik dan Saran
          </h2>
          <p className="leading-none mb-5 text-gray-700">
            SuaraUnhas menerima kritik atu saran dari kamu untuk semakin
            memperbaiki layanan kami
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-700">
              Email
            </label>
            <input
              type="email"
              ref={emailRef}
              required
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-700"
            >
              Pesan
            </label>
            <textarea
              ref={textRef}
              required
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          {pending ? (
            <PendingButton />
          ) : (
            <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
              Kirim
            </button>
          )}
          <p className="text-xs leading-none text-gray-500 mt-3">
            kritik atau saran kamu dijaga kerahasianya dan hanya digunakan untuk
            keperluan SuaraUnhas
          </p>
        </form>
      </div>
    </section>
  );
}
