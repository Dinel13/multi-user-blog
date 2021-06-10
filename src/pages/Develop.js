import { Link } from "react-router-dom";
const Develop = () => {
  return (
    <div className="w-screen py-28 bg-gray-100 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold mb-2.5">
            Mohon maaf...
          </div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Halaman ini masih dalam tahap pengembangan.
          </p>
          <p className="mb-8">
            Tapi jangan khawatir, kamu dapat menemukan banyak hal lainya dari
            halaman beranda kami{" "}
          </p>

          <Link
            to="/"
            className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded focus:outline-none focus:shadow-outline-blue bg-pink-600 active:bg-blue-600 hover:bg-pink-700"
          >
            kembali ke beranda
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Develop;
