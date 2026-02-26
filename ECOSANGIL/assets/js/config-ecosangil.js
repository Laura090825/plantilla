// ==========================================
// CONFIGURACIÓN ESPECÍFICA - ECOSANGIL
// Servicios Ambientales y Sostenibilidad
// ==========================================

const ecosangilConfig = {
  name: "ECOSANGIL S.A E.S.P",
  slogan: "Compromiso Verde con el Planeta",
  footerSlogan:
    "Somos una Empresa comprometida con la sostenibilidad ambiental y la protección del medio ambiente, brindando servicios de aseo con prácticas ecológicas y responsables.",
  logo: "assets/img/ecosangil-logo.png", // Logo de ECOSANGIL
  logoType: "image", // Especifica que es una imagen, no un icono
  phone: "(607) 789-4560",
  whatsapp: "+57 310 789 4560",
  email: "info@ecosangil.com.co",
  address: "Calle 18 #12-45, Bucaramanga, Santander",
  schedule: "Lunes a Viernes: 7:30 AM - 5:30 PM | Sábados: 8:00 AM - 12:00 PM",

  // Navegación estándar (rutas internas de ECOSANGIL)
  navigation: [
    {
      label: "Principal",
      url: "index.html",
    },
    {
      label: "La Empresa",
      submenu: [
        {
          label: "Acerca de Nosotros",
          url: "pages/corporativo/quienes-somos.html",
        },
        {
          label: "Propósito y Horizonte",
          url: "pages/corporativo/mision-vision.html",
        },
        {
          label: "Organigrama",
          url: "pages/corporativo/estructura.html",
        },
        {
          label: "Reportes Institucionales",
          url: "pages/corporativo/informes.html",
        },
      ],
    },
    {
      label: "Cobertura Geográfica",
      url: "pages/corporativo/cobertura.html",
      submenu: [
        {
          label: "Ver Mapa de Cobertura",
          url: "pages/corporativo/cobertura.html",
          icon: "fas fa-map-marked-alt",
        },
        { label: "Cundinamarca", isHeader: true },
        { label: "Fusagasugá", url: "pages/corporativo/fusagasuga.html" },
        {
          label: "Zipaquirá",
          url: "pages/corporativo/zipaquira.html",
        },
        { label: "Tolima", isHeader: true },
        { label: "Ibagué", url: "pages/corporativo/ibague.html" },
        { label: "Espinal", url: "pages/corporativo/espinal.html" },
        { label: "Meta", isHeader: true },
        { label: "Villavicencio", url: "pages/corporativo/villavicencio.html" },
      ],
    },
    {
      label: "Nuestros Servicios",
      submenu: [
        {
          label: "Barrido y Limpieza en Vías Públicas",
          url: "pages/servicios/barrido-limpieza.html",
        },
        { label: "Campañas de Aseo", url: "pages/servicios/jornadas.html" },
        {
          label: "Recolección y Transporte de Desechos",
          url: "pages/servicios/recoleccion-transporte.html",
        },
      ],
    },
    {
      label: "Planes y Costos",
      url: "pages/facturacion/tarifas.html",
    },
    {
      label: "Servicio al Cliente",
      submenu: [
        { label: "PQRS", url: "pages/usuario/pqr.html" },
        { label: "Ayuda Común", url: "pages/usuario/preguntas.html" },
        { label: "Contacto", url: "pages/usuario/contacto.html" },
      ],
    },
    {
      label: "Información Pública",
      url: "pages/transparencia/transparencia.html",
    },
    {
      label: "Actualidad",
      url: "pages/usuario/noticias.html",
    },
  ],

  // Redes sociales
  social: {
    facebook: "https://facebook.com/ecosangil",
    twitter: "https://twitter.com/ecosangil",
    instagram: "https://instagram.com/ecosangil",
    linkedin: "https://linkedin.com/company/ecosangil",
    youtube: "https://youtube.com/ecosangil",
  },

  // Colores corporativos de ECOSANGIL
  colors: {
    primary: "#7c3aed", // Púrpura principal
    secondary: "#1e40af", // Azul
    accent: "#f59e0b", // Naranja
    dark: "#0f172a",
    light: "#f8fafc",
  },
};

// Cargar configuración de ECOSANGIL
if (typeof loadCompanyConfig === "function") {
  loadCompanyConfig(ecosangilConfig);

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
