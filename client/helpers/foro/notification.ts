import Swal from "sweetalert2";

export const notification = Swal.mixin({
    toast: true,
    position: "bottom-right",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  /*
 notification.fire({
    icon: "success",
    title: "Your post has been published successfully",
  });

  */