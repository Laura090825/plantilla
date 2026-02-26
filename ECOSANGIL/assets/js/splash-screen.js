/* ============================================
   SPLASH SCREEN - ANIMACIÓN Y TRANSICIÓN
   ============================================ */

(function () {
  "use strict";

  // Tiempo de duración del splash (en milisegundos)
  const SPLASH_DURATION = 7000; // 7 segundos (tiempo completo de la animación del camión)

  // Esperar a que el DOM esté completamente cargado
  document.addEventListener("DOMContentLoaded", function () {
    const splashScreen = document.getElementById("splash-screen");
    const mainContent = document.getElementById("main-content");

    // Verificar que los elementos existan
    if (!splashScreen || !mainContent) {
      console.error("Splash screen o main content no encontrado");
      return;
    }

    // Asegurar que el contenido principal esté oculto inicialmente
    mainContent.classList.remove("show");
    mainContent.style.opacity = "0";
    mainContent.style.visibility = "hidden";

    // Después de SPLASH_DURATION, iniciar la transición
    setTimeout(function () {
      // Fade out del splash screen
      splashScreen.classList.add("fade-out");

      // Después de que termine la animación del fade out
      setTimeout(function () {
        // Ocultar completamente el splash
        splashScreen.style.display = "none";

        // Mostrar el contenido principal con fade in
        mainContent.classList.add("show");
        mainContent.style.opacity = "1";
        mainContent.style.visibility = "visible";
      }, 800); // Tiempo de la animación de fade-out (0.8s)
    }, SPLASH_DURATION);
  });

  // Opción alternativa: saltar el splash al hacer clic
  document.addEventListener("click", function skipSplash(e) {
    const splashScreen = document.getElementById("splash-screen");
    const mainContent = document.getElementById("main-content");

    if (splashScreen && !splashScreen.classList.contains("fade-out")) {
      splashScreen.classList.add("fade-out");

      setTimeout(function () {
        splashScreen.style.display = "none";
        mainContent.classList.add("show");
        mainContent.style.opacity = "1";
        mainContent.style.visibility = "visible";
      }, 800);

      // Remover el listener después de usarlo
      document.removeEventListener("click", skipSplash);
    }
  });
})();
