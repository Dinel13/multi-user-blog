import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { showNotification } from "../store/uiSlice";
import PendingButton from "../components/button/PendingButton";
import SubmitFull from "../components/button/SubmitFull";

export default function ResetPassword() {
  const dispatch = useDispatch();
  const [pending, setPending] = useState();
  const password = useRef();
  const passwordConf = useRef();
  const params = useParams();
  const history = useHistory();
  const token = params.token;

  const submitHandler = async (event) => {
    event.preventDefault();
    password.current.value !== passwordConf.current.value &&
      dispatch(
        showNotification({
          status: "error",
          title: "Gagal!!",
          message: "Password konfirmasi harus sama",
          action: null,
        })
      );
    setPending(true);
    try {
      const respon = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/user/reset-password/${token}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            newPassword: password.current.value,
            newPasswordConf: passwordConf.current.value,
          }),
        }
      );
      const data = await respon.json();
      if (!respon.ok) {
        throw new Error(data.message || "Tidak bisa mengirim lupa password");
      }
      setPending(false);
      dispatch(
        showNotification({
          status: "suc",
          title: "Berhasil!!",
          message: "Password berhasil direset, silahkan login kembali",
          action: null,
        })
      );
      setTimeout(() => history.push("/masuk"), 3000);
      password.current.value = "";
      passwordConf.current.value = "";
    } catch (error) {
      setPending(false);
      dispatch(
        showNotification({
          status: "error",
          title: "Gagal!!",
          message: error.message,
          action: null,
        })
      );
    }
  };

  return (
    <div style={{ minHeight: "70vh" }}>
      <div className="form-card dark:bg-gray-800">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
          Reset Password
        </h1>
        <form className="mt-6" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Password Baru
            </label>
            <input
              ref={password}
              type="password"
              required
              className="required block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="passwordConf"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Konfirmasi Password
            </label>
            <input
              ref={passwordConf}
              type="password"
              required
              className="required block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div className="mt-4">
            {pending ? <PendingButton /> : <SubmitFull text="Reset" />}
          </div>
        </form>
      </div>
    </div>
  );
}
