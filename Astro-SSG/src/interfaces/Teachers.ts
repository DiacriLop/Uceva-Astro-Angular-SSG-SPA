/**
 * Interfaz que representa un profesor del sistema.
 *
 * Contiene la información básica necesaria para mostrar un profesor
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada profesor debe tener un `id` único, nombres y apellidos,
 * edad, correo electrónico válido y un departamento (`department`) definido.
 *
 * @example
 * ```ts
 * const teacher: Teacher = {
 *   id: 1,
 *   name: 'Laura',
 *   lastName: 'González',
 *   age: 40,
 *   email: 'laura.gonzalez@uceva.edu.co',
 *   department: 'Sistemas'
 * };
 * ```
 */
export interface Teacher {
  /** Identificador único del profesor */
  id: number;

  /** Nombre del profesor */
  name: string;

  /** Apellido del profesor */
  lastName: string;

  /** Edad del profesor */
  age: number;

  /** Correo electrónico del profesor */
  email: string;

  /** Departamento académico del profesor */
  department: TeacherDepartment;
}

/**
 * Tipo de departamento académico de un profesor.
 *
 * @remarks
 * Este tipo restringe los departamentos a valores predefinidos:
 * - 'Sistemas'
 * - 'Electronica'
 * - 'Industrial'
 * - 'Matematicas'
 * - 'Ciencias'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const department: TeacherDepartment = 'Sistemas';
 * ```
 */
export type TeacherDepartment =
  | 'Sistemas'
  | 'Electronica'
  | 'Industrial'
  | 'Matematicas'
  | 'Ciencias';