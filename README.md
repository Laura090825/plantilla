# Plantilla Web para Empresas de Servicios Públicos de Aseo E.S.P.

Esta es una plantilla web profesional y completa diseñada específicamente para empresas de servicios públicos de aseo en Colombia, siguiendo las normativas de transparencia y los estándares del sector.

## 📋 Características Principales

### ✅ Secciones Incluidas

- **Barra de Acceso Rápido**: Enlaces directos a PQR, certificados y pagos en línea
- **Navegación Principal**: Menú completo con submenús desplegables
- **Banner Hero**: Imagen destacada con llamado a la acción
- **Servicios**:
  - Recolección de residuos
  - Aprovechamiento y reciclaje
  - Barrido y limpieza
  - Residuos peligrosos
  - Residuos de construcción
  - Residuos voluminosos
- **Información Corporativa**: Quiénes somos, misión, visión, estructura
- **Transparencia y Normatividad**: Documentación legal, contratación, datos abiertos
- **Cultura Ciudadana**: Educación ambiental y separación de residuos
- **Estadísticas**: Cifras de impacto con animación
- **Noticias y Eventos**: Sección de actualizaciones
- **Contacto**: Formulario y datos de contacto
- **Footer Completo**: Enlaces, redes sociales, certificaciones

### 🎨 Diseño

- **Responsive**: Se adapta perfectamente a dispositivos móviles, tablets y escritorio
- **Moderno**: Diseño limpio y profesional
- **Accesible**: Estructura semántica y navegación intuitiva
- **Colores**: Paleta verde (típica del sector ambiental) personalizable

### 🚀 Funcionalidades

- Menú móvil hamburguesa
- Navegación suave entre secciones
- Animaciones al hacer scroll
- Contador animado de estadísticas
- Botón flotante de WhatsApp
- Botón de volver arriba
- Formulario de contacto
- Submenús desplegables

## 📁 Estructura de Archivos

```
plantilla-pagina-web/
│
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── README.md           # Este archivo
│
└── assets/             # Carpeta para recursos (crear)
    ├── logo.png
    ├── hero-bg.jpg
    ├── cultura-ciudadana.jpg
    ├── noticia1.jpg
    ├── noticia2.jpg
    ├── noticia3.jpg
    ├── iso9001.png
    └── iso14001.png
```

## 🛠️ Instalación y Uso

### 1. Preparación

1. Descarga todos los archivos en una carpeta
2. Crea la carpeta `assets` en el mismo nivel que los archivos HTML, CSS y JS
3. Añade tus imágenes a la carpeta `assets`

### 2. Personalización

#### Colores

En el archivo `styles.css`, modifica las variables CSS al inicio:

```css
:root {
  --primary-color: #2e7d32; /* Color principal */
  --secondary-color: #43a047; /* Color secundario */
  --accent-color: #66bb6a; /* Color de acento */
  --dark-color: #1b5e20; /* Color oscuro */
  --light-color: #e8f5e9; /* Color claro */
}
```

#### Textos e Información

En el archivo `index.html`, busca y reemplaza:

- `"EMPRESA DE ASEO"` → Nombre de tu empresa
- `"E.S.P."` → Tu denominación legal
- Números de teléfono
- Direcciones de correo
- Dirección física
- Horarios de atención

#### Logo

Coloca tu logo en `assets/logo.png` (formato PNG con fondo transparente, tamaño recomendado: 200x60px)

#### Imágenes

Añade imágenes con estos nombres en la carpeta `assets`:

- `hero-bg.jpg` (1920x500px) - Imagen del banner principal
- `cultura-ciudadana.jpg` (800x600px) - Sección de cultura
- `noticia1.jpg`, `noticia2.jpg`, `noticia3.jpg` (600x400px) - Noticias
- `iso9001.png`, `iso14001.png` - Certificaciones

### 3. Publicación

Para publicar la página web:

1. **Hosting Local**: Abre `index.html` directamente en tu navegador
2. **Servidor Web**: Sube todos los archivos a tu servidor mediante FTP
3. **GitHub Pages**: Sube los archivos a un repositorio y activa GitHub Pages

## 📱 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge (últimas versiones)
- ✅ Dispositivos móviles iOS y Android
- ✅ Tablets
- ✅ Responsive desde 320px hasta 1920px+

## 🎯 Cumplimiento Normativo

Esta plantilla incluye secciones para cumplir con:

- **Ley de Transparencia**: Sección de transparencia con información corporativa
- **Servicio al Usuario**: PQR, certificados, información de contacto
- **Normatividad Ambiental**: Servicios de recolección y aprovechamiento
- **Educación Ciudadana**: Cultura del aseo y separación en la fuente

## 🔧 Personalización Avanzada

### Agregar Nuevas Secciones

1. Copia una sección existente en `index.html`
2. Modifica el contenido
3. Añade estilos específicos en `styles.css` si es necesario
4. Actualiza el menú de navegación

### Cambiar Fuentes

Añade en el `<head>` de `index.html`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
  rel="stylesheet"
/>
```

Y en `styles.css`:

```css
body {
  font-family: "Poppins", sans-serif;
}
```

### Integrar con Backend

Para el formulario de contacto, en `script.js` reemplaza la sección comentada con tu endpoint:

```javascript
fetch("/api/contacto", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});
```

## 📞 Contacto y Soporte

Para soporte técnico o personalizaciones adicionales, consulta con tu equipo de desarrollo web.

## 📄 Licencia

Esta plantilla es de uso libre para empresas de servicios públicos.

## 🆕 Actualizaciones Futuras Recomendadas

- [ ] Sistema de gestión de contenido (CMS)
- [ ] Integración con plataforma de pagos
- [ ] Portal de usuario con login
- [ ] Mapa interactivo de rutas
- [ ] Chatbot de atención al cliente
- [ ] Versión multiidioma

---

**Versión**: 1.0  
**Última actualización**: Enero 2025  
**Desarrollado para**: Empresas de Servicios Públicos de Aseo en Colombia


