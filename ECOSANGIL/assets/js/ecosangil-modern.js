// ==========================================
// ECOSANGIL MODERN - JavaScript 2026
// Interacciones y Animaciones Modernas
// ==========================================

// ==========================================
// Navegación Activa
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  // ---- Detectar página actual por URL ----
  function setActiveByURL() {
    // Limpiar todos los activos primero
    navLinks.forEach((link) => link.classList.remove("active"));

    const currentPath = window.location.pathname.replace(/\\/g, "/");
    const currentFile = currentPath.split("/").pop() || "index.html";

    // Mapeo de archivos a índice del nav-link principal
    // Orden: 0-Principal, 1-La Empresa, 2-Cobertura, 3-Nuestros Servicios,
    //        4-Planes y Costos, 5-Servicio al Cliente, 6-Información Pública, 7-Actualidad
    const pageToNavMap = {
      "index.html": 0,
      // La Empresa (índice 1)
      "quienes-somos.html": 1,
      "quienes-somos-modern.html": 1,
      "mision-vision.html": 1,
      "estructura.html": 1,
      "informes.html": 1,
      // Cobertura (índice 2)
      "cobertura.html": 2,
      "socorro.html": 2,
      "palmas-del-socorro.html": 2,
      "moniquira.html": 2,
      "barrancas.html": 2,
      // Nuestros Servicios (índice 3)
      "barrido-limpieza.html": 3,
      "jornadas.html": 3,
      "recoleccion-transporte.html": 3,
      // Planes y Costos (índice 4)
      "tarifas.html": 4,
      "factura.html": 4,
      "pago.html": 4,
      // Servicio al Cliente (índice 5)
      "pqr.html": 5,
      "preguntas.html": 5,
      "contacto.html": 5,
      "certificados.html": 5,
      // Información Pública (índice 6)
      "transparencia.html": 6,
      // Actualidad (índice 7)
      "noticias.html": 7,
    };

    const navIndex = pageToNavMap[currentFile];
    if (navIndex !== undefined) {
      const targetLink = navLinks[navIndex];
      if (targetLink) targetLink.classList.add("active");
    }
  }

  setActiveByURL();

  // ---- Scroll: solo actualizar botón volver arriba ----
  window.addEventListener("scroll", function () {
    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
      if (window.pageYOffset > 500) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    }
  });

  // ---- Scroll suave para anclas ----
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href && href.startsWith("#")) {
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          e.preventDefault();
          window.scrollTo({
            top: targetSection.offsetTop - 100,
            behavior: "smooth",
          });
        }
      }
    });
  });
});

// ==========================================
// Menú Toggle Mobile y Dropdowns
// ==========================================
const navToggle = document.getElementById("navToggle");
const navLinksMenu = document.querySelector(".nav-links-modern");

if (navToggle) {
  navToggle.addEventListener("click", function () {
    navLinksMenu.classList.toggle("active");
    this.classList.toggle("active");
  });

  // Manejo de dropdowns
  document.querySelectorAll(".dropdown > .nav-link").forEach((dropdownLink) => {
    dropdownLink.addEventListener("click", function (e) {
      // Solo en móvil, prevenir navegación y hacer toggle del dropdown
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parentDropdown = this.parentElement;
        const submenu = this.nextElementSibling;

        // Cerrar otros dropdowns
        document.querySelectorAll(".dropdown").forEach((otherDropdown) => {
          if (otherDropdown !== parentDropdown) {
            otherDropdown.classList.remove("active");
            const otherSubmenu = otherDropdown.querySelector(".submenu-modern");
            if (otherSubmenu) {
              otherSubmenu.style.maxHeight = "0px";
            }
          }
        });

        // Toggle del dropdown actual
        parentDropdown.classList.toggle("active");

        // Toggle del submenu actual
        if (submenu) {
          if (submenu.style.maxHeight && submenu.style.maxHeight !== "0px") {
            submenu.style.maxHeight = "0px";
          } else {
            submenu.style.maxHeight = submenu.scrollHeight + "px";
          }
        }
      }
      // En desktop, los dropdowns funcionan con hover (CSS), así que no bloqueamos nada
    });
  });

  // Cerrar menú al hacer clic en enlaces del submenu
  document.querySelectorAll(".submenu-modern a").forEach((link) => {
    link.addEventListener("click", function () {
      navLinksMenu.classList.remove("active");
      navToggle.classList.remove("active");
      // Cerrar todos los dropdowns
      document.querySelectorAll(".dropdown").forEach((dropdown) => {
        dropdown.classList.remove("active");
        const submenu = dropdown.querySelector(".submenu-modern");
        if (submenu) {
          submenu.style.maxHeight = "0px";
        }
      });
    });
  });

  // Cerrar menú al hacer clic en enlaces normales (no dropdown)
  document
    .querySelectorAll(".nav-links-modern > li:not(.dropdown) > .nav-link")
    .forEach((link) => {
      link.addEventListener("click", function () {
        navLinksMenu.classList.remove("active");
        navToggle.classList.remove("active");
      });
    });

  // Cerrar al hacer clic fuera del menú
  document.addEventListener("click", function (e) {
    if (!navLinksMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navLinksMenu.classList.remove("active");
      navToggle.classList.remove("active");
    }
  });
}

