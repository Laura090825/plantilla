// ==========================================
// SISTEMA DE COMPONENTES WEB REUTILIZABLES
// ==========================================

// Configuración de empresa actual (se carga desde archivo config)
let companyConfig = {
  name: "SESPA UNIVERSAL S.A E.S.P",
  slogan: "Su empresa amiga",
  footerSlogan:
    "Somos una Empresa comprometida con la prestación integral del servicio público de aseo, apoyada en herramientas tecnológicas y personal capacitado.",
  logo: "fa-building",
  phone: "(XX) XXX-XXXX",
  whatsapp: "+57 XXX XXX XXXX",
  email: "info@ejemplo.com",
  address: "Calle o Carrera, Ciudad",
  schedule: "Lunes a viernes: 8:00 AM - 5:00 PM",
  // Navegación se define por empresa
  navigation: [],
  // Colores personalizables
  colors: {
    primary: "#3498db",
    secondary: "#2c3e50",
    accent: "#e74c3c",
  },
};

// Función para cargar configuración de empresa
function loadCompanyConfig(config) {
  companyConfig = { ...companyConfig, ...config };
}

// ==========================================
// COMPONENTE: TOPBAR (Barra Superior)
// ==========================================
class SiteTopbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  adjustUrl(url) {
    if (!url || url.startsWith("#") || url.startsWith("http")) {
      return url;
    }

    const currentPath = window.location.pathname;
    if (currentPath.includes("/pages/")) {
      return "../../" + url;
    }

