import React from "react";
import { Link } from "react-router-dom";

export default function Penulis(props) {
    const {name, fakultas, id, blog , image} = props.penulis
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full ">
      <div className="h-full flex items-center border-gray-300 shadow-lg border p-4 rounded-lg">
        <img
          alt={name}
          className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src={image ? image : "https://avatars.githubusercontent.com/u/54769734?v=4"}
        //   https://dummyimage.com/98x98
        />
        <div className="flex-grow sm:pl-4">
          <h2 className="title-font font-medium text-lg text-gray-900">
            {name}
          </h2>
          <h3 className="text-gray-500 mb-3">{fakultas}</h3>
          <div className="flex items-center flex-wrap ">
            <Link
              to={`/Penulis/${id}`}
              className="text-gray-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-gray-700 font-bold"
            >
              Selengkapnya
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="text-gray-500 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pl-3 py-1 border-l-2 border-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
              </svg>
              <span className="ml-1 font-medium" >{blog}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
