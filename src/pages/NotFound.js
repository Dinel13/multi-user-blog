import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="w-screen py-28 bg-gray-100 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Halaman ini tidak ditemukan.
          </p>
          <p className="mb-8">
            Tapi jangan khawatir, kamu dapat menemukan banyak hal lainya dari
            halaman beranda kami{" "}
          </p>

          <Link to="/" className="px-4 py-2 font-medium leading-5 btn-pri">
            kembali ke beranda
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
