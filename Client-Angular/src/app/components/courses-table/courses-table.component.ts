import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import {  Course,CourseCategory} from '../../interfaces/courses.interface';

/**
 * Componente de tabla de cursos.
 *
 * Se utiliza para mostrar un listado de cursos en una tabla,
 * mostrando información como nombre, profesor, créditos y un badge
 * visual que indica la categoría de cada curso.
 *
 * @remarks
 * Este componente recibe los cursos desde un componente padre
 * a través del Input `courses` y utiliza el mapeo `categoryMap`
 * para asignar colores a los badges según la categoría.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-courses-table [courses]="coursesList"></app-courses-table>
 * ```
 */
@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class CoursesTableComponent {

  /**
   * Listado de cursos que se mostrarán en la tabla.
   * @type {Course[]}
   * @remarks
   * Este Input permite pasar un array de cursos desde un componente padre.
   * Cada curso debe cumplir la interfaz `Course`.
   */
  @Input() courses: Course[] = [];

  /**
   * Mapeo de categorías de cursos a tipos de Badge.
   * @type {Record<CourseCategory, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada categoría:
   *
   * - 'Programación' → 'primary'
   * - 'Bases de Datos' → 'success'
   * - 'Redes' → 'warning'
   * - 'Arquitectura' → 'info'
   * - 'IA' → 'danger'
   */
  categoryMap: Record<CourseCategory, BadgeType> = {
    'Programación': 'primary',
    'Bases de Datos': 'success',
    'Redes': 'warning',
    'Arquitectura': 'info',
    'IA': 'danger',
  }

}
