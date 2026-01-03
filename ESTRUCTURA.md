# Estructura del Sitio Web - Empresa de Servicios Públicos de Aseo E.S.P.

## 📁 Organización de Carpetas

```
plantilla pagina web/
├── index.html                          (Página Principal)
├── README.md                           (Este archivo)
├── update_paths.ps1                    (Script de actualización)
│
├── assets/                             (Recursos del sitio)
│   ├── css/
│   │   └── styles.css                 (Hoja de estilos principal)
│   ├── js/
│   │   └── script.js                  (Scripts JavaScript)
│   └── img/                           (Imágenes - carpeta vacía para agregar)
│       └── logo.png                   (Agregar logo aquí)
│
└── pages/                              (Páginas del sitio)
    ├── corporativo/                    (Información Corporativa)
    │   ├── quienes-somos.html
    │   ├── mision-vision.html
    │   ├── estructura.html
    │   ├── informes.html
    │   └── cobertura.html             (Dónde Operamos)
    │
    ├── servicios/                      (Servicios Ofrecidos)
    │   ├── recoleccion.html
    │   ├── barrido.html
    │   ├── aprovechamiento.html
    │   └── especiales.html            (Residuos Especiales)
    │
    ├── usuario/                        (Atención al Usuario)
    │   ├── pqr.html
    │   ├── preguntas.html
    │   ├── contacto.html
    │   ├── certificados.html
    │   └── noticias.html
    │
    ├── facturacion/                    (Facturación y Pagos)
    │   ├── tarifas.html
    │   ├── factura.html
    │   └── pago.html
    │
    └── transparencia/                  (Información de Transparencia)
        └── transparencia.html
```

## 📄 Descripción de Páginas

### Corporativo

- **quienes-somos.html** - Información sobre la empresa
- **mision-vision.html** - Misión, visión y valores
- **estructura.html** - Estructura organizacional
- **informes.html** - Informes de gestión
- **cobertura.html** - Dónde operamos (municipios, oficinas)

### Servicios

- **recoleccion.html** - Servicio de recolección de residuos
- **barrido.html** - Servicio de barrido y limpieza
- **aprovechamiento.html** - Aprovechamiento y reciclaje
- **especiales.html** - Residuos peligrosos, construcción, voluminosos

### Atención al Usuario

- **pqr.html** - Formulario de peticiones, quejas y reclamos
- **preguntas.html** - Preguntas frecuentes
- **contacto.html** - Información de contacto
- **certificados.html** - Solicitud de certificados en línea
- **noticias.html** - Noticias y actualizaciones

### Facturación

- **tarifas.html** - Tabla de tarifas y valores
- **factura.html** - Consulta de facturas
- **pago.html** - Pago en línea

### Transparencia

- **transparencia.html** - Información requerida por ley (Ley 1712 de 2014)

## 🔗 Rutas de Referencias en HTML

### Desde index.html (raíz)

```html
<!-- CSS -->
<link rel="stylesheet" href="assets/css/styles.css" />

<!-- JavaScript -->
<script src="assets/js/script.js"></script>

<!-- Imágenes -->
<img src="assets/img/logo.png" alt="Logo" />

<!-- Enlaces a páginas -->
<a href="pages/corporativo/quienes-somos.html">Quiénes Somos</a>
<a href="pages/servicios/recoleccion.html">Recolección</a>
<a href="pages/usuario/pqr.html">PQR</a>
```

### Desde páginas en /pages (dos niveles de profundidad)

```html
<!-- CSS -->
<link rel="stylesheet" href="../../assets/css/styles.css" />

<!-- JavaScript -->
<script src="../../assets/js/script.js"></script>

<!-- Imágenes -->
<img src="../../assets/img/logo.png" alt="Logo" />

<!-- Enlaces a index -->
<a href="../../index.html">Inicio</a>

<!-- Enlaces entre páginas de mismo nivel -->
<a href="../corporativo/quienes-somos.html">Quiénes Somos</a>

<!-- Enlaces a otras carpetas -->
<a href="../servicios/recoleccion.html">Recolección</a>
<a href="../usuario/pqr.html">PQR</a>
```

## 📋 Checklist de Implementación

- ✅ Carpetas creadas
- ✅ Archivos organizados
- ✅ Rutas actualizadas en todos los HTML
- ✅ CSS y JS en /assets
- ✅ Páginas organizadas por categoría

## 🚀 Pasos Siguientes

1. **Agregar imágenes** en la carpeta `/assets/img/`

   - Logo de la empresa
   - Imágenes de servicios
   - Fotos de instalaciones

2. **Actualizar referencias de imágenes** en los HTML

   - Reemplazar `src` locales por rutas en `/assets/img/`

3. **Configurar servidor** (si es necesario)

   - Asegurarse que el servidor sirve desde la raíz
   - Los enlaces relativos funcionarán correctamente

4. **Testing**
   - Verificar todos los enlaces
   - Probar en navegadores diferentes
   - Verificar responsive design

## 🔧 Mantenimiento

- Los estilos CSS están centralizados en `assets/css/styles.css`
- Los scripts JavaScript están centralizados en `assets/js/script.js`
- Las imágenes deben estar en `assets/img/`
- Los archivos HTML están organizados por funcionalidad

## 📝 Notas

- Todas las rutas internas usan referencias relativas (no URLs absolutas)
- Esto permite que el sitio funcione tanto localmente como en servidor
- El archivo `update_paths.ps1` se puede usar para futuros cambios masivos

---

**Última actualización**: 3 de enero de 2026


