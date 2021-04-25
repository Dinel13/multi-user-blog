import { authActions } from "./authSlice";
import { uiActions } from "./uiSlice";

export const login = (email, password) => {
  return async (dispatch) => {
    const loginToBackend = async () => {
      const response = await await fetch(
        "http://localhost:8080/api/user/login",
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
      dispatch(authActions.login(result));
    } catch (error) {
      console.log(error);
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "login failed!",
        })
      );
    }
  };
};

export const signup = (email, name, password) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
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
      console.log(result);
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "signup failed!",
        })
      );
    }
  };
};
