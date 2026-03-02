const translations = {
  es: {
    /* HERO */
    "hero.title": "Frontend & Web Developer",
    "hero.subtitle":
      "Diseño y construyo experiencias web limpias, simples y funcionales.",

    /* ABOUT */
    "about.title": "Hola, soy Andrés. Mucho gusto.",
    "about.text":
      "Desde que comencé mi camino como diseñador frontend y desarrollador web, he estado creando interfaces limpias y funcionales. Disfruto convertir ideas en experiencias digitales simples y seguir aprendiendo en cada proyecto.",

    /* HEADER */
    "header.contact": "Contáctame",

    /* CARDS */
    "card1.title": "Frontend Developer",
    "card1.desc": "Disfruto crear interfaces web limpias y funcionales.",
    "card1.techTitle": "Tecnologías que utilizo:",
    "card1.toolsTitle": "Herramientas:",

    "card2.title": "Diseñador",
    "card2.desc":
      "Me enfoco en diseños simples, estructura de código limpia y experiencias intuitivas para los usuarios.",
    "card2.areasTitle": "Áreas que disfruto diseñar:",
    "card2.toolsTitle": "Herramientas de diseño:",

    "card3.title": "Desarrollador de Bases de Datos",
    "card3.desc":
      "Disfruto diseñar modelos de datos eficientes, optimizar consultas y asegurar un rendimiento confiable.",
    "card3.systemsTitle": "Sistemas:",
    "card3.toolsTitle": "Herramientas de Desarrollo:",

    /* PROJECTS */
    "projects.title": "Mis proyectos recientes",
    "projects.subtitle":
      "Aquí hay algunos proyectos en los que he trabajado.",

    "projects.sport.desc": "App para encuentros deportivos.",
    "projects.sport.tech": "HTML, CSS, JavaScript y React.",

    "projects.todo.desc": "Lista para controlar series de anime.",
    "projects.todo.tech": "HTML, CSS, JavaScript y React.",

    "projects.travel.title": "Mi viaje por el mundo",
    "projects.travel.desc":
      "Página con galería de fotos de mis viajes.",
    "projects.travel.tech": "HTML, CSS, JavaScript y SCSS.",

    "projects.cocktail.desc":
      "Página con miles de recetas de cócteles.",
    "projects.cocktail.tech": "HTML, CSS y JavaScript.",

    "projects.cumbia.desc":
      "Reproductor de música con la mejor cumbia caucana.",
    "projects.cumbia.tech": "HTML, CSS y JavaScript.",

    "projects.tourism.title": "Página de turismo",
    "projects.tourism.desc": "Página web de turismo.",
    "projects.tourism.tech":
      "HTML, CSS, JavaScript y Tailwind CSS.",

    "projects.visit": "Visitar sitio",
    "projects.github": "Repositorio en GitHub",

    /* STACK */
    "stack.title": "Tecnologías",
    "stack.fundamentals": "Fundamentos del Desarrollo Web",
    "stack.frameworks": "Librerías & Frameworks",
    "stack.tools": "Herramientas y Plataformas",
    "stack.database": "Bases de datos",
    "stack.other": "Otras habilidades",

    /* FACTS */
    "facts.title": "Datos curiosos",
    "facts.text":
      "Soy un gran fan del anime. El tenis y el fútbol me mantienen activo. Amo acampar bajo las estrellas. El senderismo despeja mi mente. Preparar cócteles es mi lado creativo. Sueño con viajar por el mundo. Me encanta ayudar a los perros callejeros.",

    /* FOOTER */
    "footer.text":
      "Viviendo, aprendiendo y mejorando cada día."
  },

  en: {
    /* HERO */
    "hero.title": "Frontend & Web Developer",
    "hero.subtitle":
      "I design and build clean, simple and functional web experiences.",

    /* ABOUT */
    "about.title": "Hi, I'm Andrés. Nice to meet you.",
    "about.text":
      "Since starting my journey as a frontend designer and web developer, I’ve been building clean and functional interfaces. I enjoy turning ideas into simple digital experiences and continuously improving my skills.",

    /* HEADER */
    "header.contact": "Contact me",

    /* CARDS */
    "card1.title": "Frontend Developer",
    "card1.desc": "I enjoy creating clean and functional web interfaces.",
    "card1.techTitle": "Technologies I use:",
    "card1.toolsTitle": "Tools:",

    "card2.title": "Designer",
    "card2.desc":
      "I focus on simple designs, clean code structure and intuitive user experiences.",
    "card2.areasTitle": "Areas I enjoy designing:",
    "card2.toolsTitle": "Design tools:",

    "card3.title": "Database Developer",
    "card3.desc":
      "I enjoy designing efficient data models, optimizing queries and ensuring reliable performance.",
    "card3.systemsTitle": "Systems:",
    "card3.toolsTitle": "Development Tools:",

    /* PROJECTS */
    "projects.title": "My Recent Projects",
    "projects.subtitle":
      "Here are some projects I have worked on.",

    "projects.sport.desc":
      "App for organizing sports meetups.",
    "projects.sport.tech":
      "HTML, CSS, JavaScript and React.",

    "projects.todo.desc":
      "List to track anime series.",
    "projects.todo.tech":
      "HTML, CSS, JavaScript and React.",

    "projects.travel.title":
      "World Journey",
    "projects.travel.desc":
      "Photo gallery website of my travels.",
    "projects.travel.tech":
      "HTML, CSS, JavaScript and SCSS.",

    "projects.cocktail.desc":
      "Website with thousands of cocktail recipes.",
    "projects.cocktail.tech":
      "HTML, CSS and JavaScript.",

    "projects.cumbia.desc":
      "Music player featuring the best Colombian cumbia.",
    "projects.cumbia.tech":
      "HTML, CSS and JavaScript.",

    "projects.tourism.title":
      "Tourism Website",
    "projects.tourism.desc":
      "Tourism website.",
    "projects.tourism.tech":
      "HTML, CSS, JavaScript and Tailwind CSS.",

    "projects.visit": "Visit Site",
    "projects.github": "GitHub Repository",

    /* STACK */
    "stack.title": "Technologies",
    "stack.fundamentals": "Web Development Fundamentals",
    "stack.frameworks": "Libraries & Frameworks",
    "stack.tools": "Tools & Platforms",
    "stack.database": "Databases",
    "stack.other": "Other Skills",

    /* FACTS */
    "facts.title": "Random Facts",
    "facts.text":
      "I'm a big anime fan. Tennis and soccer keep me active. I love camping under the stars. Hiking clears my mind. Mixing cocktails is my creative side. I dream of traveling the world. I enjoy helping stray dogs.",

    /* FOOTER */
    "footer.text":
      "Living, learning and improving every day."
  }
};

/* ======================================
   LANGUAGE SYSTEM
====================================== */

const langToggle = document.getElementById("lang-toggle");
let currentLang = localStorage.getItem("language") || "es";

function changeLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (translations[lang][key]) {
      el.setAttribute("aria-label", translations[lang][key]);
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;
  localStorage.setItem("language", lang);

  if (langToggle) {
    langToggle.textContent = lang === "es" ? "EN" : "ES";
  }
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    changeLanguage(currentLang);
  });
}

changeLanguage(currentLang);