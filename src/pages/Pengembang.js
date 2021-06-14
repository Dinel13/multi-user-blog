import React from "react";
import { Link } from "react-router-dom";
import Unhas from "../assets/mee.jpg";

export default function Pengembang() {
  return (
    <section class="text-gray-600 body-font bg-gray-200">
      <h1 class="pt-12 text-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider text-gray-900 -mb-2">
        Penggagas SuaraUnhas
      </h1>
      <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
          <img
            class="object-cover object-center rounded-full"
            alt="hero"
            style={{ maxWidth: "500px" }}
            src={Unhas}
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-20 md:pl-14 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
            Salahuddin, <br class="hidden lg:inline-block" />
            <span className="text-gray-700">Teknik Informatika 2018</span>
          </h1>
          <p class="mb-8 leading-relaxed">
            Mengembangkan SuaraUnhas adalah salah-satu upaya saya untuk menjadi
            mahasiswa abadi. Bukan mahasiswa yang tidak lulus-lulus tetapi
            mahasiswa yang usaha dan karyanya bisa abadi. Walaupun karya ini
            mungkin tidak dapat abadi, setidaknya kenangan bahwa saya pernah
            mengembangkan website ini akan tetap abadi.
            <br />
            <br />
            Kami mengundang teman-teman untuk mendukung atau ikut aktif
            membangun website ini. Kamu bisa ikut aktif membangun website ini
            dengan menjadi kontributor{" "}
            <a
              className="text-indigo-600 font-bold"
              href="https://github.com/Dinel13/multi-user-blog"
              rel="noreferrer"
              target="_blank"
            >
              sumber kode{" "}
            </a>
            website ini. Bisa juga mendukung website ini melalui halaman{" "}
            <Link to="/dukung-kami" className="text-indigo-600 font-bold">
              Dukung kami{" "}
            </Link>
            . Kamu juga telah sangat membantu dengan memberi masukan atau kritik
            yang membangun melaui halaman{" "}
            <Link to="/kritik-saran " className="text-indigo-600 font-bold">
              Kritik dan saran
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
