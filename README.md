# Platzi App — Prototipo Mobile

Prototipo funcional de una aplicación móvil de aprendizaje en línea inspirada en Platzi, desarrollado como proyecto de equipo. Implementa las principales historias de usuario del flujo de estudiante: autenticación, seguimiento de cursos, metas, hábitos de estudio, gamificación y perfil de actividad.

## Vista previa

La app simula una interfaz móvil (max-width: 28rem) centrada en pantalla, con tema oscuro y la paleta de colores oficial de Platzi.

## Tecnologías

| Herramienta | Versión |
|---|---|
| React | 19 |
| TypeScript | 6 |
| Vite | 8 |
| Tailwind CSS | 4 |
| Lucide React | 1.14 |

## Características implementadas

| Vista | Historia de Usuario | Descripción |
|---|---|---|
| Login | HU-11 | Inicio de sesión con email/contraseña, "recordar sesión", OAuth (Google/GitHub) |
| Registro | — | Creación de cuenta con validación de campos |
| Onboarding | HU-12 | Presentación de 3 slides con las funciones clave de la app |
| Dashboard | HU-02 | Lista de cursos inscritos con progreso, filtros y alertas de inactividad |
| Mis Cursos | — | Vista dedicada de todos los cursos inscritos |
| Detalle del Curso | HU-01 | Progreso circular, lecciones del módulo, acceso a continuar o homologar |
| Continuar Curso | — | Reproductor de video simulado, lista de módulos y sección de comentarios |
| Examen de Homologación | — | Lista de temas del curso con opción de evaluación |
| Notificaciones | HU-03 | Push simulada con acciones rápidas y configuración de tipos de alerta |
| Establecer Meta | HU-04 | Calendario interactivo para fijar fecha de finalización con estimación de ritmo |
| Hábito de Estudio | HU-05 | Selector de días, franja horaria y duración con resumen guardable |
| Mi Nivel | HU-07 | Sistema de XP y niveles con barra de progreso hacia el siguiente nivel |
| Mis Logros | HU-08 | Insignias desbloqueadas/pendientes con galería y opción de compartir |
| Retos Semanales | HU-09 | Retos con estado (completado / en progreso / sin iniciar) y recompensas XP |
| Mi Actividad | HU-10 | Estadísticas, gráfico de actividad semanal, racha y acceso al perfil completo |

## Instalación y uso

**Requisitos:** Node.js 18 o superior.

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd platzi-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
