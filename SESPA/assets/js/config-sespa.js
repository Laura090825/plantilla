// ==========================================
// CONFIGURACIÓN ESPECÍFICA - SESPA
// Servicios Especializados y Protección Ambiental
// ==========================================

const sespaConfig = {
  name: "SESPA UNIVERSAL S.A E.S.P",
  slogan: "Su empresa amiga",
  footerSlogan:
    "Somos una Empresa comprometida con la prestación integral del servicio público de aseo, apoyada en herramientas tecnológicas y personal capacitado.",
  logo: "assets/img/image.png", // Logo de SESPA
  logoType: "image", // Especifica que es una imagen, no un icono
  phone: "315 6953179",
  whatsapp: "315 6953179",
  email: "contacto@sespa.com.co",
  address: "Cra. 14 #11-30, Socorro, Santander",
  schedule: "Lunes a Viernes: 7:00 AM - 6:00 PM | Sábados: 8:00 AM - 1:00 PM",

  // Navegación estándar (rutas internas de SESPA)
  navigation: [
    {
      label: "Portal",
      url: "index.html",
    },
    {
      label: "Institucional",
      submenu: [
        { label: "Sobre SESPA", url: "pages/corporativo/quienes-somos.html" },
        {
          label: "Misión y Visión",
          url: "pages/corporativo/mision-vision.html",
        },
        {
          label: "Organigrama Empresarial",
          url: "pages/corporativo/estructura.html",
        },
        {
          label: "Informes de Gestión",
          url: "pages/corporativo/informes.html",
        },
        {
          label: "Novedades",
          url: "pages/usuario/noticias.html",
        },
      ],
    },
    {
      label: "Soluciones Ambientales",
      submenu: [
        {
          label: "Zonas de Servicio",
          url: "pages/corporativo/cobertura.html",
          submenu: [
            {
              label: "Ver Mapa Completo",
              url: "pages/corporativo/cobertura.html",
              icon: "fas fa-map-marked-alt",
            },
            { label: "Santander", isHeader: true },
            { label: "Socorro", url: "pages/corporativo/socorro.html" },
            {
              label: "Palmas del Socorro",
              url: "pages/corporativo/palmas-del-socorro.html",
            },
            { label: "Boyacá", isHeader: true },
            { label: "Moniquirá", url: "pages/corporativo/moniquira.html" },
            { label: "La Guajira", isHeader: true },
            { label: "Barrancas", url: "pages/corporativo/barrancas.html" },
          ],
        },
        {
          label: "Barrido y Limpieza en Sitios Públicos",
          url: "pages/servicios/barrido-limpieza.html",
        },
        { label: "Jornadas", url: "pages/servicios/jornadas.html" },
        {
          label: "Recolección y Transporte de Residuos",
          url: "pages/servicios/recoleccion-transporte.html",
        },
      ],
    },
    {
      label: "Alquiler de Vehículos Compactadores",
      url: "pages/servicios/alquiler-vehiculos.html",
    },
    {
      label: "Transparencia y Gestión",
      submenu: [
        { label: "Costos y Tarifas", url: "pages/facturacion/tarifas.html" },
        {
          label: "Rendición de Cuentas",
          url: "pages/transparencia/transparencia.html",
        },
      ],
    },
    {
      label: "Centro de Ayuda",
      submenu: [
        { label: "PQR", url: "pages/usuario/pqr.html" },
        { label: "Preguntas Frecuentes", url: "pages/usuario/preguntas.html" },
        { label: "Contáctenos", url: "pages/usuario/contacto.html" },
      ],
    },
  ],

  // Redes sociales
  social: {
    facebook: "https://www.facebook.com/sespauniversal",
    instagram: "https://www.instagram.com/sespauniversalsa/",
    youtube: "https://www.youtube.com/@sespauniversalsaesp2188",
  },

  // Colores corporativos de SESPA (diferentes a la plantilla principal)
  colors: {
    primary: "#27ae60", // Verde principal
    secondary: "#16a085", // Verde azulado
    accent: "#f39c12", // Naranja/Amarillo
    dark: "#2c3e50",
    light: "#ecf0f1",
  },
};

// Cargar configuración de SESPA
if (typeof loadCompanyConfig === "function") {
  loadCompanyConfig(sespaConfig);

  // Re-renderizar los componentes después de cargar la configuración
  // Esto es necesario porque los componentes se renderizan antes de cargar la config
  setTimeout(() => {
    const headerElement = document.querySelector("site-header");
    const topbarElement = document.querySelector("site-topbar");
    const footerElement = document.querySelector("site-footer");

    if (headerElement && headerElement.render) {
      headerElement.render();
    }

    if (topbarElement && topbarElement.render) {
      topbarElement.render();
    }

    if (footerElement && footerElement.render) {
      footerElement.render();
    }
  }, 0);
}
