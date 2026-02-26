/**
 * ============================================
 * HERO COMPONENT LOADER
 * Sistema de gestión centralizada de heroes
 * ============================================
 */

// Configuración centralizada de imágenes de fondo para cada página
const HERO_CONFIG = {
  // Página principal
  "index.html": {
    bg: "principal.jpg",
    badge: "Compromiso Verde 2026",
    title: "Nuestro Planeta",
    subtitle:
      "Soluciones ambientales sostenibles con pasión por la naturaleza, compromiso ecológico y respeto por el medio ambiente",
  },

  // Páginas corporativas
  "quienes-somos.html": {
    bg: "empresa.jpg",
    badge: "Nuestra Historia",
    title: "Quiénes Somos",
    subtitle:
      "Una empresa comprometida con el medio ambiente y el futuro sostenible",
  },

  "quienes-somos-modern.html": {
    bg: "empresa.jpg",
    badge: "Nuestra Historia",
    title: "Quiénes Somos",
    subtitle:
      "Una empresa comprometida con el medio ambiente y el futuro sostenible",
  },

  "mision-vision.html": {
    bg: "empresa.jpg",
    badge: "Nuestro Propósito",
    title: "Misión y Visión",
    subtitle:
      "Construyendo un futuro sostenible para las próximas generaciones",
  },

  "estructura.html": {
    bg: "empresa.jpg",
    badge: "Organización",
    title: "Nuestra Estructura",
    subtitle: "Un equipo comprometido con la excelencia y el medio ambiente",
  },

  "informes.html": {
    bg: "empresa.jpg",
    badge: "Transparencia",
    title: "Informes y Reportes",
    subtitle: "Transparencia y responsabilidad en cada paso",
  },

  "cobertura.html": {
    bg: "empresa.jpg",
    badge: "Nuestra Presencia",
    title: "Cobertura",
    subtitle: "Presentes en múltiples municipios con servicios de calidad",
  },

  "barrancas.html": {
    bg: "empresa.jpg",
    badge: "Nuestros Municipios",
    title: "Barrancas",
    subtitle: "Servicios ambientales de calidad para Barrancas",
  },

  "moniquira.html": {
    bg: "empresa.jpg",
    badge: "Nuestros Municipios",
    title: "Moniquirá",
    subtitle: "Servicios ambientales de calidad para Moniquirá",
  },

  "palmas-del-socorro.html": {
    bg: "empresa.jpg",
    badge: "Nuestros Municipios",
    title: "Palmas del Socorro",
    subtitle: "Servicios ambientales de calidad para Palmas del Socorro",
  },

  "socorro.html": {
    bg: "empresa.jpg",
    badge: "Nuestros Municipios",
    title: "Socorro",
    subtitle: "Servicios ambientales de calidad para Socorro",
  },

  // Páginas de servicios
  "barrido-limpieza.html": {
    bg: "principal.jpg",
    badge: "Nuestros Servicios",
    title: "Barrido y Limpieza",
    subtitle: "Manteniendo limpias nuestras calles y espacios públicos",
  },

  "recoleccion-transporte.html": {
    bg: "principal.jpg",
    badge: "Nuestros Servicios",
    title: "Recolección y Transporte",
    subtitle: "Gestión eficiente de residuos sólidos",
  },

  "jornadas.html": {
    bg: "principal.jpg",
    badge: "Nuestros Servicios",
    title: "Jornadas Especiales",
    subtitle: "Eventos de limpieza y educación ambiental",
  },

  // Páginas de usuario
  "contacto.html": {
    bg: "principal.jpg",
    badge: "Contáctanos",
    title: "Estamos Aquí",
    subtitle: "Nos encantaría escucharte y resolver tus inquietudes",
  },

  "pqr.html": {
    bg: "principal.jpg",
    badge: "Servicio al Cliente",
    title: "PQR",
    subtitle: "Peticiones, Quejas y Reclamos - Tu opinión es importante",
  },

  "preguntas.html": {
    bg: "principal.jpg",
    badge: "Ayuda",
    title: "Preguntas Frecuentes",
    subtitle: "Encuentra respuestas a las dudas más comunes",
  },

  "noticias.html": {
    bg: "principal.jpg",
    badge: "Actualidad",
    title: "Noticias",
    subtitle: "Mantente informado sobre nuestras actividades",
  },

  // Configuración por defecto
  default: {
    bg: "principal.jpg",
    badge: "Compromiso Verde 2026",
    title: "Nuestro Planeta",
    subtitle: "Soluciones ambientales sostenibles",
  },
};

