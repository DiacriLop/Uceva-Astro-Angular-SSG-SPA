import { Building } from "../interfaces/buildings.interface";

/**
 * Listado de edificios disponibles en el sistema.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * información básica de edificios, utilizada para:
 * - Pruebas unitarias
 * - Desarrollo sin backend
 * - Ejercicios académicos
 *
 * @type {Building[]}
 */
/**
 * Listado de edificios disponibles en el sistema.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * información básica de edificios, utilizada para:
 * - Pruebas unitarias
 * - Desarrollo sin backend
 * - Ejercicios académicos
 *
 * @type {Building[]}
 */
export const BUILDINGS: Building[] = [
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
},
{
    id: 3,
    name: 'Laboratorios de Ingeniería',
    floors: 5,
    capacity: 250,
    yearBuilt: 2015,
    hasElevator: true,
    type: 'Laboratorio'
},
{
    id: 4,
    name: 'Biblioteca Central',
    floors: 2,
    capacity: 600,
    yearBuilt: 2008,
    hasElevator: true,
    type: 'Biblioteca'
},
{
    id: 5,
    name: 'Centro Deportivo',
    floors: 2,
    capacity: 800,
    yearBuilt: 2012,
    hasElevator: false,
    type: 'Deportivo'
},
{
    id: 6,
    name: 'Bloque C',
    floors: 4,
    capacity: 450,
    yearBuilt: 2018,
    hasElevator: true,
    type: 'Academico'
}

];