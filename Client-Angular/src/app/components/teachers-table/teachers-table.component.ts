import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Teacher, TeacherDepartment } from '../../interfaces/teachers.interface';

/**
 * Componente de tabla de profesores.
 *
 * Se utiliza para mostrar un listado de profesores en una tabla,
 * mostrando información como id, nombre, apellido, edad, email
 * y un badge visual que indica el departamento de cada profesor.
 *
 * @remarks
 * Este componente recibe los profesores desde un componente padre
 * a través del Input `teachers` y utiliza el mapeo `departmentMap`
 * para asignar colores a los badges según el departamento.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-teachers-table [teachers]="teachersList"></app-teachers-table>
 * ```
 */
@Component({
  selector: 'app-teachers-table',
  templateUrl: './teachers-table.component.html',
  imports: [BadgeAtom],
})
export class TeachersTableComponent {

  /**
   * Listado de profesores que se mostrarán en la tabla.
   * @type {Teacher[]}
   * @remarks
   * Este Input permite pasar un array de profesores desde un componente padre,
   * generalmente `TeachersPage`. Cada profesor debe cumplir la interfaz `Teacher`.
   */
  @Input() teachers: Teacher[] = [];

  /**
   * Mapeo de departamentos de profesores a tipos de Badge.
   * @type {Record<TeacherDepartment, BadgeType>}
   *
   * @remarks
   * Se utiliza para asignar colores de badges a cada departamento:
   * - 'Sistemas' → 'success' (verde)
   * - 'Electronica' → 'primary' (azul)
   * - 'Industrial' → 'warning' (amarillo)
   * - 'Matematicas' → 'danger' (rojo)
   * - 'Ciencias' → 'secondary' (gris)
   *
   * Esto permite que en la tabla cada profesor tenga un badge visual
   * que indique su departamento de forma clara para el usuario.
   */
  departmentMap: Record<TeacherDepartment, BadgeType> = {
    'Sistemas': 'success',
    'Electronica': 'primary',
    'Industrial': 'warning',
    'Matematicas': 'danger',
    'Ciencias': 'secondary'
  };

}
