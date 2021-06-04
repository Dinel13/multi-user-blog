import { authActions } from "./authSlice";
import { uiActions } from "./uiSlice";

export const login = (email, password, successLogin, failLogin) => {
  return async (dispatch) => {
    const loginToBackend = async () => {
      const response = await await fetch(
        `${process.env.REACT_APP_SERVER_URL}/user/login`,
        {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Tidak bisa masuk");
      }
      return result;
    };

    try {
      const result = await loginToBackend();
      console.log(result);
      dispatch(authActions.login(result));
      successLogin();
    } catch (error) {
      console.error(error);
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Gagal masuk",
          message: error.message,
          action: null,
        })
      );
      failLogin();
    }
  };
};

export const signup = (email, name, password, succesSingup, failSignup) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Mendaftar...",
        message: "Harap tunggu sebentar",
      })
    );

    const signupToBackend = async () => {
      const response = await await fetch(
        "http://localhost:8080/api/user/signup",
        {
          method: "POST",
          body: JSON.stringify({
            name,
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Tidak bisa mendaftar!");
      }
      return result;
    };

    try {
      const result = await signupToBackend();
      dispatch(authActions.login(result));
      succesSingup();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Gagal mendaftar",
          message: error.message,
        })
      );
      failSignup();
    }
  };
};
