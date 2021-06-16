import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import PendingButton from "../components/button/PendingButton";
import SubmitFull from "../components/button/SubmitFull";
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
    <div className="form-card dark:bg-gray-800">
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
              className="text-xs text-indigo-600 dark:text-gray-400 hover:underline"
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
          {pending ? <PendingButton /> : <SubmitFull text="Masuk" />}
        </div>
      </form>

      <p className="mt-8 text-sm font-light text-center text-gray-700">
        Belum Punya Akun?{" "}
        <Link
          to="/daftar"
          className="font-medium text-indigo-600 dark:text-gray-200 hover:underline"
        >
          DAFTAR
        </Link>
      </p>
    </div>
  );
}
