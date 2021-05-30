import React from 'react'

import Penulis from "../penulis/Penulis";

export default function PenulisPop() {
  const [penulisData, setPenulisData] = React.useState(null);

  React.useEffect(() => {
    const getTulisanPop = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/user/populer`,
        { method: "GET" }
      );
      const data = res.json();
      if (!res.ok) {
        throw new Error(data.message || "gagal meload penulis populer");
      }
      try {
        const data = await getTulisanPop();
        setPenulisData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTulisanPop();
  }, []);

  const fake =[
    {name : "udin", fakultas : "teknik", blog : "6" ,id :5},
    {name : "udindas", fakultas : "kesmas", blog : "9", id :7},
    {name : "udin da", fakultas : "hukum", blog : "2", id :8},
  ]

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Penulis Populer
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Kamu bisa saja tidak melakukan apa-apa tapi jangan iri ketika yang
            berkarya kini telah menuai hasilnya.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 pb-10">
          {!fake ? (
            <h3 className="sm:text-1xl text-center mx-auto text-xl font-medium mb-24 text-gray-700">
              Belum tersedia tulisan populer
            </h3>
          ) : (
            fake.map((penulis, index) => <Penulis key={index} penulis={penulis} />)
          )}
        </div>
      </div>
    </section>
  );
}
