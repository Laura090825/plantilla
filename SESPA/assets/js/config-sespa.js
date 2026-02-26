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
  phone: "(601) 456-7890",
  whatsapp: "+57 300 456 7890",
  email: "contacto@sespa.com.co",
  address: "Carrera 15 #25-30, Bogotá D.C.",
  schedule: "Lunes a Viernes: 7:00 AM - 6:00 PM | Sábados: 8:00 AM - 1:00 PM",

  // Navegación estándar (rutas internas de SESPA)
  navigation: [
    {
      label: "Inicio",
      url: "index.html",
    },
    {
      label: "Corporativo",
      submenu: [
        { label: "Quiénes Somos", url: "pages/corporativo/quienes-somos.html" },
        {
          label: "Misión y Visión",
          url: "pages/corporativo/mision-vision.html",
        },
        {
          label: "Estructura Organizacional",
          url: "pages/corporativo/estructura.html",
        },
        {
          label: "Informes de Gestión",
          url: "pages/corporativo/informes.html",
        },
      ],
    },
    {
      label: "Dónde Operamos",
      url: "pages/corporativo/cobertura.html",
      submenu: [
        {
          label: "Ver Cobertura General",
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
      label: "Servicios",
      submenu: [
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
      label: "Tarifas",
      url: "pages/facturacion/tarifas.html",
    },
    {
      label: "Atención al Usuario",
      submenu: [
        { label: "PQR", url: "pages/usuario/pqr.html" },
        { label: "Preguntas Frecuentes", url: "pages/usuario/preguntas.html" },
        { label: "Contáctenos", url: "pages/usuario/contacto.html" },
      ],
    },
    {
      label: "Transparencia",
      url: "pages/transparencia/transparencia.html",
    },
    {
      label: "Noticias",
      url: "pages/usuario/noticias.html",
    },
  ],

  // Redes sociales
  social: {
    facebook: "https://facebook.com/sespa",
    twitter: "https://twitter.com/sespa",
    instagram: "https://instagram.com/sespa",
    linkedin: "https://linkedin.com/company/sespa",
    youtube: "https://youtube.com/sespa",
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

    if (headerElement && headerElement.render) {
      headerElement.render();
    }

    if (topbarElement && topbarElement.render) {
      topbarElement.render();
    }
  }, 0);
}
