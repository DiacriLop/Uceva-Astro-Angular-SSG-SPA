import { Component } from '@angular/core';
import { BadgeAtom } from '@brejcha13320/design-system-bootstrap';

/**
 * Página encargada de mostrar la fecha actual del sistema.
 *
 * @remarks
 * Este componente obtiene la fecha actual utilizando
 * el objeto `Date` de JavaScript y la muestra en la interfaz
 * utilizando el componente `BadgeAtom` del design system.
 *
 * Forma parte de las páginas básicas de la aplicación
 * utilizadas para demostrar el uso de componentes visuales.
 *
 * @see BadgeAtom
 */
@Component({
  selector: 'app-date.page',
  imports: [BadgeAtom],
  templateUrl: './date.page.html',
})
export class DatePage {

  /**
   * Fecha actual del sistema.
   *
   * @remarks
   * Se inicializa al cargar el componente utilizando
   * el constructor `Date()` de JavaScript.
   */
  currentDate = new Date();

}