emailjs.init("DBegaFarga98E_3uD"); // 👈 reemplaza esto

      const form = document.getElementById("contact-form");
      const button = document.querySelector(".submit-btn");
      const messageText = document.querySelector(".form-message");

      form.addEventListener("submit", function (e) {
        e.preventDefault();

        button.textContent = "Sending...";
        button.disabled = true;
        messageText.textContent = "";
        messageText.style.color = "black";

        emailjs.sendForm(
          "service_0pawqlf",     // 👈 reemplaza esto
          "template_i1yp8to",    // 👈 reemplaza esto
          this
        )
        .then(() => {
          messageText.textContent = "Message sent successfully ✓";
          messageText.style.color = "#22c55e";

          button.textContent = "Sent ✓";
          button.style.backgroundColor = "#22c55e";

          form.reset();

          setTimeout(() => {
            button.textContent = "Submit";
            button.disabled = false;
            button.style.backgroundColor = "#6e07f3";
          }, 3000);
        })
        .catch(() => {
          messageText.textContent = "Something went wrong. Try again.";
          messageText.style.color = "red";

          button.textContent = "Submit";
          button.disabled = false;
        });
      });