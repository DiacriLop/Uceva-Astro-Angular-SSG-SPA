/**
 * Interfaz que representa un curso académico dentro del sistema.
 *
 * @remarks
 * Define la estructura de datos utilizada para representar
 * la información básica de un curso, incluyendo su identificador,
 * nombre, profesor responsable, número de créditos y categoría.
 *
 * Esta interfaz es utilizada principalmente para:
 * - Mostrar cursos en tablas o listados
 * - Manejar datos provenientes de servicios
 * - Tipar correctamente los datos en la aplicación
 *
 * @example
 * ```ts
 * const course: Course = {
 *   id: 1,
 *   name: 'Programación Orientada a Objetos',
 *   teacher: 'Juan Pérez',
 *   credits: 4,
 *   category: 'Programación'
 * };
 * ```
 */
export interface Course {

  /** Identificador único del curso */
  id: number;

  /** Nombre del curso */
  name: string;

  /** Nombre del profesor encargado del curso */
  teacher: string;

  /** Número de créditos académicos del curso */
  credits: number;

  /** Categoría académica a la que pertenece el curso */
  category: CourseCategory;
}

/**
 * Categorías académicas disponibles para los cursos.
 *
 * @remarks
 * Este tipo restringe las categorías posibles que puede
 * tener un curso dentro del sistema, permitiendo mantener
 * consistencia en la información.
 *
 * Estas categorías suelen utilizarse para:
 * - Clasificación de cursos
 * - Filtrado en interfaces
 * - Asignación de estilos o badges en la UI
 *
 * @example
 * ```ts
 * const category: CourseCategory = 'IA';
 * ```
 */
export type CourseCategory =
| 'Programación'
| 'Bases de Datos'
| 'Redes'
| 'Arquitectura'
| 'IA';