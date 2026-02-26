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

if (backToTopButton) {
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ==========================================
// Menú Desplegable (Dropdown)
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".nav-menu .dropdown");
  const submenuDropdowns = document.querySelectorAll(".submenu .dropdown");

  // Manejar dropdowns del menú principal
  dropdowns.forEach((dropdown) => {
    const link = dropdown.querySelector("a");

    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle("active");

        // Cerrar otros dropdowns del mismo nivel
        dropdowns.forEach((other) => {
          if (other !== dropdown && !dropdown.contains(other)) {
            other.classList.remove("active");
          }
        });
      }
    });
  });

  // Manejar dropdowns anidados (Municipios)
  submenuDropdowns.forEach((dropdown) => {
    const link = dropdown.querySelector("a");

    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle("active");

        // Cerrar otros dropdowns anidados
        submenuDropdowns.forEach((other) => {
          if (other !== dropdown) {
            other.classList.remove("active");
          }
        });
      }
    });
  });

  // Cerrar dropdowns cuando se hace clic fuera
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("active");
      });
      submenuDropdowns.forEach((dropdown) => {
        dropdown.classList.remove("active");
      });
    }
  });
});

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

    // Simulación de envío exitoso
    alert(
      "¡Gracias por contactarnos! Hemos recibido tu mensaje y te responderemos pronto.",
    );
    contactForm.reset();

    // En producción, descomenta y usa:
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
// Filtros de Noticias con Búsqueda
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  const filterTags = document.querySelectorAll(".filter-tag");
  const timelineItems = document.querySelectorAll(".timeline-item");
  const searchInput = document.querySelector(".search-input-wrapper input");

  // Manejar filtros por categoría
  if (filterTags.length > 0) {
    filterTags.forEach((tag) => {
      tag.addEventListener("click", function () {
        const filterValue = this.textContent.trim().toLowerCase();

        // Actualizar el estado active
        filterTags.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");

        // Filtrar elementos
        timelineItems.forEach((item) => {
          const badge = item.querySelector(".timeline-badge");
          if (!badge) return;

          const category = badge.textContent.trim().toLowerCase();

          if (
            filterValue === "todas" ||
            category.includes(filterValue) ||
            (filterValue === "ambiental" &&
              (category.includes("ambiental") ||
                category.includes("limpieza"))) ||
            (filterValue === "servicios" &&
              (category.includes("servicio") ||
                category.includes("horario") ||
                category.includes("recolección"))) ||
            (filterValue === "comunidad" &&
              (category.includes("comunidad") ||
                category.includes("educación") ||
                category.includes("charla"))) ||
            (filterValue === "institucional" &&
              (category.includes("institucional") ||
                category.includes("certificación") ||
                category.includes("reconocimiento")))
          ) {
            item.style.display = "flex";
            // Animación de aparición
            item.style.animation = "fadeIn 0.5s";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }

  // Manejar búsqueda en tiempo real
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase();

      timelineItems.forEach((item) => {
        const title =
          item
            .querySelector(".timeline-card-body h3")
            ?.textContent.toLowerCase() || "";
        const description =
          item
            .querySelector(".timeline-card-body p")
            ?.textContent.toLowerCase() || "";
        const category =
          item.querySelector(".timeline-badge")?.textContent.toLowerCase() ||
          "";

        if (
          title.includes(searchTerm) ||
          description.includes(searchTerm) ||
          category.includes(searchTerm)
        ) {
          item.style.display = "flex";
          item.style.animation = "fadeIn 0.5s";
        } else {
          item.style.display = "none";
        }
      });

      // Si el campo está vacío, resetear al filtro activo
      if (searchTerm === "") {
        const activeFilter = document.querySelector(".filter-tag.active");
        if (activeFilter) {
          activeFilter.click();
        }
      }
    });
  }

  // ==========================================
  // Tabs de Transparencia
  // ==========================================
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  if (tabButtons.length > 0) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const targetTab = this.getAttribute("data-tab");

        // Remover clase active de todos los botones y contenidos
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        // Agregar clase active al botón clickeado y su contenido
        this.classList.add("active");
        const targetContent = document.getElementById(targetTab);
        if (targetContent) {
          targetContent.classList.add("active");
        }
      });
    });
  }
});
