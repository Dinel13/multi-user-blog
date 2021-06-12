import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PaperClipIcon } from "@heroicons/react/solid";

import { logout } from "../store/authSlice";
import { showNotification } from "../store/uiSlice";
import Avatar from "../assets/avatar.png";

export default function MyAccount() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.userId);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/userData/${id}`,
          {
            method: "GET",
          }
        );
        const result = await response.json();
        if (!response.ok) {
          throw new Error("Tidak bisa mendapatkan data user");
        }
        setUser(result.user);
      } catch (error) {
        dispatch(
          showNotification({
            status: "error",
            title: "Gagal masuk",
            message: error.message,
            action: null,
          })
        );
      }
    };
    getUser();
  }, [dispatch, id]);

  return (
    <div className="bg-white w-full md:w-5/6 lg:md-4/6 mx-auto overflow-hidden ">
      <h2 className="text-center text-3xl mt-4 font-medium">My Account</h2>
      {user && (
        <>
          <div className="px-4 py-5 flex items-end sm:px-6">
            <img
              alt="test"
              className="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              style={{ height: "100px", width: "100px" }}
              src={
                user.image
                  ? process.env.REACT_APP_SERVER_URL_IMAGE + "/" + user.image
                  : Avatar
              }
            />
            <div className="sm:mb-1.5">
              <h3 className="text-xl leading-none mb-1.5 mt-1 font-medium text-gray-900">
                {user.publicId}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{user.motto}</p>
            </div>
            <div className="ml-auto">
              <Link
                to={{
                  pathname: "/akunku/update",
                  state: {
                    userData: user,
                  },
                }}
                className="text-gray-100 inline-flex items-center mr-1.5 mb-1.5 sm:mb-0 rounded py-1.5 px-3 bg-pink-600 hover:bg-pink-700"
              >
                Update
              </Link>
              <button
                onClick={() => dispatch(logout())}
                className="text-gray-100  inline-flex items-center rounded py-1.5 px-3 bg-red-700 hover:bg-red-600"
              >
                Log Out
              </button>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Nama Lengkap
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.name}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Nama panggilan
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.nickName}
                </dd>
              </div>
              <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Alamat email
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.email}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Fakultas</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.fakultas}
                </dd>
              </div>
              <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Bio</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.bio}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Modsos lain
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.medsos}
                </dd>
              </div>
              <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Alamat</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.alamat}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Tulisan</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    {user.blog.map((item) => (
                      <li
                        key={item._id}
                        className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                      >
                        <div className="w-0 flex-1 flex items-center">
                          <PaperClipIcon
                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
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
