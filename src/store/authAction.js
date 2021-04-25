import { authActions } from "./authSlice";
import { uiActions } from "./uiSlice";

export const login = (userData) => {
  return async (dispatch) => {
    const loginToBackend = async () => {
      const response = await await fetch(
        "https://react-http-6b4a6.firebaseio.com/cart.json",
        {
          method: "POST",
          body: JSON.stringify({
            name: userData.name,
            email: userData.email,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Tidak bisa login!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const result = await loginToBackend();
      dispatch(authActions.login(result));
    } catch (error) {
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

export const signup = (userData) => {
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
        "https://react-http-6b4a6.firebaseio.com/cart.json",
        {
          method: "POST",
          body: JSON.stringify({
            name: userData.name,
            email: userData.email,
            password: userData.password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Could not signup!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const result = await signupToBackend();
      dispatch(authActions.login(result));
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
