import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { BuildingType, Building } from '../../interfaces/buildings.interface';
/**
 * Componente de tabla de edificios.
 *
 * Se utiliza para mostrar un listado de edificios en una tabla,
 * mostrando información como nombre, pisos, capacidad y un badge
 * visual que indica la categoría de cada edificio.
 *
 * @remarks
 * Este componente recibe los edificios desde un componente padre
 * a través del Input `buildings` y utiliza el mapeo `categoryMap`
 * para asignar colores a los badges según la categoría.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-buildings-table [buildings]="buildingsList"></app-buildings-table>
 * ```
 */
@Component({
  selector: 'app-buildings-table',
  imports: [CommonModule, BadgeAtom],
  templateUrl: './buildings-table.component.html',
})
export class BuildingsTableComponent {
  /**
     * Listado de edificios que se mostrarán en la tabla.
     * @type {Building[]}
     * @remarks
     * Este Input permite pasar un array de edificios desde un componente padre,
     * generalmente `ListBuildingsComponent`. Cada edificio debe cumplir la interfaz `Building`.
     */
    @Input() buildings: Building[] = [];
    /**
     * Mapeo de categorías de productos a tipos de Badge.
     * @type {Record<BuildingType, BadgeType>}
     * @remarks
     * Se utiliza para asignar colores de badges a cada categoría:
     * - 'Academico' → 'danger' (rojo)
     * - 'Administrativo' → 'warning' (amarillo)
     * - 'Laboratorio' → 'primary' (azul)
     * - 'Biblioteca' → 'success' (verde)
     * - 'Deportivo' → 'info' (azul claro)
     *
     * Esto permite que en la tabla cada edificio tenga un badge visual que indique su tipo
     * de forma clara para el usuario.
     */
    categoryMap: Record<BuildingType, BadgeType> = {
      'Academico' : 'danger',
      'Administrativo': 'warning',
      'Laboratorio': 'primary',
      'Biblioteca': 'success',
      'Deportivo': 'info',
    }

}
