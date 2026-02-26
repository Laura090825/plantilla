# 🚀 INICIO RÁPIDO - SESPA

## ✅ ¿Qué se ha creado?

### 📁 Estructura SESPA

```
SESPA/
├── assets/
│   ├── css/
│   │   └── sespa-styles.css        ✅ Estilos únicos de SESPA
│   ├── js/
│   │   └── config-sespa.js         ✅ Configuración de SESPA
│   └── img/
│       └── image.png               ✅ Logo de SESPA
├── pages/
│   ├── corporativo/
│   │   ├── quienes-somos.html      ✅ Quiénes Somos
│   │   └── mision-vision.html      ✅ Misión y Visión
│   ├── usuario/
│   │   ├── pqr.html                ✅ PQR
│   │   └── contacto.html           ✅ Contacto
│   ├── facturacion/
│   │   └── tarifas.html            ✅ Tarifas
│   ├── servicios/                  📁 Para servicios
│   └── transparencia/              📁 Para transparencia
└── index.html                      ✅ Página principal SESPA
```

### 🎨 Diseño Único de SESPA

**Características principales:**

- 🟢 Paleta de colores verde ambiental
- 🌿 Logo con icono de hoja
- ✨ Animaciones modernas y suaves
- 💫 Cards con efectos 3D al hover
- 🎯 Diseño enfocado en sostenibilidad

---

## 🖥️ Ver SESPA en Acción

### Opción 1: Abrir directamente

1. Ve a la carpeta `SESPA/`
2. Haz doble clic en `index.html`
3. Se abrirá en tu navegador

### Opción 2: Servidor local (recomendado)

```powershell
# En PowerShell, desde la raíz del proyecto:
cd SESPA
python -m http.server 8000

# O con Node.js:
npx http-server

# Luego abre: http://localhost:8000
```

---

## ⚙️ Personalizar SESPA

### 1️⃣ Cambiar Información Básica

Edita: `SESPA/assets/js/config-sespa.js`

```javascript
const sespaConfig = {
  name: "SESPA", // ← Cambiar nombre
  slogan: "Tu eslogan", // ← Cambiar eslogan
  logo: "fa-leaf", // ← Cambiar icono
  phone: "(601) 456-7890", // ← Tu teléfono
  whatsapp: "+57 300 456 7890", // ← Tu WhatsApp
  email: "contacto@sespa.com.co", // ← Tu email
  address: "Tu dirección", // ← Tu dirección
  // ... más campos
};
```

### 2️⃣ Cambiar Colores

Edita: `SESPA/assets/css/sespa-styles.css`

```css
:root {
  --sespa-green: #27ae60; /* ← Color principal */
  --sespa-teal: #16a085; /* ← Color secundario */
  --sespa-orange: #f39c12; /* ← Color acento */
  /* ... más colores */
}
```

### 3️⃣ Cambiar Navegación

En `config-sespa.js`, busca la sección `navigation`:

```javascript
navigation: [
  {
    label: "Inicio",
    url: "index.html",
    icon: "fas fa-home",
  },
  {
    label: "Servicios",
    icon: "fas fa-cogs",
    submenu: [
      { label: "Servicio 1", url: "#servicio1" },
      { label: "Servicio 2", url: "#servicio2" },
    ],
  },
];
```

---

## 🎯 Diferencias con la Plantilla Principal

| Aspecto         | Principal   | SESPA          |
| --------------- | ----------- | -------------- |
| **Color**       | Azul        | Verde          |
| **Logo**        | Edificio    | Hoja           |
| **Estilo**      | Corporativo | Ambiental      |
| **Animaciones** | Básicas     | Avanzadas      |
| **Cards**       | Simples     | Con efectos 3D |

---

## 📝 Contenido de SESPA

### Secciones Incluidas:

1. ✅ **Hero Banner** - Banner principal impactante
2. ✅ **Servicios** - 6 tarjetas de servicios ambientales
3. ✅ **Estadísticas** - 4 contadores con datos
4. ✅ **Valores** - 3 valores corporativos
5. ✅ **CTA** - Llamado a la acción
6. ✅ **Certificaciones** - 4 certificaciones

### Componentes:

- ✅ Topbar con información de contacto
- ✅ Header con navegación personalizada
- ✅ Footer con redes sociales
- ✅ Botón volver arriba

---

## 🔧 Modificar Contenido

### Cambiar Texto del Hero

Edita: `SESPA/index.html` (línea ~35)

```html
<h1>
  Tu Título Principal
  <span class="highlight">Tu Subtítulo</span>
</h1>
<p>Tu descripción aquí</p>
```

