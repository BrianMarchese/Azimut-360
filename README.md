# Estudio de Agrimensura Azimut360 — Plataforma Web y Panel de Gestión

Aplicación web integral diseñada para un estudio profesional de agrimensura. Combina una plataforma pública moderna orientada a la conversión y captación de clientes con un panel administrativo privado para gestionar consultas entrantes y testimonios en tiempo real.

---

## 🚀 Tecnologías

* **Frontend:** React, Vite
* **Estilos:** Tailwind CSS
* **Enrutamiento:** React Router
* **Backend, Base de Datos y Auth:** Supabase (PostgreSQL, Supabase Auth, Row Level Security)
* **Iconografía:** React Icons

---

## Características Principales

### 🌐 Portal Público
* **Diseño orientado a conversión:** Secciones estructuradas para servicios catastrales, mensuras, subdivisiones y estado parcelario.
* **Testimonios:** Muestra las reseñas con avatares generados automáticamente.
* **Formulario de contacto:** Captación directa de consultas vinculada a la base de datos.
* **Sección de Preguntas Frecuentes (FAQs):** Resolución previa de objeciones y requerimientos técnicos habituales.

### 🔒 Panel de Administración
* **Autenticación privada:** Acceso restringido por credenciales gestionadas mediante Supabase Auth.
* **Gestión de Consultas:**
  * Tarjetas con visualizador de mensajes extensos con scroll interno.
  * Botón de contacto directo por **WhatsApp** con formateo automático de número (+54 9) y mensaje personalizado prefijado según el servicio consultado.
  * Alternador de estados en tiempo real (`pendiente` / `contestada`).
* **Gestión de Testimonios / Reseñas:**
  * CRUD completo (creación, edición, alternado de visibilidad pública y eliminación definitiva).
  * Control de publicación mediante switch de visibilidad (`visible: true/false`).
  * Actualización optimista de estado en React para interacción fluida sin recargas de página.

---

## 🛡️ Seguridad y Base de Datos (Supabase RLS)

El proyecto implementa **Row Level Security (RLS)** a nivel de base de datos para aislar la información sensible:

---