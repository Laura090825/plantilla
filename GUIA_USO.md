# 🚀 GUÍA DE USO Y MANTENIMIENTO

## ✅ Estructura Implementada

Tu sitio web ahora está organizado de forma profesional en carpetas:

```
plantilla pagina web/
├── index.html (página inicio)
├── assets/
│   ├── css/styles.css
│   ├── js/script.js
│   └── img/ (carpeta para imágenes)
└── pages/
    ├── corporativo/ (5 páginas)
    ├── servicios/ (4 páginas)
    ├── usuario/ (5 páginas)
    ├── facturacion/ (3 páginas)
    └── transparencia/ (1 página)
```

## 📋 Próximos Pasos

### 1️⃣ Agregar Imágenes

```
Carpeta: assets/img/
- logo.png (tu logo empresarial)
- servicio-recoleccion.jpg
- servicio-barrido.jpg
- servicio-reciclaje.jpg
- imagen-instalaciones.jpg
```

### 2️⃣ Actualizar Referencias de Imágenes

Ejemplo en index.html:

```html
<img src="assets/img/logo.png" alt="Logo Empresa" />
<img src="assets/img/servicio-recoleccion.jpg" alt="Recolección" />
```

Ejemplo en pages/corporativo/quienes-somos.html:

```html
<img src="../../assets/img/logo.png" alt="Logo Empresa" />
```

### 3️⃣ Verificar Enlaces

Hacer clic en cada página y probar:

- ✅ Todos los links del menú
- ✅ Botones "Ver más"
- ✅ Links del footer
- ✅ Top bar (PQR, Certificados, Pago)

### 4️⃣ Validar Responsive Design

Probar en diferentes tamaños:

- 📱 Móvil (480px)
- 📱 Tablet (768px)
- 💻 Desktop (1024px+)

## 🛠️ Cómo Agregar Nuevas Páginas

### Opción A: Página en carpeta existente

```
1. Crear archivo: pages/servicios/nuevo-servicio.html
2. Copiar estructura de otra página similar
3. Actualizar rutas de assets: ../../assets/...
4. Agregar enlace en menú del index.html
```

### Opción B: Nueva categoría

```
1. Crear carpeta: pages/nueva-categoria/
2. Crear archivo: pages/nueva-categoria/pagina.html
3. Copiar estructura base
4. Actualizar rutas: ../../assets/...
5. Agregar menú en index.html
```

## 📝 Estructura Básica de Página

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Título - Empresa de Servicios Públicos</title>
    <!-- CSS desde la carpeta correcta -->
    <link rel="stylesheet" href="../../assets/css/styles.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
  </head>
  <body>
    <!-- Contenido -->

    <!-- Script -->
    <script src="../../assets/js/script.js"></script>
  </body>
</html>
```

## 🔍 Rutas Correctas

### ✅ CORRECTO

```html
<link rel="stylesheet" href="../../assets/css/styles.css">
<script src="../../assets/js/script.js">
<img src="../../assets/img/logo.png">
<a href="../../index.html">Inicio</a>
<a href="../corporativo/quienes-somos.html">Quiénes</a>
```

### ❌ INCORRECTO

```html
<link rel="stylesheet" href="styles.css"> <!-- Falta ruta -->
<script src="/js/script.js"> <!-- No usar rutas absolutas -->
<img src="logo.png"> <!-- Ruta incorrecta -->
<a href="/index.html"> <!-- Puede no funcionar -->
```

## 🔧 Si Necesitas Mover o Renombrar Archivos

### Para mover una página

```
1. Mover físicamente el archivo
2. Actualizar TODAS las referencias
3. En index.html: actualizar menú
4. En otras páginas: actualizar enlaces
```

### Ejemplo: Mover "pqr.html" a otra carpeta

```
ANTES: pages/usuario/pqr.html
DESPUÉS: pages/soporte/pqr.html

Actualizar en:
- index.html: href="pages/soporte/pqr.html"
- pages/usuario/contacto.html: href="../soporte/pqr.html"
- pages/corporativo/quienes-somos.html: href="../soporte/pqr.html"
```

## 📱 Testing de Enlaces

Abrir index.html en navegador y verificar:

### Top Bar

- [ ] PQR → pages/usuario/pqr.html
- [ ] Certificados → pages/usuario/certificados.html
- [ ] Pago en Línea → pages/facturacion/pago.html

### Menú Principal

- [ ] Quiénes Somos → pages/corporativo/quienes-somos.html
- [ ] Servicios (todos)
- [ ] Dónde Operamos → pages/corporativo/cobertura.html

### Botones de Acción

- [ ] "Ver más" en servicios
- [ ] "Solicitar" en certificados
- [ ] "Descargar" en documentos

### Footer

- [ ] Todos los links del footer
- [ ] Links a redes sociales
- [ ] Volver arriba (back-to-top)

## 💾 Copias de Seguridad

Recomendado:

```
1. Crear backup antes de cambios grandes
2. Usar versionamiento (git)
3. Documentar cambios
4. Probar en local antes de publicar
```

## 🌐 Despliegue a Servidor

Cuando publiques en servidor:

1. **Estructura debe ser igual**

   ```
   servidor/
   ├── index.html
   ├── assets/
   │   ├── css/
   │   ├── js/
   │   └── img/
   └── pages/
       └── ...
   ```

2. **Rutas relativas funcionarán igual**

   - index.html → assets/css/styles.css ✅
   - pages/usuario/pqr.html → ../../assets/css/styles.css ✅

3. **Configurar servidor web**
   - Apache: .htaccess (si necesario)
   - Nginx: configuración (si necesario)
   - IIS: configuración (si necesario)

## 📊 Checklist de Buenas Prácticas

- [ ] Estructura de carpetas organizada
- [ ] Todas las imágenes en assets/img/
- [ ] CSS centralizado en assets/css/
- [ ] JS centralizado en assets/js/
- [ ] Rutas relativas (no absolutas)
- [ ] Links probados en todas las páginas
- [ ] Responsive design verificado
- [ ] Validación HTML correcta
- [ ] Meta tags completos
- [ ] Documentación actualizada

## 🆘 Solución de Problemas

### Problema: Las imágenes no cargan

```
❌ src="logo.png"
✅ src="../../assets/img/logo.png"
```

### Problema: Los estilos no aplican

```
❌ href="styles.css"
✅ href="../../assets/css/styles.css"
```

### Problema: Los enlaces no funcionan

```
❌ href="/pages/usuario/pqr.html"
✅ href="pages/usuario/pqr.html"
```

### Problema: Script no funciona

```
❌ src="script.js"
✅ src="../../assets/js/script.js"
```

## 📞 Soporte

Si tienes dudas sobre la estructura:

1. Revisar esta guía
2. Comparar con otra página similar
3. Seguir el patrón de carpetas
4. Mantener consistencia

---

**Versión**: 1.0  
**Fecha**: 3 de enero de 2026  
**Estado**: ✅ Listo para usar


