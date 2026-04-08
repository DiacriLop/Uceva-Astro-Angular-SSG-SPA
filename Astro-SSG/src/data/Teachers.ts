import type { Teacher } from "@interfaces/Teachers";

/**
 * Listado de profesores disponibles en el sistema.
 *
 * Esta constante representa un conjunto de datos de prueba (mock)
 * que simula la respuesta de un backend REST.
 *
 * Se utiliza principalmente para:
 * - Desarrollo sin backend
 * - Pruebas de componentes
 * - Ejercicios académicos
 *
 * @type {Teacher[]}
 */
export const TEACHERS: Teacher[] = [
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
  },
  {
    id: 6,
    name: 'Andrés',
    lastName: 'Morales',
    age: 37,
    email: 'andres.morales@uceva.edu.co',
    department: 'Sistemas'
  },
  {
    id: 7,
    name: 'Diana',
    lastName: 'Torres',
    age: 39,
    email: 'diana.torres@uceva.edu.co',
    department: 'Industrial'
  },
  {
    id: 8,
    name: 'Miguel',
    lastName: 'Rojas',
    age: 47,
    email: 'miguel.rojas@uceva.edu.co',
    department: 'Electronica'
  }
];