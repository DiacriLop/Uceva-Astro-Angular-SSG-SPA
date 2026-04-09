import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Building } from '../../interfaces/buildings.interface';
import { BUILDINGS } from '../../data/buildings.data';

/**
 * Servicio encargado de gestionar la información de los edificios.
 *
 * @remarks
 * Este servicio proporciona acceso a los datos de edificios
 * disponibles en el sistema. Utiliza la constante `BUILDINGS`
 * como fuente de datos simulada.
 *
 * En un entorno real, este servicio podría comunicarse con
 * un backend mediante HTTP.
 *
 * @see Building
 */
@Injectable({
  providedIn: 'root',
})
export class BuildingsService {

  /**
   * Obtiene el listado completo de edificios.
   *
   * @returns Observable que emite un array de edificios.
   */
  getAllBuildings(): Observable<Building[]> {
    return of(BUILDINGS);
  }
}