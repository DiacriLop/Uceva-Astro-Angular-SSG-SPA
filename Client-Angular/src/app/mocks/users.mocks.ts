import { User } from "../interfaces/users.interface";

/**
 * Datos simulados (mock) de usuarios del sistema.
 *
 * @remarks
 * Esta constante contiene un conjunto de usuarios utilizados
 * durante el desarrollo y las pruebas de la aplicación.
 *
 * Los datos mock permiten trabajar con la interfaz `User`
 * sin necesidad de conectarse a un backend o base de datos real.
 *
 * Estos datos suelen utilizarse para:
 * - Desarrollo de componentes
 * - Pruebas unitarias
 * - Simulación de respuestas de servicios
 *
 * @example
 * ```ts
 * import { USERS_MOCK } from '../data/users.mock';
 *
 * console.log(USERS_MOCK);
 * ```
 *
 * @see User
 */
export const USERS_MOCK: User[] = [
  {
    id: 1,
    name: 'Carlos',
    lastName: 'Ramírez',
    age: 22,
    email: 'carlos.ramirez@example.com',
    engineering: 'Sistemas',
  },
  {
    id: 2,
    name: 'Ana',
    lastName: 'Gómez',
    age: 24,
    email: 'ana.gomez@example.com',
    engineering: 'Industrial',
  }
];