    return url;
  }

  render() {
    this.innerHTML = `
      <div class="top-bar">
        <div class="container">
          <div class="top-bar-content">
            <div class="quick-links">
              <a href="mailto:${companyConfig.email}"><i class="fas fa-paper-plane"></i> ${companyConfig.email}</a>
              <a href="tel:${companyConfig.phone}"><i class="fas fa-phone-square"></i> ${companyConfig.phone}</a>
              <a href="#"><i class="fas fa-hourglass-half"></i> ${companyConfig.schedule}</a>
            </div>
            <div class="top-bar-actions">
              <a href="${this.adjustUrl("pages/usuario/pqr.html")}" class="btn-sm btn-contrast">Portal Usuario</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

// ==========================================
// COMPONENTE: HEADER (Cabecera con navegación)
// ==========================================
class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const nav = this.generateNavigation();

    // Ajustar la ruta del logo si es una imagen
    const logoSrc =
      companyConfig.logoType === "image"
        ? this.adjustUrl(companyConfig.logo)
        : companyConfig.logo;
    const logoHTML =
      companyConfig.logoType === "image"
        ? `<img src="${logoSrc}" alt="${companyConfig.name}" class="logo-image">`
        : `<i class="fas ${companyConfig.logo}"></i>`;

    // Ajustar la ruta del enlace del logo (generalmente index.html)
    const homeUrl = this.adjustUrl("index.html");

    this.innerHTML = `
      <header class="site-header">
        <div class="container">
          <div class="header-content">
            <a href="${homeUrl}" class="logo">
              ${logoHTML}
              <div class="logo-text">
                <span class="logo-title">${companyConfig.name}</span>
                <span class="logo-subtitle">${companyConfig.slogan}</span>
              </div>
            </a>
            
            <nav class="nav-menu">
              <button class="mobile-toggle" aria-label="Toggle menu">
                <i class="fas fa-ellipsis-v"></i>
              </button>
              ${nav}
            </nav>
          </div>
        </div>
      </header>
    `;

    // Agregar funcionalidad del menú móvil
    this.setupMobileMenu();
  }

  // Función para ajustar URLs basándose en la profundidad de la página actual
  adjustUrl(url) {
    if (!url || url.startsWith("#") || url.startsWith("http")) {
      return url;
    }

    // Detectar profundidad de la página actual
    const currentPath = window.location.pathname;
    const depth = (currentPath.match(/\//g) || []).length - 1;

    // Si estamos en una subcarpeta (pages/...), agregar ../ para volver a la raíz
    if (currentPath.includes("/pages/")) {
      return "../../" + url;
    }

    return url;
  }

  generateNavigation() {
    if (!companyConfig.navigation || companyConfig.navigation.length === 0) {
      // Navegación por defecto
      return `
        <ul class="nav-links">
          <li><a href="index.html"><i class="fas fa-home"></i> Inicio</a></li>
          <li class="dropdown">
            <a href="#"><i class="fas fa-building"></i> Corporativo <i class="fas fa-angle-down"></i></a>
            <ul class="submenu">
              <li><a href="pages/corporativo/quienes-somos.html">Quiénes Somos</a></li>
              <li><a href="pages/corporativo/mision-vision.html">Misión y Visión</a></li>
              <li><a href="pages/corporativo/estructura.html">Estructura</a></li>
            </ul>
          </li>
          <li><a href="#"><i class="fas fa-user-friends"></i> Usuario</a></li>
          <li><a href="#"><i class="fas fa-phone-square"></i> Contacto</a></li>
        </ul>
      `;
    }

    // Generar navegación personalizada
    let navHTML = '<ul class="nav-links">';
    companyConfig.navigation.forEach((item) => {
      if (item.submenu) {
        navHTML += `
          <li class="dropdown">
            <a href="${this.adjustUrl(item.url) || "#"}">
              ${item.icon ? `<i class="${item.icon}"></i>` : ""} 
              ${item.label} 
              <i class="fas fa-angle-down"></i>
            </a>
            <ul class="submenu">
              ${item.submenu
                .map((sub) => {
                  if (sub.isHeader) {
                    // Renderizar como header de sección con clase CSS
                    return `<li class="submenu-header">${sub.label}</li>`;
                  } else if (sub.submenu) {
                    // Renderizar submenu anidado (tercer nivel)
                    return `
                      <li class="dropdown-nested">
                        <a href="${this.adjustUrl(sub.url) || "#"}">
                          ${sub.icon ? `<i class="${sub.icon}"></i>` : ""}${sub.label}
                          <i class="fas fa-angle-right"></i>
                        </a>
                        <ul class="submenu-nested">
                          ${sub.submenu
                            .map((nested) => {
                              if (nested.isHeader) {
                                return `<li class="submenu-header">${nested.label}</li>`;
                              } else {
                                return `<li><a href="${this.adjustUrl(nested.url)}">${nested.icon ? `<i class="${nested.icon}"></i>` : ""}${nested.label}</a></li>`;
                              }
                            })
                            .join("")}
                        </ul>
                      </li>
                    `;
                  } else {
                    // Renderizar como link normal
                    return `<li><a href="${this.adjustUrl(sub.url)}">${sub.icon ? `<i class="${sub.icon}"></i>` : ""}${sub.label}</a></li>`;
                  }
                })
                .join("")}
            </ul>
          </li>
        `;
      } else {
        navHTML += `
          <li>
            <a href="${this.adjustUrl(item.url)}">
              ${item.icon ? `<i class="${item.icon}"></i>` : ""} 
              ${item.label}
            </a>
          </li>
        `;
      }
    });
    navHTML += "</ul>";
    return navHTML;
  }

  setupMobileMenu() {
    const toggle = this.querySelector(".mobile-toggle");
    const nav = this.querySelector(".nav-links");

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        const icon = toggle.querySelector("i");
        icon.classList.toggle("fa-ellipsis-v");
        icon.classList.toggle("fa-times");
      });
    }
  }
}

// ==========================================
// COMPONENTE: FOOTER (Pie de página)
// ==========================================
class SiteFooter extends HTMLElement {
  adjustUrl(url) {
    if (!url || url.startsWith("#") || url.startsWith("http")) {
      return url;
    }

    const currentPath = window.location.pathname;
    if (currentPath.includes("/pages/")) {
      return "../../" + url;
    }

    return url;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // Ajustar logo si es imagen
    const logoSrc =
      companyConfig.logoType === "image"
        ? this.adjustUrl(companyConfig.logo)
        : companyConfig.logo;
    const logoHTML =
      companyConfig.logoType === "image"
        ? `<img src="${logoSrc}" alt="${companyConfig.name}" style="max-height: 50px;">`
        : `<i class="fas ${companyConfig.logo}"></i>`;

    this.innerHTML = `
      <footer class="footer">
        <div class="footer-main">
          <div class="container">
            <div class="footer-grid">
              <div class="footer-column">
                <div class="footer-logo">
                  ${logoHTML}
                  <h3>${companyConfig.name}</h3>
                </div>
                <p>${companyConfig.footerSlogan || companyConfig.slogan}</p>
                <div class="footer-social">
                  ${companyConfig.social?.facebook ? `<a href="${companyConfig.social.facebook}" aria-label="Facebook"><i class="fab fa-facebook"></i></a>` : ""}
                  ${companyConfig.social?.twitter ? `<a href="${companyConfig.social.twitter}" aria-label="Twitter"><i class="fab fa-twitter"></i></a>` : ""}
                  ${companyConfig.social?.instagram ? `<a href="${companyConfig.social.instagram}" aria-label="Instagram"><i class="fab fa-instagram"></i></a>` : ""}
                  ${companyConfig.social?.linkedin ? `<a href="${companyConfig.social.linkedin}" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>` : ""}
                  ${companyConfig.social?.youtube ? `<a href="${companyConfig.social.youtube}" aria-label="YouTube"><i class="fab fa-youtube"></i></a>` : ""}
                </div>
              </div>

              <div class="footer-column">
                <h4>Enlaces Rápidos</h4>
                <ul class="footer-links">
                  <li><a href="${this.adjustUrl("index.html")}">Portal</a></li>
                  <li><a href="${this.adjustUrl("pages/corporativo/quienes-somos.html")}">Sobre SESPA</a></li>
                  <li><a href="${this.adjustUrl("pages/usuario/noticias.html")}">Novedades</a></li>
                  <li><a href="${this.adjustUrl("pages/usuario/contacto.html")}">Contacto</a></li>
                </ul>
              </div>

              <div class="footer-column">
                <h4>Contacto</h4>
                <ul class="footer-contact">
                  <li><i class="fas fa-map-pin"></i> ${companyConfig.address}</li>
                  <li><i class="fas fa-phone-square"></i> <a href="tel:${companyConfig.phone}">${companyConfig.phone}</a></li>
                  <li><i class="fas fa-paper-plane"></i> <a href="mailto:${companyConfig.email}">${companyConfig.email}</a></li>
                  <li><i class="fab fa-whatsapp"></i> <a href="https://wa.me/${companyConfig.whatsapp.replace(/[^0-9]/g, "")}">${companyConfig.whatsapp}</a></li>
                </ul>
              </div>

              <div class="footer-column">
                <h4>Horarios</h4>
                <p>${companyConfig.schedule}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container">
            <div class="footer-bottom-content">
              <p>&copy; ${new Date().getFullYear()} ${companyConfig.name}. Todos los derechos reservados.</p>
              <div class="footer-legal-links">
                <a href="${this.adjustUrl("pages/usuario/privacidad.html")}">Políticas de Privacidad</a>
                <a href="${this.adjustUrl("pages/usuario/terminos.html")}">Términos y Condiciones</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

// ==========================================
// COMPONENTE: BACK TO TOP (Botón volver arriba)
// ==========================================
class SiteBackToTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <button class="back-to-top" id="backToTop" aria-label="Volver arriba">
        <i class="fas fa-angle-double-up"></i>
      </button>
    `;

    const button = this.querySelector("#backToTop");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        button.classList.add("show");
      } else {
        button.classList.remove("show");
      }
    });

    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}

// ==========================================
// COMPONENTE: BREADCRUMB (Migas de pan)
// ==========================================
class SiteBreadcrumb extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="breadcrumb-section">
        <div class="container">
          ${this.innerHTML}
        </div>
      </div>
    `;
  }
}

// ==========================================
// REGISTRAR COMPONENTES
// ==========================================
customElements.define("site-topbar", SiteTopbar);
customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
customElements.define("site-backtotop", SiteBackToTop);
customElements.define("site-breadcrumb", SiteBreadcrumb);

// Exportar función de configuración para uso global
window.loadCompanyConfig = loadCompanyConfig;