// ==========================================
// Botón Volver Arriba
// ==========================================
const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ==========================================
// Animación de Números (Counter)
// ==========================================
function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    element.textContent = value;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Observar elementos con números para animarlos
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px",
};

const numberObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute("data-target"));
      animateValue(entry.target, 0, target, 2000);
      numberObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar todos los números de impacto
document.querySelectorAll(".impact-number").forEach((number) => {
  numberObserver.observe(number);
});

// ==========================================
// Animación de Fade In al Scroll
// ==========================================
const fadeElements = document.querySelectorAll(
  ".service-card-modern, .impact-card, .visual-card",
);

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, index * 100);
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  },
);

fadeElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(30px)";
  element.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
  fadeObserver.observe(element);
});

// ==========================================
// Efecto Parallax Suave en Hero
// ==========================================
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector(".hero-content-modern");
  const gradientOrbs = document.querySelectorAll(".gradient-orb");

  if (heroContent && scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    heroContent.style.opacity = 1 - scrolled / 500;
  }

  gradientOrbs.forEach((orb, index) => {
    const speed = 0.2 + index * 0.1;
    orb.style.transform = `translate(${scrolled * speed}px, ${scrolled * speed * 0.5}px)`;
  });
});

// ==========================================
// Partículas Flotantes (Opcional)
// ==========================================
function createFloatingParticles() {
  const hero = document.querySelector(".hero-modern");
  if (!hero) return;

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float ${Math.random() * 6 + 4}s ease-in-out infinite;
      animation-delay: ${Math.random() * 2}s;
      pointer-events: none;
    `;
    hero.querySelector(".hero-background").appendChild(particle);
  }
}

// Crear partículas si el navegador lo soporta
if (window.innerWidth > 768) {
  createFloatingParticles();
}

// ==========================================
// Efecto Cursor Personalizado (Desktop) - DESHABILITADO
// ==========================================
// Cursor personalizado deshabilitado para evitar conflictos visuales
// Se usa el cursor nativo del navegador

// ==========================================
// Formulario de Contacto
// ==========================================
const contactForm = document.querySelector(".contact-form-modern");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Mostrar animación de envío
    const submitBtn = this.querySelector(".btn-submit");
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;

    // Simular envío (aquí conectarías con tu backend)
    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fas fa-check-circle"></i> ¡Enviado!';
      submitBtn.style.background = "linear-gradient(135deg, #10b981, #059669)";

      // Resetear formulario después de 2 segundos
      setTimeout(() => {
        this.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = "";
        submitBtn.disabled = false;

        // Mostrar mensaje de éxito
        showNotification(
          "¡Mensaje enviado exitosamente! Te contactaremos pronto.",
          "success",
        );
      }, 2000);
    }, 1500);
  });
}

// ==========================================
// Sistema de Notificaciones
// ==========================================
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <i class="fas fa-${type === "success" ? "check-circle" : "info-circle"}"></i>
    <span>${message}</span>
  `;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 30px;
    background: ${type === "success" ? "linear-gradient(135deg, #10b981, #059669)" : "linear-gradient(135deg, #3b82f6, #2563eb)"};
    color: white;
    padding: 16px 24px;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 10000;
    animation: slideInRight 0.3s ease-out;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease-out";
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 4000);
}

