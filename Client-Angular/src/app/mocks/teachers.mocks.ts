import { Teacher } from "../interfaces/teachers.interface";

/**
 * Datos simulados (mock) de profesores del sistema.
 *
 * @remarks
 * Esta constante representa un conjunto de profesores utilizados
 * durante el desarrollo y las pruebas de la aplicación.
 *
 * Los datos mock permiten trabajar con la interfaz `Teacher`
 * sin necesidad de conectarse a un backend o servicio externo.
 *
 * Se utilizan principalmente para:
 * - Pruebas unitarias
 * - Desarrollo de componentes
 * - Simulación de respuestas de servicios
 *
 * @example
 * ```ts
 * import { TEACHERS_MOCK } from '../data/teachers.mock';
 *
 * console.log(TEACHERS_MOCK);
 * ```
 *
 * @see Teacher
 */
export const TEACHERS_MOCK: Teacher[] = [
  {
    id: 1,
    name: 'Laura',
    lastName: 'González',
    age: 40,
    email: 'laura.gonzalez@uceva.edu.co',
    department: 'Sistemas'
  },
  {
    id: 2,
    name: 'Carlos',
    lastName: 'Martínez',
    age: 45,
    email: 'carlos.martinez@uceva.edu.co',
    department: 'Electronica'
  },
  {
    id: 3,
    name: 'Ana',
    lastName: 'López',
    age: 38,
    email: 'ana.lopez@uceva.edu.co',
    department: 'Industrial'
  },
  {
    id: 4,
    name: 'Jorge',
    lastName: 'Ramírez',
    age: 50,
    email: 'jorge.ramirez@uceva.edu.co',
    department: 'Matematicas'
  },
  {
    id: 5,
    name: 'Paula',
    lastName: 'Castro',
    age: 42,
    email: 'paula.castro@uceva.edu.co',
    department: 'Ciencias'
  }
];