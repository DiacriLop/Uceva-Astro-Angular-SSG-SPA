/**
 * Interfaz que representa un edificio dentro del campus universitario.
 *
 * Contiene la información básica necesaria para mostrar un edificio
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada edificio debe tener un `id` único, nombre, número de pisos,
 * capacidad aproximada de personas, año de construcción y un tipo
 * de edificio (`type`) definido.
 *
 * @example
 * ```ts
 * const building: Building = {
 *   id: 1,
 *   name: 'Bloque A',
 *   floors: 4,
 *   capacity: 500,
 *   yearBuilt: 2005,
 *   type: 'Academico',
 *   hasElevator: true
 * };
 * ```
 */
export interface Building {

  /** Identificador único del edificio */
id: number;

  /** Nombre del edificio */
name: string;

  /** Número de pisos del edificio */
floors: number;

  /** Capacidad aproximada de personas */
capacity: number;

  /** Año de construcción */
yearBuilt: number;

  /** Indica si el edificio tiene ascensor */
hasElevator: boolean;

  /** Tipo de edificio dentro del campus */
type: BuildingType;
}

/**
 * Tipo de edificio del campus.
 *
 * @remarks
 * Este tipo restringe los edificios a los valores predefinidos:
 * - 'Academico'
 * - 'Administrativo'
 * - 'Laboratorio'
 * - 'Biblioteca'
 * - 'Deportivo'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const tipo: BuildingType = 'Laboratorio';
 * ```
 */
export type BuildingType =
| 'Academico'
| 'Administrativo'
| 'Laboratorio'
| 'Biblioteca'
| 'Deportivo';