import type { Course } from "@interfaces/Courses";

/**
 * Listado de cursos disponibles en el sistema.
 *
 * Esta constante representa un conjunto de datos de prueba (mock)
 * que simula la respuesta de un backend REST.
 *
 * Se utiliza principalmente para:
 * - Pruebas unitarias
 * - Desarrollo sin backend
 * - Prácticas de componentes
 * - Ejercicios de arquitectura modular
 *
 * @type {Course[]}
 */
export const COURSES: Course[] = [
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
},
{
    id: 3,
    name: 'Redes de Computadores',
    teacher: 'Ing. Martínez',
    credits: 3,
    category: 'Redes'
},
{
    id: 4,
    name: 'Programación Web',
    teacher: 'Ing. López',
    credits: 3,
    category: 'Programación'
},
{
    id: 5,
    name: 'Inteligencia Artificial',
    teacher: 'Dr. Ramírez',
    credits: 4,
    category: 'IA'
},
{
    id: 6,
    name: 'Machine Learning',
    teacher: 'Dr. Castro',
    credits: 4,
    category: 'IA'
},
{
    id: 7,
    name: 'Sistemas Distribuidos',
    teacher: 'Dr. Torres',
    credits: 3,
    category: 'Arquitectura'
  },
  {
    id: 8,
    name: 'Administración de Bases de Datos',
    teacher: 'Ing. Mendoza',
    credits: 3,
    category: 'Bases de Datos'
  },
  {
    id: 9,
    name: 'Seguridad Informática',
    teacher: 'Ing. Fernández',
    credits: 3,
    category: 'Redes'
  },
  {
    id: 10,
    name: 'Desarrollo Frontend',
    teacher: 'Ing. Ríos',
    credits: 3,
    category: 'Programación'
  }
];