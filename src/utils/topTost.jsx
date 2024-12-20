import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const progressColor = {
  success: "#a5dc86",
  error: "#f27474",
  warning: "#f8bb86",
};

const topTost = (type = "success", message = "Action Execute Successfully") => {
  MySwal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);

      const progressBar = toast.querySelector(".swal2-progress-bar");
      if (progressBar) {
        progressBar.style.backgroundColor = progressColor.error;
      }
    },
  }).fire({
    icon: type,
    title: message,
  });
};

export default topTost;
