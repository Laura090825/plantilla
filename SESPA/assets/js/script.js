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
      "¡Gracias por contactarnos! Hemos recibido tu mensaje y te responderemos pronto."
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
