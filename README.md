# SESPA - Plantilla Web Corporativa Ambiental

Plantilla web moderna con diseño ecológico para **SESPA** (Servicios Especializados y Protección Ambiental), construida con componentes web reutilizables.

## 📁 Estructura del Proyecto

```
plantilla-pagina-web/
├── SESPA/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── styles.css          # Estilos base
│   │   │   └── sespa-styles.css    # Tema verde SESPA
│   │   ├── js/
│   │   │   ├── components.js       # Web Components
│   │   │   ├── config-sespa.js     # Configuración SESPA
│   │   │   └── script.js           # Scripts generales
│   │   └── img/
│   │       └── image.png           # Logo SESPA
│   ├── pages/
│   │   ├── corporativo/            # Páginas corporativas
│   │   ├── usuario/                # Atención al usuario
│   │   ├── facturacion/            # Facturación y tarifas
│   │   └── transparencia/          # Transparencia y acceso a información
│   └── index.html                  # Página de inicio
└── README.md
```

## 🎨 Diseño SESPA

### Identidad Visual

- **Color Principal**: Verde #27ae60 (ecológico)
- **Color Secundario**: Turquesa #16a085 (agua/sostenibilidad)
- **Color Acento**: Naranja #f39c12 (energía)
- **Estilo**: Moderno, limpio, con temática ambiental

### Características Únicas

- ✅ Breadcrumb con gradiente verde y efectos ondulados
- ✅ Headers de página con bordes verdes superiores
- ✅ Timeline animado con iconos circulares
- ✅ Value cards con efectos hover 3D
- ✅ Tablas con headers en gradiente
- ✅ Highlight boxes con backgrounds ecológicos
- ✅ Menú compacto y bien organizado
- ✅ Submenús elegantes con separadores de sección

## 🧩 Sistema de Componentes Web

Componentes reutilizables basados en Web Components API:

### `<site-topbar>`

Barra superior con información de contacto y enlaces rápidos.

### `<site-header>`

Cabecera con logo y navegación principal con ajuste automático de rutas.

### `<site-footer>`

Pie de página completo con información corporativa.

### `<site-backtotop>`

Botón flotante para volver al inicio de la página.

## 📄 Páginas Incluidas (14 páginas)

### Corporativo

- Quiénes Somos
- Misión y Visión
- Estructura Organizacional
- Informes de Gestión
- Cobertura

### Atención al Usuario

- PQR
- Preguntas Frecuentes
- Contacto
- Noticias
- Certificados

### Facturación

- Tarifas
- Factura
- Pago

### Transparencia

- Transparencia

## 🚀 Inicio Rápido

### Desarrollo Local

1. Abrir el proyecto en VS Code
2. Instalar extensión **Live Server**
3. Click derecho en `SESPA/index.html` → "Open with Live Server"
4. Navegar a `http://localhost:5500/SESPA/`

### Producción

Subir la carpeta `SESPA/` completa al servidor web.

## 🎨 Personalización

### 1. Cambiar Información de la Empresa

Editar: `SESPA/assets/js/config-sespa.js`

```javascript
const sespaConfig = {
  name: "SESPA",
  slogan: "Protección Ambiental",
  phone: "(601) 456-7890",
  whatsapp: "+57 300 456 7890",
  email: "contacto@sespa.com.co",
  // ...
};
```

### 2. Modificar Colores

Editar variables CSS en: `SESPA/assets/css/sespa-styles.css`

```css
:root {
  --sespa-green: #27ae60;
  --sespa-teal: #16a085;
  --sespa-orange: #f39c12;
}
```

### 3. Cambiar Logo

Reemplazar: `SESPA/assets/img/image.png`

### 4. Agregar Página Nueva

1. Crear HTML en `SESPA/pages/categoria/nueva-pagina.html`
2. Incluir componentes web
3. Agregar al menú en `config-sespa.js`

## 🛠️ Tecnologías

- HTML5
- CSS3 (Variables, Gradientes, Flexbox, Grid)
- JavaScript ES6+ (Web Components API)
- Font Awesome 6.4.0

## 📱 Responsive

- **Desktop**: > 992px
- **Tablet**: 768px - 992px
- **Mobile**: < 768px

## 🔧 Funcionalidades

- Ajuste automático de rutas según profundidad
- Navegación dinámica generada desde config
- Submenús multinivel con headers de sección
- Efectos hover animados
- Timeline con iconos
- Cards con efectos 3D

## 📦 Archivos Clave

| Archivo            | Propósito          |
| ------------------ | ------------------ |
| `components.js`    | Web components     |
| `config-sespa.js`  | Configuración      |
| `script.js`        | Scripts auxiliares |
| `styles.css`       | Estilos base       |
| `sespa-styles.css` | Tema SESPA         |

## 🌐 Navegadores Soportados

Chrome/Edge (90+), Firefox (88+), Safari (14+), Opera (76+)

## 📝 Notas

- Requiere servidor HTTP (no abrir con `file://`)
- Forzar recarga: **Ctrl + F5**
- UTF-8 encoding en todos los archivos

---

**SESPA** © 2026 - Plantilla Web Corporativa Ambiental
