import React from "react";
import { useParams, Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

import Avatar from "../assets/avatar.png";
// import { showNotification } from "../store/uiSlice";

export default function Penulis() {
  // const dispatch = useDispatch();
  const params = useParams();
  const [userData, setUserData] = React.useState(null);
  const id = params.id;

  React.useEffect(() => {
    const fetchToBackend = async () => {
      const getUserData = async () => {
        const respon = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/user/${id}`,
          { method: "GET" }
        );

        const data = await respon.json();
        if (!respon.ok) {
          throw new Error(data.message || "Tidak bisa meload penulis");
        }
        return data;
      };
      try {
        const data = await getUserData();
        setUserData(data.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchToBackend();
  }, [id]);

  return (
    <div className="bg-white w-full md:w-5/6 lg:md-4/6 mx-auto overflow-hidden ">
      <h2 className="text-center text-3xl mt-4 font-medium">Tentang Penulis</h2>
      {userData && (
        <>
          <div className="px-4 py-5 flex items-end sm:px-6">
            <img
              alt="test"
              className="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              style={{ height: "100px", width: "100px" }}
              src={
                userData.image
                  ? process.env.REACT_APP_SERVER_URL_IMAGE +
                    "/" +
                    userData.image
                  : Avatar
              }
            />
            <div className="sm:mb-1.5">
              <h3 className="text-xl leading-none mb-1.5 mt-1 font-medium text-gray-900">
                {userData.publicId}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{userData.motto}</p>
            </div>
            {/* <div className="ml-auto">
              <button
                onClick={() =>
                  dispatch(
                    showNotification({
                      status: "error",
                      title: "Belum bisa",
                      message: "fungsi ini masih sementara dibuat",
                      action: null,
                    })
                  )
                }
                className="text-gray-100 inline-flex items-center sm:mb-0 rounded py-1.5 px-3 bg-pink-600 hover:bg-pink-700"
              >
                Ikuti
              </button>
            </div> */}
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Nama Lengkap
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userData.name}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Nama panggilan
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userData.nickName}
                </dd>
              </div>
              <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Alamat email
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userData.email}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Fakultas</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userData.fakultas}
                </dd>
              </div>
              <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Modsos lain
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userData.medsos}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Alamat</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userData.alamat}
                </dd>
              </div>
              <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Bio</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userData.bio}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Tulisan</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    {userData.blog.map((item) => (
                      <li
                        key={item._id}
                        className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                      >
                        <div className="w-0 flex-1 flex items-center">
                          <span className="ml-2 flex-1 w-0 truncate">
                            {item.title}
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <Link
                            to={`/bacaan/${item.slug}`}
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Lihat
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </>
      )}
    </div>
  );
}