/**
 * Obtiene el nombre de la página actual
 */
function getCurrentPageName() {
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";
  return page === "" ? "index.html" : page;
}

/**
 * Carga y renderiza el componente hero
 */
async function loadHeroComponent(containerId = "hero-container") {
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn("Hero container not found");
    return;
  }

  try {
    // Obtener configuración para la página actual
    const currentPage = getCurrentPageName();
    const config = HERO_CONFIG[currentPage] || HERO_CONFIG["default"];

    // Permitir override con atributos data-*
    const customBg = container.getAttribute("data-hero-bg");
    const customBadge = container.getAttribute("data-hero-badge");
    const customTitle = container.getAttribute("data-hero-title");
    const customSubtitle = container.getAttribute("data-hero-subtitle");

    const finalBg = customBg || config.bg;
    const finalBadge = customBadge || config.badge;
    const finalTitle = customTitle || config.title;
    const finalSubtitle = customSubtitle || config.subtitle;

    // Determinar ruta correcta según ubicación del archivo
    const depth = (window.location.pathname.match(/\//g) || []).length - 1;
    const basePath = depth > 1 ? "../".repeat(depth - 1) : "./";

    // Renderizar el hero
    container.innerHTML = `
      <section class="hero-modern" style="background-image: linear-gradient(135deg, rgba(255, 112, 67, 0.4), rgba(230, 74, 25, 0.4)), url('${basePath}assets/img/${finalBg}');">
        <div class="hero-background">
          <div class="gradient-orb orb-1"></div>
          <div class="gradient-orb orb-2"></div>
          <div class="gradient-orb orb-3"></div>
        </div>

        <div class="container-modern hero-content-modern">
          <div class="hero-badge">
            <i class="fas fa-leaf"></i>
            <span>${finalBadge}</span>
          </div>

          <h1 class="hero-title-modern">
            <span class="title-line">Protegiendo</span>
            <span class="title-line highlight-gradient">${finalTitle}</span>
          </h1>

          <p class="hero-subtitle">
            ${finalSubtitle}
          </p>

          <div class="hero-cta-group">
            <a href="#servicios" class="btn-primary-sespa">
              Explorar Servicios <i class="fas fa-arrow-right"></i>
            </a>
            <a href="#demo" class="btn-secondary-sespa">
              <i class="fas fa-play-circle"></i> Ver Demo
            </a>
          </div>

          <div style="display: flex; gap: 60px; justify-content: center; margin-top: 80px; flex-wrap: wrap;">
            <div style="text-align: center;">
              <div style="font-size: 3rem; font-weight: 900; color: #2196F3; text-shadow: 0 2px 10px rgba(33, 150, 243, 0.3);">15+</div>
              <div style="color: rgba(255, 255, 255, 0.9); font-weight: 600; margin-top: 8px;">Años</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 3rem; font-weight: 900; color: #2196F3; text-shadow: 0 2px 10px rgba(33, 150, 243, 0.3);">98%</div>
              <div style="color: rgba(255, 255, 255, 0.9); font-weight: 600; margin-top: 8px;">Satisfacción</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 3rem; font-weight: 900; color: #2196F3; text-shadow: 0 2px 10px rgba(33, 150, 243, 0.3);">2.5M</div>
              <div style="color: rgba(255, 255, 255, 0.9); font-weight: 600; margin-top: 8px;">Ton. Procesadas</div>
            </div>
          </div>

          <a href="#content" style="color: rgba(255, 255, 255, 0.8); text-decoration: underline; margin-top: 40px; display: inline-block; font-weight: 500;">
            Desliza para descubrir
          </a>
        </div>
      </section>
    `;
  } catch (error) {
    console.error("Error loading hero component:", error);
  }
}

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => loadHeroComponent());
} else {
  loadHeroComponent();
}

// Exportar para uso manual si es necesario
window.loadHeroComponent = loadHeroComponent;
window.HERO_CONFIG = HERO_CONFIG;
