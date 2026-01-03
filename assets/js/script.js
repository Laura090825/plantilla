// ==========================================
// Navegación Móvil
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const body = document.body;

  // Toggle menú móvil
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      // Cambiar icono
      const icon = this.querySelector("i");
      if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        body.style.overflow = "hidden";
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        body.style.overflow = "";
      }
    });
  }

  // Cerrar menú al hacer clic en un enlace
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove("active");
        const icon = mobileMenuToggle.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        body.style.overflow = "";
      }
    });
  });

  // Dropdown en móvil
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    const link = dropdown.querySelector("a");
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle("active");
      }
    });
  });
});

// ==========================================
// Navegación Suave
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerHeight =
          document.querySelector(".main-header").offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  });
});

// ==========================================
// Botón Volver Arriba
// ==========================================
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ==========================================
// Animación de Contador de Estadísticas
// ==========================================
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = Math.floor(target).toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start).toLocaleString();
    }
  }, 16);
}

// Observador de intersección para las estadísticas
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px",
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll(".stat-number");
      statNumbers.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-count"));
        animateCounter(stat, target);
      });
      observer.unobserve(entry.target);
    }
  });
};

const statsObserver = new IntersectionObserver(
  observerCallback,
  observerOptions
);
const statsSection = document.querySelector(".stats-section");
if (statsSection) {
  statsObserver.observe(statsSection);
}

// ==========================================
// Formulario de Contacto
// ==========================================
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener valores del formulario
    const formData = {
      nombre: document.getElementById("nombre").value,
      email: document.getElementById("email").value,
      telefono: document.getElementById("telefono").value,
      asunto: document.getElementById("asunto").value,
      mensaje: document.getElementById("mensaje").value,
    };

    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, usando fetch() para enviar a un servidor

    // Simulación de envío exitoso
    alert(
      "¡Gracias por contactarnos! Hemos recibido tu mensaje y te responderemos pronto."
    );
    contactForm.reset();

    // En producción, reemplaza lo anterior con algo como:
    /*
        fetch('/api/contacto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert('¡Gracias por contactarnos! Hemos recibido tu mensaje.');
            contactForm.reset();
        })
        .catch(error => {
            alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
            console.error('Error:', error);
        });
        */
  });
}

// ==========================================
// Animación de Aparición de Elementos
// ==========================================
const fadeElements = document.querySelectorAll(
  ".service-card, .info-card, .news-card, .transparency-card"
);

const fadeObserverOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const fadeObserverCallback = (entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("fade-in-up");
      }, index * 100);
      observer.unobserve(entry.target);
    }
  });
};

const fadeObserver = new IntersectionObserver(
  fadeObserverCallback,
  fadeObserverOptions
);
fadeElements.forEach((element) => {
  fadeObserver.observe(element);
});

// ==========================================
// Header Sticky con Efecto
// ==========================================
const header = document.querySelector(".main-header");
let lastScroll = 0;

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }

  lastScroll = currentScroll;
});

// ==========================================
// Cerrar menú móvil al cambiar tamaño de ventana
// ==========================================
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    const navMenu = document.querySelector(".nav-menu");
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");

    if (navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      const icon = mobileMenuToggle.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
      document.body.style.overflow = "";
    }

    // Remover clase active de dropdowns
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  }
});

// ==========================================
// Prevenir comportamiento por defecto de enlaces #
// ==========================================
document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

// ==========================================
// Información de copyright dinámica
// ==========================================
const currentYear = new Date().getFullYear();
const copyrightElements = document.querySelectorAll(".footer-bottom p");
copyrightElements.forEach((element) => {
  if (element.textContent.includes("2025")) {
    element.textContent = element.textContent.replace("2025", currentYear);
  }
});

// ==========================================
// Lazy Loading para imágenes (opcional)
// ==========================================
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
        }
        observer.unobserve(img);
      }
    });
  });

  // Para usar esto, cambia src por data-src en las imágenes del HTML
  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

// ==========================================
// Gestión de enlaces externos
// ==========================================
document.querySelectorAll('a[href^="http"]').forEach((link) => {
  // Verificar si el enlace no es del mismo dominio
  if (!link.href.includes(window.location.hostname)) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  }
});

// ==========================================
// Consola de Información
// ==========================================
console.log(
  "%c¡Bienvenido a la Empresa de Servicios Públicos de Aseo!",
  "color: #2E7D32; font-size: 20px; font-weight: bold;"
);
console.log(
  "%cEsta plantilla fue creada para empresas de servicios públicos en Colombia",
  "color: #666; font-size: 12px;"
);
