import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import PendingButton from "../components/button/PendingButton";
import SubmitFull from "../components/button/SubmitFull";

import { signup } from "../store/authAction";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const [pending, setPending] = useState(null);

  const onSuccesSingup = () => {
    setPending(false);
    setTimeout(() => history.push("/"), 2000);
  };

  const onFailSignup = () => setPending(false);

  const singupHandler = (event) => {
    event.preventDefault();
    setPending(true);
    dispatch(
      signup(
        email.current.value,
        name.current.value,
        password.current.value,
        onSuccesSingup,
        onFailSignup
      )
    );
  };

  return (
    <div className="form-card dark:bg-gray-800">
      <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
        Daftar SuaraUnhas
      </h1>
      <form className="mt-6" onSubmit={singupHandler}>
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
            placeholder="namaku@student.unhas.ac.id"
            required
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
          <p className="text-sm text-gray-500">
            Harus mengunakan email domain unhas
          </p>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="userName"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Nama Lengkap
            </label>
          </div>
          <input
            ref={name}
            type="text"
            placeholder="namaku"
            id="userName"
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
          </div>
          <input
            ref={password}
            required
            type="password"
            id="password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div className="mt-6">
          {pending ? <PendingButton /> : <SubmitFull text="Daftar" />}
        </div>
      </form>

      <p className="mt-6 -mb-2 text-sm font-light text-center text-gray-700">
        Sudah Punya Akun?{" "}
        <Link
          to="/masuk"
          className="font-medium text-indigo-600 dark:text-gray-200 hover:underline"
        >
          MASUK
        </Link>
      </p>
    </div>
  );
}
