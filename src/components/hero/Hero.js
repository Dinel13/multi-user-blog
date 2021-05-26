import style from "./Hero.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className={style.heroBackground}>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-4/5 lg:pl-24 md:pl-16 flex flex-col items-start text-left">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Bagikan Pengetahuanmu
            <br className="hidden lg:inline-block" />
            Agar dirimu Menjadi Abadi
          </h1>
          <p className="mb-8 leading-relaxed text-gray-200 md:w-3/4 lg:w-2/3">
            Mari mulai abadikan pengetahuan dan pengalaman dengan menulis.
            Jadilah salah-satu dari orang-orang yang akan terus dikenang karena
            karyanya. Karena tulisanmu dapat menjadi inspirasi bagi orang lain.
          </p>
          <div className="flex justify-center">
            <Link
              to="tulis"
              className="inline-flex text-white bg-pink-800 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg"
            >
              Mulai Menulis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
