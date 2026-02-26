/**
 * B-GREEN ECONSULTING S.A.S - Main JavaScript
 * Manejo de menús, navegación y componentes interactivos
 */

// ============================================
// CARGA DE COMPONENTES (Header y Footer)
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  loadComponents();
  initMobileMenu();
  initDropdowns();
  initScrollEffects();
  initSmoothScroll();
});

/**
 * Carga los componentes Header y Footer
 */
function loadComponents() {
  // Cargar Header
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    const headerPath = getComponentPath("header.html");
    console.log("Cargando header desde:", headerPath);

    fetch(headerPath)
      .then((res) => {
        console.log("Header response status:", res.status);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.text();
      })
      .then((html) => {
        console.log("Header cargado exitosamente, longitud:", html.length);
        headerPlaceholder.innerHTML = html;
        initMobileMenu();
        initDropdowns();
      })
      .catch((err) => {
        console.error("Error cargando header:", err);
        console.error("Error completo:", err.message, err.stack);
      });
  }

  // Cargar Footer
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    const footerPath = getComponentPath("footer.html");
    console.log("Cargando footer desde:", footerPath);

    fetch(footerPath)
      .then((res) => {
        console.log("Footer response status:", res.status);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.text();
      })
      .then((html) => {
        console.log("Footer cargado exitosamente, longitud:", html.length);
        footerPlaceholder.innerHTML = html;
      })
      .catch((err) => {
        console.error("Error cargando footer:", err);
        console.error("Error completo:", err.message, err.stack);
      });
  }
}

/**
 * Obtiene la ruta correcta del componente según la ubicación actual
 */
function getComponentPath(componentFile) {
  const path = window.location.pathname;

  // Si estamos en el index principal
  if (
    path.endsWith("index.html") ||
    path.endsWith("/") ||
    path.includes("bgreen_econsulting_sas/index.html")
  ) {
    // Usar versiones específicas para el index principal
    if (componentFile === "header.html") {
      return "components/header-index.html";
    }
    if (componentFile === "footer.html") {
      return "components/footer-index.html";
    }
    return "components/" + componentFile;
  }

  // Si estamos en una página dentro de /pages/
  if (path.includes("/pages/")) {
    return "../../components/" + componentFile;
  }

  // Por defecto
  return "../components/" + componentFile;
}

// ============================================
// MENÚ MÓVIL
// ============================================
function initMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const headerNav = document.querySelector(".header-nav");

  if (menuToggle && headerNav) {
    menuToggle.addEventListener("click", function () {
      headerNav.classList.toggle("active");

      // Animar el icono de hamburguesa
      const menuIcons = menuToggle.querySelectorAll(".menu-icon");
      menuToggle.classList.toggle("active");

      // Cambiar aria-expanded
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !isExpanded);
    });

    // Cerrar el menú al hacer clic en un enlace
    const navLinks = headerNav.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        // Solo cerrar si es un enlace directo (no dropdown toggle)
        if (!this.classList.contains("dropdown-toggle")) {
          headerNav.classList.remove("active");
          menuToggle.classList.remove("active");
          menuToggle.setAttribute("aria-expanded", "false");
        }
      });
    });

    // Cerrar el menú al hacer clic fuera
    document.addEventListener("click", function (e) {
      if (!menuToggle.contains(e.target) && !headerNav.contains(e.target)) {
        headerNav.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
}

// ============================================
// DROPDOWNS
// ============================================
function initDropdowns() {
  const dropdowns = document.querySelectorAll(".nav-dropdown");

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");

    if (toggle && menu) {
      // En móvil, toggle al hacer clic
      toggle.addEventListener("click", function (e) {
        e.preventDefault();

        // En dispositivos móviles
        if (window.innerWidth <= 768) {
          const isExpanded = toggle.getAttribute("aria-expanded") === "true";
          toggle.setAttribute("aria-expanded", !isExpanded);
          menu.classList.toggle("active");

          // Cerrar otros dropdowns
          dropdowns.forEach((otherDropdown) => {
            if (otherDropdown !== dropdown) {
              const otherToggle =
                otherDropdown.querySelector(".dropdown-toggle");
              const otherMenu = otherDropdown.querySelector(".dropdown-menu");
              otherToggle.setAttribute("aria-expanded", "false");
              otherMenu.classList.remove("active");
            }
          });
        }
      });
    }
  });
}

// ============================================
// EFECTOS DE SCROLL
// ============================================
function initScrollEffects() {
  let lastScroll = 0;
  const header = document.querySelector(".header-component");

  if (header) {
    window.addEventListener("scroll", function () {
      const currentScroll = window.pageYOffset;

      // Añadir sombra al header cuando se hace scroll
      if (currentScroll > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

      lastScroll = currentScroll;
    });
  }
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      // Si el href es solo "#", no hacer nada
      if (targetId === "#") {
        e.preventDefault();
        return;
      }

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        const headerHeight =
          document.querySelector(".header-component")?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// ============================================
// ANIMACIONES AL HACER SCROLL (Intersection Observer)
// ============================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar elementos con la clase .card
  const cards = document.querySelectorAll(".card, .stat-item, .value-card");
  cards.forEach((card) => observer.observe(card));
}

// Inicializar animaciones cuando el DOM esté listo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initScrollAnimations);
} else {
  initScrollAnimations();
}

// ============================================
// FORMULARIOS - Validación básica
// ============================================
function initFormValidation() {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      const requiredFields = form.querySelectorAll("[required]");
      let isValid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add("error");

          // Mostrar mensaje de error
          let errorMsg = field.parentElement.querySelector(".error-message");
          if (!errorMsg) {
            errorMsg = document.createElement("span");
            errorMsg.className = "error-message";
            errorMsg.textContent = "Este campo es obligatorio";
            field.parentElement.appendChild(errorMsg);
          }
        } else {
          field.classList.remove("error");
          const errorMsg = field.parentElement.querySelector(".error-message");
          if (errorMsg) {
            errorMsg.remove();
          }
        }
      });

      if (!isValid) {
        e.preventDefault();
      }
    });

    // Remover error al escribir
    const inputs = form.querySelectorAll("input, select, textarea");
    inputs.forEach((input) => {
      input.addEventListener("input", function () {
        this.classList.remove("error");
        const errorMsg = this.parentElement.querySelector(".error-message");
        if (errorMsg) {
          errorMsg.remove();
        }
      });
    });
  });
}

// Inicializar validación de formularios
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFormValidation);
} else {
  initFormValidation();
}

// ============================================
// UTILIDADES
// ============================================

/**
 * Muestra un mensaje toast
 */
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

/**
 * Obtiene el año actual para el copyright
 */
function updateCopyrightYear() {
  const yearElements = document.querySelectorAll(".current-year");
  const currentYear = new Date().getFullYear();

  yearElements.forEach((element) => {
    element.textContent = currentYear;
  });
}

// Ejecutar al cargar
document.addEventListener("DOMContentLoaded", updateCopyrightYear);