### Agregar/Quitar Servicios

Edita: `SESPA/index.html` (líneas ~70-150)

```html
<div class="service-card-sespa">
  <div class="service-icon-sespa">
    <i class="fas fa-tu-icono"></i>
  </div>
  <h3>Tu Servicio</h3>
  <p>Descripción del servicio</p>
  <a href="#" class="btn-link-sespa">
    Conocer más <i class="fas fa-arrow-right"></i>
  </a>
</div>
```

### Cambiar Estadísticas

Edita: `SESPA/index.html` (líneas ~180-200)

```html
<div class="stat-item-sespa">
  <div class="stat-number-sespa">123</div>
  <div class="stat-label-sespa">Tu Métrica</div>
</div>
```

---

## 🎨 Cambiar Diseño de Cards

### Opción 1: Cambiar color de icono

En `sespa-styles.css`, busca `.service-icon-sespa`:

```css
.service-icon-sespa {
  background: linear-gradient(135deg, #27ae60, #16a085);
  /* Cambia los colores del gradiente */
}
```

### Opción 2: Cambiar efecto hover

```css
.service-card-sespa:hover {
  transform: translateY(-10px); /* Cambia -10px por otro valor */
}
```

### Opción 3: Cambiar bordes redondeados

```css
:root {
  --radius-md: 15px; /* Cambia este valor */
}
```

---

## 🌐 Agregar Más Páginas a SESPA

### 1. Crear nueva página

```powershell
# En la carpeta SESPA/
New-Item -Path "nosotros.html" -ItemType File
```

### 2. Estructura básica

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <link rel="stylesheet" href="assets/css/sespa-styles.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
  </head>
  <body>
    <site-topbar></site-topbar>
    <site-header></site-header>

    <!-- Tu contenido aquí -->

    <site-footer></site-footer>
    <site-backtotop></site-backtotop>

    <script src="../assets/js/components.js"></script>
    <script src="assets/js/config-sespa.js"></script>
    <script src="../assets/js/script.js"></script>
  </body>
</html>
```

### 3. Actualizar navegación

En `config-sespa.js`, agrega el enlace:

```javascript
{
  label: "Nosotros",
  url: "nosotros.html",
  icon: "fas fa-info-circle"
}
```

---

## 🚀 Tips y Trucos

### 💡 Cambiar iconos

Visita: https://fontawesome.com/icons

- Busca el icono que quieras
- Copia la clase (ej: `fas fa-heart`)
- Úsala en tu HTML o configuración

### 🎨 Generador de colores

Usa: https://coolors.co/

- Genera paletas de colores
- Copia los códigos hex
- Pégalos en `sespa-styles.css`

### 📱 Preview responsive

En el navegador:

- Presiona `F12`
- Click en icono móvil (arriba izquierda)
- Selecciona diferentes dispositivos

---

## 🐛 Solución de Problemas

### ❌ "Los componentes no se ven"

**Solución:** Verifica que los scripts estén en este orden:

1. `components.js`
2. `config-sespa.js`
3. `script.js`

### ❌ "Los estilos no se aplican"

**Solución:**

- Verifica la ruta del CSS: `assets/css/sespa-styles.css`
- Limpia caché del navegador: `Ctrl + F5`

### ❌ "El menú no funciona en móvil"

**Solución:**

- Asegúrate de que `script.js` esté cargado
- Verifica la consola del navegador (F12)

---

## 📋 Checklist de Personalización

- [ ] Cambiar nombre de empresa en `config-sespa.js`
- [ ] Actualizar teléfono y WhatsApp
- [ ] Cambiar email y dirección
- [ ] Personalizar navegación
- [ ] Modificar colores en `sespa-styles.css`
- [ ] Cambiar texto del Hero Banner
- [ ] Actualizar servicios
- [ ] Modificar estadísticas
- [ ] Agregar imágenes a `assets/img/`
- [ ] Actualizar enlaces de redes sociales
- [ ] Probar en navegador
- [ ] Probar en móvil (responsive)

---

## 🎉 ¡Listo!

Tu plantilla SESPA está completamente funcional y lista para personalizar.

**Archivos principales a editar:**

1. 📝 `SESPA/index.html` - Contenido
2. ⚙️ `SESPA/assets/js/config-sespa.js` - Configuración
3. 🎨 `SESPA/assets/css/sespa-styles.css` - Estilos

**Para más ayuda:**

- 📖 Lee `COMPONENTES_README.md`
- 📊 Revisa `DIFERENCIAS_PLANTILLAS.md`
- 🔍 Inspecciona el código con F12
