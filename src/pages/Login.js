import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../store/authAction";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const email = useRef();
  const password = useRef();
  const [pending, setPending] = useState(null);

  const onSuccessLogin = () => {
    setPending(false);
    setTimeout(() => history.push("/"), 2000);
  };

  const onFailLogin = () => setPending(false);

  const loginHandler = (event) => {
    event.preventDefault();
    setPending(true);
    dispatch(
      login(
        email.current.value,
        password.current.value,
        onSuccessLogin,
        onFailLogin
      )
    );
  };

  return (
    <div className="w-full max-w-md my-8 p-10 m-auto bg-white border-gray-300 border rounded-md shadow-md dark:bg-gray-800">
      <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
        Masuk ke SuaraUnhas
      </h1>
      <form className="mt-6" onSubmit={loginHandler}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Email
          </label>
          <input
            ref={email}
            type="email"
            id="email"
            required
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Password
            </label>
            <Link
              to="/lupa-password"
              className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
            >
              Lupa Password?
            </Link>
          </div>

          <input
            ref={password}
            type="password"
            id="password"
            required
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div className="mt-6">
          {pending ? (
            <button
              type="button"
              disabled
              className="w-full md:w-4/6 mx-auto lg:w-3/6 flex justify-center items-center px-4 py-3 text-white bg-pink-400 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="animate-spin h-5 w-5 mr-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          ) : (
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-pink-700 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-600"
            >
              Masuk
            </button>
          )}
        </div>
      </form>

      <p className="mt-8 text-sm font-light text-center text-gray-700">
        Belum Punya Akun?{" "}
        <Link
          to="/daftar"
          className="font-medium text-gray-800 dark:text-gray-200 hover:underline"
        >
          DAFTAR
        </Link>
      </p>
    </div>
  );
}
