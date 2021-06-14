import React from "react";
import { Link } from "react-router-dom";

import Unhas from "../assets/unhas.jpg";

export default function TentangKami() {
  return (
    <section class="text-gray-600 body-font bg-gray-100">
      <h1 class="pt-12 text-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider text-gray-900 -mb-6">
        Apa itu SuaraUnhas
      </h1>
      <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center md:items-start">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={Unhas}
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
            Wadah Mahasiswa, <br class="hidden lg:inline-block" />
            <span className="text-gray-700">
              Mahasiswa Universitas Hasanuddin
            </span>
          </h1>
          <p class="mb-8 leading-relaxed text-gray-700">
            SuaraUnhas adalah sebuah media sosial. Dikembangkan untuk Mahasiswa
            unhas dalam hal literasi. Media ini kami harapkan menjadi wadah bagi
            mahasiswa untuk menyurakan atau merepresentasikan dirinya. Karena
            sebagai mahasiswa yang niscaya kaya akan ide dan gagasan, pasti
            memerlukan media untuk penyaluran. Sebagaimana pelukis membutuhkan
            kanvas maka SuaraUnhas ini dikembangkan untuk manjadi kanvasnya
            mahasiswa kreatif.
            <br />
            <br />
            Di SuaraUnhas kamu dapat menuliskan karyamu di halaman{" "}
            <Link to="/tulis" className="text-indigo-600 font-bold">
              Menulis{" "}
            </Link>
            . Kamu juga dapat membaca karya mahasiswa lain di halaman{" "}
            <Link to="/baca" className="text-indigo-600 font-bold">
              Menbaca{" "}
            </Link>
            . SuaraUnhas dikembangkan khusus bagi mahasiswa Universitas
            Hasanuddin. Jadi, untuk dapat menulis disini kamu harus mendaftar
            mengunakan email kampus yang memiliki domain{" "}
            <span className="italic font-semibold">"@student.unhas.ac.id"</span>
            . Email tersebut bisa didapatkan dari website{" "}
            <a
              className="text-indigo-600 font-bold"
              href="https://sso.unhas.ac.id/index.php"
              rel="noreferrer"
              target="_blank"
            >
              SSO Unhas{" "}
            </a>
            . Namun jika kamu hanya ini memabaca maka kamu tidak harus memiliki
            akun terlebih dahulu.
          </p>
        </div>
      </div>
    </section>
  );
}
