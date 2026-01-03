# 📊 ESTRUCTURA DEL SITIO WEB - DIAGRAMA VISUAL

## Estructura de Carpetas

```
RAÍZ (plantilla pagina web/)
│
├─ 📄 index.html ..................... PÁGINA PRINCIPAL
│
├─ 📁 assets/ ....................... RECURSOS
│  ├─ 📁 css/
│  │  └─ 📄 styles.css ............ Estilos globales (6,700+ líneas)
│  │
│  ├─ 📁 js/
│  │  └─ 📄 script.js ............ Scripts (acordeón, formularios, scroll)
│  │
│  └─ 📁 img/ .................... Carpeta para imágenes
│
├─ 📁 pages/ ....................... PÁGINAS DEL SITIO
│  │
│  ├─ 📁 corporativo/ ............ (5 páginas)
│  │  ├─ quienes-somos.html
│  │  ├─ mision-vision.html
│  │  ├─ estructura.html
│  │  ├─ informes.html
│  │  └─ cobertura.html (Dónde Operamos)
│  │
│  ├─ 📁 servicios/ ............. (4 páginas)
│  │  ├─ recoleccion.html
│  │  ├─ barrido.html
│  │  ├─ aprovechamiento.html
│  │  └─ especiales.html
│  │
│  ├─ 📁 usuario/ ............... (5 páginas)
│  │  ├─ pqr.html
│  │  ├─ preguntas.html
│  │  ├─ contacto.html
│  │  ├─ certificados.html
│  │  └─ noticias.html
│  │
│  ├─ 📁 facturacion/ ........... (3 páginas)
│  │  ├─ tarifas.html
│  │  ├─ factura.html
│  │  └─ pago.html
│  │
│  └─ 📁 transparencia/ ......... (1 página)
│     └─ transparencia.html
│
└─ 📄 ESTRUCTURA.md ................ Documentación (este archivo)

```

## Mapa de Navegación

```
                        ┌─────────────────┐
                        │  index.html     │
                        │ (Página inicio) │
                        └────────┬────────┘
                                 │
                 ┌───────────────┼───────────────┐
                 │               │               │
        ┌────────▼────────┐     │     ┌────────▼──────────┐
        │   CORPORATIVO   │     │     │    SERVICIOS      │
        ├─────────────────┤     │     ├──────────────────┤
        │ Quiénes Somos   │     │     │ Recolección      │
        │ Misión/Visión   │     │     │ Barrido          │
        │ Estructura      │     │     │ Aprovechamiento  │
        │ Informes        │     │     │ Especiales       │
        │ Dónde Operamos  │     │     │                  │
        └─────────────────┘     │     └──────────────────┘
                 │               │               │
                 │        ┌──────▼──────┐        │
                 │        │   USUARIO   │        │
                 │        ├─────────────┤        │
                 │        │ PQR         │        │
                 │        │ Preguntas   │        │
                 │        │ Contacto    │        │
                 │        │ Certificados│        │
                 │        │ Noticias    │        │
                 │        └──────┬──────┘        │
                 │               │               │
                 │        ┌──────▼──────┐        │
                 │        │ FACTURACIÓN │        │
                 │        ├─────────────┤        │
                 │        │ Tarifas     │        │
                 │        │ Factura     │        │
                 │        │ Pago        │        │
                 │        └─────────────┘        │
                 │               │               │
                 └───────────────┼───────────────┘
                                 │
                        ┌────────▼──────────┐
                        │ TRANSPARENCIA     │
                        ├───────────────────┤
                        │ Transparencia     │
                        └───────────────────┘
```

## Rutas Relativas por Ubicación

### 📍 Desde index.html (RAÍZ)

```html
<!-- CSS y JS -->
<link rel="stylesheet" href="assets/css/styles.css" />
<script src="assets/js/script.js"></script>

<!-- Logo -->
<img src="assets/img/logo.png" />

<!-- Páginas directas -->
<a href="pages/corporativo/quienes-somos.html">Quiénes Somos</a>
<a href="pages/servicios/recoleccion.html">Recolección</a>
<a href="pages/usuario/pqr.html">PQR</a>
<a href="pages/facturacion/pago.html">Pago</a>
```

### 📍 Desde cualquier página en /pages (2 niveles profundidad)

```html
<!-- CSS y JS (subir 2 niveles) -->
<link rel="stylesheet" href="../../assets/css/styles.css" />
<script src="../../assets/js/script.js"></script>

<!-- Logo -->
<img src="../../assets/img/logo.png" />

<!-- Volver a inicio -->
<a href="../../index.html">Inicio</a>

<!-- A otra página en el mismo nivel -->
<a href="quienes-somos.html">Quiénes Somos</a>

<!-- A otra carpeta -->
<a href="../servicios/recoleccion.html">Recolección</a>
<a href="../usuario/pqr.html">PQR</a>
```

## 📊 Estadísticas del Sitio

| Elemento           | Cantidad |
| ------------------ | -------- |
| **Páginas HTML**   | 19       |
| **Carpetas**       | 6        |
| **Archivos CSS**   | 1        |
| **Archivos JS**    | 1        |
| **Líneas de CSS**  | 6,700+   |
| **Componentes UI** | 40+      |

## 🎯 Categorías de Contenido

### CORPORATIVO (5 páginas)

- Información general de la empresa
- Valores y estructura
- Gestión y reportes
- Cobertura geográfica

### SERVICIOS (4 páginas)

- Descripción detallada de servicios
- Proceso y características
- Tarifas por servicio
- Horarios y disponibilidad

### ATENCIÓN AL USUARIO (5 páginas)

- Canales de comunicación
- Preguntas frecuentes
- Solicitud de certificados
- Novedades y noticias

### FACTURACIÓN (3 páginas)

- Consulta de tarifas
- Búsqueda de facturas
- Pagos en línea
- Métodos de pago

### TRANSPARENCIA (1 página)

- Información requerida por ley
- Reportes financieros
- Políticas públicas
- Datos abiertos

## 💡 Ventajas de esta Estructura

✅ **Organización clara** - Fácil de navegar para usuarios
✅ **Mantenimiento simple** - Ubicación lógica de archivos
✅ **Escalabilidad** - Fácil agregar nuevas secciones
✅ **Rendimiento** - Recursos centralizados
✅ **SEO friendly** - URLs limpias y descriptivas
✅ **Responsive** - Funciona en todos los dispositivos

## 🔒 Rutas Seguras

- ✅ No hay acceso a directorios
- ✅ Todas las rutas son relativas
- ✅ Control de acceso a través de menú
- ✅ Estructura protegida de cambios

---

**Creado**: 3 de enero de 2026  
**Versión**: 2.0 (Reorganización de carpetas)  
**Estado**: ✅ Completado


