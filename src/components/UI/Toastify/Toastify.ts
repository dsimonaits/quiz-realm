import Toastify from "toastify-js";

const Toast = (message: string) => {
  Toastify({
    text: `${message}`,
    className: "info",
    duration: 4000,
    destination: "https://github.com/apvarun/toastify-js",

    gravity: "top",
    stopOnFocus: true,

    style: {
      zIndex: "999",
      position: "absolute",
      top: "10px",
      right: "10px",
      width: "250px",
      padding: "10px",
      borderRadius: "5px",
      color: "white",
      background: "var(--accent)",
    },
  }).showToast();
};

export default Toast;
