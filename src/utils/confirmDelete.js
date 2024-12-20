import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export const confirmDelete = async (id) => {
  return MySwal.fire({
    title: "Are you sure?",
    text: "You want to delete?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "Cancel",
    reverseButtons: true,
    customClass: {
      confirmButton: "btn btn-success m-1",
      cancelButton: "btn btn-danger m-1",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Data Deleted Successfully.",
        icon: "success",
        customClass: {
          confirmButton: "btn btn-success",
        },
      });
      return { confirmed: true, id };
    }
  });
};
