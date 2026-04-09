import { Building } from "../interfaces/buildings.interface";

/**
 * Datos simulados (mock) de edificios del sistema.
 *
 * @remarks
 * Esta constante representa un conjunto de edificios utilizados
 * durante el desarrollo y las pruebas de la aplicación.
 *
 * Los datos mock permiten trabajar con la interfaz `Building`
 * sin necesidad de conectarse a un backend o base de datos real.
 *
 * Normalmente se utilizan para:
 * - Pruebas unitarias
 * - Desarrollo de componentes
 * - Simulación de respuestas de servicios
 *
 * @example
 * ```ts
 * import { BUILDINGS_MOCK } from '../data/buildings.mock';
 *
 * console.log(BUILDINGS_MOCK);
 * ```
 *
 * @see Building
 */
export const BUILDINGS_MOCK: Building[] = [
  {
    id: 1,
    name: 'Bloque A',
    floors: 4,
    capacity: 500,
    yearBuilt: 2005,
    hasElevator: true,
    type: 'Academico'
  },
  {
    id: 2,
    name: 'Bloque B',
    floors: 3,
    capacity: 300,
    yearBuilt: 2010,
    hasElevator: false,
    type: 'Administrativo'
  }
];