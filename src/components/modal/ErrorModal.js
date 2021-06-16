import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function ErrorModal() {
  const notification = useSelector((state) => state.ui.notification);
  const [showModal, setShowModal] = useState(null);
  const [modal, setModal] = useState(null);

  React.useEffect(() => {
    setShowModal(notification);
    setModal(document.getElementById("yakin"));

    // to alwys hidden modal if no click the yakin
    window.onclick = function (event) {
      if (event.target === modal) {
      } else {
        setShowModal(null);
      }
    };
  }, [notification, modal]);

  React.useEffect(() => {
    let timer;
    if (showModal && notification && notification.status !== "confirm") {
      timer = setTimeout(() => setShowModal(null), 3000);
    }
    return () => clearTimeout(timer);
  }, [notification, showModal]);

  return (
    <>
      {notification && showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto py-5 max-w-3xl">
              <div
                style={{ minWidth: "300px", maxWidth: "380px" }}
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
              >
                <div className="flex items-start justify-between p-4 bg-red-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    {notification.title}
                  </h3>
                </div>
                <div className="relative p-4 flex-auto">
                  <p className="my-3 text-gray-800 text-lg leading-relaxed">
                    {notification.message}
                  </p>
                </div>
                {/* jika notif adalah confirm atau selainnya */}
                {notification.status === "confirm" ? (
                  <div className="flex items-center justify-end p-3.5 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="btn-pri font-medium uppercase text-sm px-6 py-2 mr-2"
                      type="button"
                      onClick={() => setShowModal(null)}
                    >
                      Batal
                    </button>
                    <button
                      id="yakin"
                      className="btn-sec font-medium uppercase text-sm px-6 py-2"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        notification.action();
                      }}
                    >
                      Yakin
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-end p-3.5 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="btn-pri font-medium uppercase text-sm px-6 py-2"
                      type="button"
                      onClick={() => setShowModal(null)}
                    >
                      Tutup
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
