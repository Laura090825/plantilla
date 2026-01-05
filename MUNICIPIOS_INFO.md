# Documentación de Páginas de Municipios

## Resumen General

Se han creado **4 páginas completas** para cada municipio donde operamos, accesibles desde el menú "Dónde Operamos" en la navegación principal.

---

## Municipios Implementados

### 1. **Socorro**

📄 Archivo: `pages/municipios/socorro.html`

- **Horario de Atención:** Lunes a viernes 8:00 - 17:00 | Sábado 8:00 - 12:00
- **Teléfono:** (+57) 312-123-4567
- **Email:** socorro@empresaaseo.com
- **Dirección:** Calle Principal #123, Socorro
- **Zonas de Recolección:**
  - Centro: Lunes y Jueves
  - Sur: Martes y Viernes
  - Norte: Miércoles y Sábado

### 2. **San Gil**

📄 Archivo: `pages/municipios/sangil.html`

- **Horario de Atención:** Lunes a viernes 7:00 - 18:00 | Sábado 7:00 - 13:00
- **Teléfono:** (+57) 312-123-4568
- **Email:** sangil@empresaaseo.com
- **Dirección:** Carrera Principal #456, San Gil (Capital de la Aventura)
- **Zonas de Recolección:**
  - Centro: Lunes, Miércoles y Viernes
  - Sur: Martes y Sábado
  - Norte: Jueves y Domingo

### 3. **Oiba**

📄 Archivo: `pages/municipios/oiba.html`

- **Horario de Atención:** Lunes a viernes 8:00 - 17:00 | Sábado 8:00 - 12:00
- **Teléfono:** (+57) 312-123-4569
- **Email:** oiba@empresaaseo.com
- **Dirección:** Avenida Guanentá #789, Oiba
- **Zonas de Recolección:**
  - Centro: Martes y Viernes
  - Sur: Lunes y Jueves
  - Norte: Miércoles y Sábado

### 4. **Palmas**

📄 Archivo: `pages/municipios/palmas.html`

- **Horario de Atención:** Lunes a viernes 8:00 - 17:00 | Sábado 8:00 - 12:00
- **Teléfono:** (+57) 312-123-4570
- **Email:** palmas@empresaaseo.com
- **Dirección:** Avenida Principal #456, Palmas
- **Zonas de Recolección:**
  - Centro: Lunes y Jueves
  - Sur: Martes y Viernes
  - Norte: Miércoles y Sábado

---

## Estructura de Cada Página

Cada página de municipio contiene:

### Secciones Principales:

1. **Barra Superior** - Enlaces rápidos (PQR, Certificados, Pago en Línea)
2. **Header/Navegación** - Logo y menú de navegación completo
3. **Migas de Pan (Breadcrumb)** - Navegación contextual
4. **Encabezado del Municipio** - Título e información general
5. **Grid de 6 Tarjetas de Información:**
   - 📋 Información del Municipio
   - 🕐 Horario de Atención
   - 📞 Contacto
   - 🗑️ Servicios Disponibles
   - 📅 Días de Recolección
   - 📄 PQR y Reclamos
6. **Mapa Interactivo** - Google Maps embebido con ubicación
7. **Footer** - Información de contacto, enlaces útiles, redes sociales
8. **Botón Flotante** - Volver al inicio (back-to-top)

---

## Archivos Creados/Modificados

### Nuevos Archivos:

```
✅ pages/municipios/socorro.html       (436 líneas)
✅ pages/municipios/sangil.html        (436 líneas)
✅ pages/municipios/oiba.html          (436 líneas)
✅ pages/municipios/palmas.html        (436 líneas)
✅ assets/css/municipalities.css       (Estilos específicos)
```

### Archivos Modificados:

```
✏️ index.html - Link "Dónde Operamos" apunta a página de cobertura general
✏️ pages/corporativo/cobertura.html - Transformado en vista general de municipios
✏️ pages/municipios/*.html - Links actualizados y CSS de municipios agregado
```

---

## Estilos CSS

### Archivo Principal: `assets/css/municipalities.css`

Contiene estilos específicos para:

- Sección de municipio
- Encabezados y títulos
- Grid de tarjetas
- Iconos y efectos hover
- Mapa interactivo
- Responsive design (dispositivos móviles)

**Características de Diseño:**

- Tarjetas con efecto hover (elevación y cambio de borde)
- Gradientes modernos
- Iconos Font Awesome animados
- Responsive en móviles (breakpoints 768px y 480px)
- Sombras y transiciones suaves

---

## Acceso desde el Menú

Desde cualquier página, el usuario puede:

1. Hacer clic en **"Dónde Operamos"** en el menú principal
2. Se abre la **página de cobertura general** (`pages/corporativo/cobertura.html`)
3. En esa página se muestran los 4 municipios con información resumida y botones "Ver Detalles"
4. Desde el submenu, también puede acceder directamente a cada municipio
5. Si desea más información de un municipio específico, hace clic en "Ver Detalles"

### Vista General de Cobertura

- Muestra resumen de cobertura (4 municipios, 4 oficinas, 100+ empleados, 30k+ clientes)
- Grid de tarjetas con cada municipio
- Información resumida (horario, teléfono, email)
- Botones para acceder a la página completa de cada municipio
- Sección con servicios disponibles en todos los municipios

---

## Información Integrada

### En Cada Página:

✅ **Descripción General** - Información sobre el municipio
✅ **Horarios** - Horas de atención de la oficina
✅ **Contacto** - Teléfono y email directo
✅ **Servicios** - Servicios disponibles en el municipio
✅ **Calendarios** - Días y zonas de recolección
✅ **PQR** - Acceso directo al formulario de quejas
✅ **Mapa** - Ubicación de la oficina

---

## Navegación Entre Municipios

Cada página incluye el menú principal, permitiendo al usuario:

- Cambiar entre municipios desde el menú "Dónde Operamos"
- Acceder a cualquier otra sección del sitio
- Navegar mediante migas de pan

---

## Responsive Design

Todas las páginas son completamente responsive:

- **Desktop** (1200px+): Grid de 3 columnas
- **Tablet** (768px-1023px): Grid de 2 columnas
- **Móvil** (480px-767px): Grid de 1 columna
- **Móvil Pequeño** (<480px): Adaptación total

---

## Próximos Pasos (Opcional)

Para mejorar aún más las páginas:

1. **Agregar Imágenes** - Fotos de las oficinas y municipios
2. **Ampliar Descripciones** - Más detalles sobre cada municipio
3. **Horarios Dinámicos** - Sistema que muestre si está abierto/cerrado
4. **Formularios** - Solicitud de servicio específico por municipio
5. **Estadísticas** - Cobertura, toneladas procesadas, etc.

---

## Notas Técnicas

- ✅ Todos los links usan rutas relativas correctas (../../)
- ✅ CSS modular y reutilizable
- ✅ Estructura semántica HTML5
- ✅ Accesibilidad WCAG compliant
- ✅ Rendimiento optimizado
- ✅ SEO friendly (meta tags, estructura)

---

## Soporte

Si necesitas modificar información de algún municipio:

1. Abre el archivo HTML correspondiente
2. Busca las secciones de contenido (dentro de `.municipality-card`)
3. Actualiza los datos (teléfono, email, dirección, horarios, etc.)
4. Los cambios se aplicarán inmediatamente

---

**Fecha de Creación:** Diciembre 2024  
**Versión:** 1.0
