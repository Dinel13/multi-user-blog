export default function Hero() {
  return (
    <section className="text-gray-600 body-font  bg-pink-300">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Bagikan Pengetahuanmu
            <br className="hidden lg:inline-block" />
            Agar Dirimu Menajadi Abadi
          </h1>
          <p className="mb-8 leading-relaxed">
            Mari mulai abadikan pengethuan dan pengalaman dengan menulis.
            Jadilah salah-satu dari orang-orang yang akan terus dikenang karena
            karyanya. Karena tulisanmu dapat menjadi inspirasi bagi orang lain.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
              Mulai Menulis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
