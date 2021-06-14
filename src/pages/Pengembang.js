import React from "react";

import Unhas from "../assets/unhas.jpg";

export default function Pengembang() {
  return (
    <section class="text-gray-600 body-font">
      <h1 class=" sm:text-4xl text-center mt-8 text-3xl font-medium block text-gray-900">
        Orang dibelakang SuaraUnhas
      </h1>
      <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={Unhas}
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
            Wadah Mahasiswa, <br class="hidden lg:inline-block" />
            Mahasiswa Universitas Hasanuddin
          </h1>
          <p class="mb-8 leading-relaxed">
            Suara unhas adalah sebuah media sosial. Dikembangkan untuk mehadahi
            Mahasiswa khususnya mahasiswa unhas dibidang karya tulis. Media ini
            kami harapkan menjadi wadah mahasiswa untuk merepresentasikan
            dirinya. yaitu sebagai mahasiswa yang penuh akan ide dan gagasan.
            mahasiswa yang menghasilkan karya yang mengispiorasi bagi sesamanya.
            sehiangga ia dapat mengabadikan karyanya dalam ingatan orang lain
          </p>
        </div>
      </div>
    </section>
  );
}
