import { Course } from "../interfaces/courses.interface";

/**
 * Datos simulados (mock) de cursos académicos.
 *
 * @remarks
 * Esta constante representa un conjunto de cursos utilizados
 * durante el desarrollo y pruebas de la aplicación.
 *
 * Los datos mock permiten trabajar con la interfaz `Course`
 * sin necesidad de conectarse a un backend o base de datos real.
 *
 * Generalmente se utilizan para:
 * - Pruebas unitarias
 * - Desarrollo de componentes
 * - Simulación de respuestas de servicios
 *
 * @example
 * ```ts
 * import { COURSES_MOCK } from '../data/courses.mock';
 *
 * console.log(COURSES_MOCK);
 * ```
 *
 * @see Course
 */
export const COURSES_MOCK: Course[] = [
{
    id: 1,
    name: 'Arquitectura de Software',
    teacher: 'Dr. Pérez',
    credits: 4,
    category: 'Arquitectura'
},
{
    id: 2,
    name: 'Bases de Datos',
    teacher: 'Ing. Gómez',
    credits: 3,
    category: 'Bases de Datos'
}
];