// Agregar animaciones CSS para notificaciones
const style = document.createElement("style");
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }

  .nav-links-modern.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    padding: 20px;
    border-radius: 0 0 var(--radius-lg) var(--radius-lg);
    box-shadow: var(--shadow-lg);
    margin-top: 10px;
    gap: 16px;
  }

  @media (min-width: 769px) {
    .nav-links-modern.active {
      display: flex;
      flex-direction: row;
      position: static;
      background: none;
      backdrop-filter: none;
      padding: 0;
      box-shadow: none;
      margin: 0;
      gap: 32px;
    }
  }

  .nav-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translateY(8px);
  }

  .nav-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .nav-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translateY(-8px);
  }
`;
document.head.appendChild(style);

// ==========================================
// Performance: Lazy Loading para Imágenes
// ==========================================
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

// ==========================================
// Filtros de Noticias
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-tag");
  const newsCards = document.querySelectorAll(".news-card");
  const timelineItems = document.querySelectorAll(".timeline-item");
  const searchInput = document.getElementById("search-news");

  console.log(
    `📰 Sistema de filtros cargado: ${newsCards.length} tarjetas, ${timelineItems.length} items de timeline`,
  );

  // Función de filtrado por categoría
  function filterByCategory(category) {
    newsCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");

      if (category === "all" || cardCategory === category) {
        card.style.display = "block";
        // Animación de entrada
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 10);
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });

    // Filtrar timeline items también
    timelineItems.forEach((item) => {
      const itemCategory = item.querySelector(".timeline-badge");
      let itemCategoryClass = "";

      if (itemCategory) {
        if (itemCategory.classList.contains("ambiental"))
          itemCategoryClass = "categoria1";
        else if (itemCategory.classList.contains("servicios"))
          itemCategoryClass = "categoria2";
        else if (itemCategory.classList.contains("comunidad"))
          itemCategoryClass = "categoria3";
        else if (itemCategory.classList.contains("institucional"))
          itemCategoryClass = "categoria4";
      }

      if (category === "all" || itemCategoryClass === category) {
        item.style.display = "flex";
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, 10);
      } else {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        setTimeout(() => {
          item.style.display = "none";
        }, 300);
      }
    });
  }

  // Event listeners para los botones de filtro
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remover clase activa de todos los botones
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Añadir clase activa al botón clickeado
      this.classList.add("active");

      // Obtener la categoría y filtrar
      const category = this.getAttribute("data-category");
      filterByCategory(category);
    });
  });

  // Función de búsqueda
  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      const searchTerm = e.target.value.toLowerCase();

      newsCards.forEach((card) => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const description = card.querySelector("p").textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          card.style.display = "block";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });

      // Búsqueda en timeline items
      timelineItems.forEach((item) => {
        const title = item.querySelector("h3")
          ? item.querySelector("h3").textContent.toLowerCase()
          : "";
        const description = item.querySelector("p")
          ? item.querySelector("p").textContent.toLowerCase()
          : "";

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          item.style.display = "flex";
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        } else {
          item.style.opacity = "0";
          item.style.transform = "translateY(20px)";
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  }

  // Añadir estilos de transición a las tarjetas
  newsCards.forEach((card) => {
    card.style.transition = "opacity 0.3s ease, transform 0.3s ease";
  });

  timelineItems.forEach((item) => {
    item.style.transition = "opacity 0.3s ease, transform 0.3s ease";
  });
});

// ==========================================
// Inicialización
// ==========================================
console.log(
  "%c🌿 ECOSANGIL Modern 2026 ",
  "background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 8px 16px; border-radius: 4px; font-weight: bold;",
);
console.log("Diseño completamente renovado y optimizado");
