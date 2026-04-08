/**
 * Interfaz que representa un curso académico.
 *
 * Contiene la información básica necesaria para mostrar un curso
 * en una tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada curso debe tener un `id` único, un nombre, el profesor encargado,
 * el número de créditos y una categoría académica definida.
 *
 * @example
 * ```ts
 * const course: Course = {
 *   id: 1,
 *   name: 'Arquitectura de Software',
 *   teacher: 'Laura González',
 *   credits: 4,
 *   category: 'Arquitectura'
 * };
 * ```
 */
export interface Course {
  /** Identificador único del curso */
  id: number;

  /** Nombre del curso */
  name: string;

  /** Profesor que dicta el curso */
  teacher: string;

  /** Número de créditos académicos */
  credits: number;

  /** Categoría del curso */
  category: CourseCategory;
}

/**
 * Categorías académicas disponibles para los cursos.
 *
 * @remarks
 * Este tipo restringe las categorías a valores predefinidos:
 * - 'Programación'
 * - 'Bases de Datos'
 * - 'Redes'
 * - 'Arquitectura'
 * - 'IA'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const category: CourseCategory = 'Programación';
 * ```
 */
export type CourseCategory =
  | 'Programación'
  | 'Bases de Datos'
  | 'Redes'
  | 'Arquitectura'
  | 'IA';