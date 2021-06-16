import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { showNotification } from "../store/uiSlice";

import PendingButton from "../components/button/PendingButton";
import SubmitFull from "../components/button/SubmitFull";
import Un from "../assets/jk.jpg";

export default function Bantuan() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const pesanRef = useRef("");
  const dispatch = useDispatch();
  const [pending, setPending] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    setPending(true);
    try {
      const respon = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/other/help`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value,
            name: nameRef.current.value,
            message: pesanRef.current.value,
          }),
        }
      );
      const data = await respon.json();
      if (!respon.ok) {
        throw new Error(data.message || "Tidak bisa mengirim bantuan");
      }
      setPending(false);
      emailRef.current.value = "";
      nameRef.current.value = "";
      pesanRef.current.value = "";
      dispatch(
        showNotification({
          status: "suc",
          title: "Berhasil !!",
          message: data.message,
          action: null,
        })
      );
    } catch (error) {
      console.log(error);
      setPending(false);
      dispatch(
        showNotification({
          status: "",
          title: "Gagal !!",
          message: error.message,
          action: null,
        })
      );
    }
  };
  return (
    <section className="lg:py-8  relative">
      <div className="xl:mx-auto xl:container  relative ">
        <h1 className="text-center font-medium text-5xl px-1 my-8">
          Pusat Bantuan SuaraUnhas
        </h1>
        <div className="flex flex-wrap xl:mx-auto xl:container">
          <div className="w-full relative lg:w-1/2 p-8 bg-gray-900">
            <img
              src={Un}
              className="h-full w-full absolute inset-0 object-cover object-center block opacity-40"
              alt="map"
            />
            <div className="w-full flex flex-col items-start   xl:justify-start  relative z-2 xl:px-0 px-4 xl:py-0 py-4">
              <div className="w-full 2xl:pl-48 xl:pt-1">
                <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-white">
                  Kami disini
                </h1>
                <div className="w-full md:w-10/12 mt-3">
                  <h2 className="text-gray-100 text-base md:text-lg leading-8 tracking-wider">
                    Kami percaya inovasi digital dalam hasil dari kolaborasi
                    bersama
                  </h2>
                  <div className="mt-4 md:mt-8">
                    <h2 className="text-lg md:text-xl text-gray-50 font-semibold">
                      Alamat
                    </h2>
                    <h2 className="text-gray-100 text-base md:text-lg leading-8 tracking-wider mt-1">
                      Gedung Elekto, Jl. Poros Malino, Fakultas Teknik
                      Universitas Hasanuddin, Gowa
                    </h2>
                  </div>
                  <div className="mt-4 md:mt-8">
                    <h2 className="text-lg md:text-xl text-gray-50 font-semibold">
                      Contact
                    </h2>
                    <h2 className="text-gray-100 text-base md:text-lg leading-8 tracking-wider mt-1">
                      +62 823 4646 XXXX (Phone)
                    </h2>
                    <h2 className="text-gray-100 text-base md:text-lg leading-8 tracking-wider mt-1">
                      +62 823 4646 XXXX (Wa)
                    </h2>
                  </div>
                  <div className="mt-4 md:mt-8">
                    <h2 className="text-lg md:text-xl text-gray-50 font-semibold">
                      Email
                    </h2>
                    <h2 className="text-gray-100 text-base md:text-lg leading-8 tracking-wider mt-1">
                      suaraunhas@gmail.com
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pt-8 lg:pl-10 bg-gray-100">
            <div className="flex flex-col items-start px-10 md:px-12 lg:pl-8 xl:justify-start 2xl:justify-end xl:px-0 ">
              <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-gray-900">
                Kontak langsung
              </h1>
              <form onSubmit={submitHandler} className="w-full 2xl:w-8/12 mt-3">
                <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">
                  Untuk bantuan juga bisa langsung dengan mengisi form dibawah
                </h2>
                <div className="mt-3 md:mt-6">
                  <p className="text-gray-800 text-base font-medium">Nama</p>
                  <input
                    className="mt-2 text-base border w-11/12 lg:w-full xl:w-10/12 rounded-md hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-4 pl-4 text-gray-800"
                    type="text"
                    required
                    ref={nameRef}
                    placeholder="Nama saya"
                  />
                </div>
                <div className="mt-3 md:mt-6">
                  <p className="text-gray-800 text-base font-medium">
                    Alamat email
                  </p>
                  <input
                    className="mt-2 text-base border w-11/12 lg:w-full xl:w-10/12 rounded-md hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-4 pl-4 text-gray-800"
                    type="email"
                    required
                    ref={emailRef}
                    placeholder="example@mail.com"
                  />
                </div>
                <div className="mt-3 md:mt-6">
                  <p className="text-gray-800 text-base font-medium">Pesan</p>
                  <textarea
                    className="mt-2 text-base border w-11/12 lg:w-full xl:w-10/12 rounded-md hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-4 pl-4 text-gray-800"
                    type="text"
                    required
                    ref={pesanRef}
                    placeholder="Tulis sesuatu disini..."
                    defaultValue={""}
                  />
                </div>
                <div className="py-5 w-11/12 lg:w-full xl:w-10/12">
                  {pending ? <PendingButton /> : <SubmitFull text="kirim" />}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
