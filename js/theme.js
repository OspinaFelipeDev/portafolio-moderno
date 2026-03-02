const toggle = document.getElementById("theme-toggle");
const icon = toggle.querySelector("i");

function updateIcon() {
  const isDark = document.body.classList.contains("dark");

  icon.classList.add("rotate");

  setTimeout(() => {
    icon.classList.toggle("fa-moon", !isDark);
    icon.classList.toggle("fa-sun", isDark);
    icon.classList.remove("rotate");
  }, 200);

  toggle.setAttribute("aria-pressed", isDark);
}

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateIcon();
  });
}

/* Mantener tema guardado */
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

updateIcon();