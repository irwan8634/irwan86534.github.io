(function () {
  emailjs.init("LWJjQmDvyjkpeI5Ru");
})();

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Ambil nilai berdasarkan name di form
    const name = this.elements["nama"].value;
    const email = this.elements["email"].value;
    const message = this.elements["pesan"].value;

    emailjs
      .send("service_wz0vnan", "template_z3c97oe", {
        nama: name, // sesuaikan key-nya dengan template EmailJS-mu
        email: email,
        pesan: message,
      })
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);

          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Message sent successfully!",
            showConfirmButton: false,
            timer: 1500,
          });

          event.target.reset();
        },
        function (error) {
          console.log("FAILED...", error);

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Message failed to send. Please try again.",
            showConfirmButton: true,
          });
        }
      );
  });
