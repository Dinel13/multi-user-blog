import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { showNotification } from "../store/uiSlice";
import PendingButton from "../components/button/PendingButton";
import SubmitFull from "../components/button/SubmitFull";

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const email = useRef();
  const [pending, setPending] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    setPending(true);
    try {
      const respon = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/user/forgot-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email.current.value,
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
          message:
            "Link untuk mereset password berhasil dikirim ke email kamu. Link hanya akan aktif selama 10 menit",
          action: null,
        })
      );
      email.current.value = "";
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
    <div style={{ minHeight: "70vh", padding: "0 10px" }}>
      <div className="w-full max-w-md my-12 p-10 m-auto shadow-lg border-gray-300 border rounded-md bg-gray-100 dark:bg-gray-800">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
          Lupa Password
        </h1>
        <form className="mt-6" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="Email"
              className="block text-gray-800 dark:text-gray-200"
            >
              Email
            </label>
            <input
              ref={email}
              type="email"
              required
              className="required block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="mt-4">
            {pending ? <PendingButton /> : <SubmitFull text="Kirim" />}
          </div>
        </form>
      </div>
    </div>
  );
}
