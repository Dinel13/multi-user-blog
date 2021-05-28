import { uiActions } from "./uiSlice";

export const showError = (status, title, message, action) => {
  console.log("te");
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: status,
        title: title,
        message: message,
        action: action,
      })
    );
  };
};

export const hideError = () => {
  return uiActions.hideNotification();
};
