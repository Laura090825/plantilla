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
