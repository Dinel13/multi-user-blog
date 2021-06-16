import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { showNotification, hideNotification } from "../../store/uiSlice";
import style from "./Hero.module.css";
import { listSearch } from "../../actions/blog";

export default function Hero() {
  const history = useHistory();
  const dispatch = useDispatch();
  const searchRef = useRef();
  const token = useSelector((state) => state.auth.token);

  const searchSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await listSearch({ search: searchRef.current.value });
      if (data.error) {
        throw data.error;
      }
      searchRef.current.value = "";
      history.push({
        pathname: "/pencarian",
        state: { data: data },
      });
    } catch (error) {
      console.log(error);
      dispatch(
        showNotification({
          status: "error",
          title: "Gagal!!",
          message: error || "Tidak bisa mencari",
          action: null,
        })
      );
      setTimeout(() => dispatch(hideNotification()), 1800);
    }
  };

  return (
    <section className={style.heroBackground}>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-4/5 lg:pl-24 md:pl-16 flex flex-col items-start text-left">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Tuliskan Suaramu
            <br />
            Agar Ceritamu Menjadi Abadi
          </h1>
          <p className="mb-8 leading-relaxed text-gray-100 md:w-3/4 lg:w-2/3">
            Mari mulai abadikan pengetahuan dan pengalaman dengan menulis.
            Jadilah salah-satu dari orang-orang yang akan terus dikenang karena
            karyanya. Karena tulisanmu dapat menjadi inspirasi bagi orang lain.
          </p>
          <div className="flex flex-col justify-center">
            <div className="w-full block">
              <button
                onClick={() => {
                  if (!token) {
                    dispatch(
                      showNotification({
                        status: "error",
                        title: "Kamu belum login",
                        message: "Silahkan login dulu untuk melanjutkan",
                        action: null,
                      })
                    );
                    setTimeout(() => {
                      dispatch(hideNotification());
                      history.push("/login");
                    }, 1800);
                  } else {
                    history.push("/tulis");
                  }
                }}
                className="inline-flex mr-2 py-2 px-4 btn-sec"
              >
                Mulai Menulis
              </button>
              <Link className="inline-flex py-2 px-4 btn-pri" to="/bacaan">
                Mulai Membaca
              </Link>
            </div>
            <p className="text-gray-200 font-medium text-md text-center my-2">
              Atau
            </p>
            <form
              onSubmit={searchSubmit}
              className="flex w-full items-center justify-center p-0 relative mx-auto text-gray-600"
            >
              <input
                className="w-full text-gray-700 bg-gray-200 h-10 px-5 pr-14 rounded-md text-base focus:outline-none"
                type="search"
                name="search"
                ref={searchRef}
                required
                placeholder="Cari tulisan"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 py-2 px-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
