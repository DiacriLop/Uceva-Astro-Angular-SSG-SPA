import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Building } from '../../interfaces/buildings.interface';
import { BUILDINGS } from '../../data/buildings.data';

@Injectable({
  providedIn: 'root',
})
export class BuildingsService {
  /**
     * Obtiene una lista de edificios desde el backend.
     *
     * @param countBuildings Número de edificios a obtener.
     * @returns Observable que emite un array de edificios.
     *
     * @example
     * ```ts
     * this.buildingsService.getAllBuildings().subscribe(buildings => {
     *   console.log(buildings);
     * });
     * ```
     */
    getAllBuildings(): Observable<Building[]> {
      return of(BUILDINGS);
    }
  
}
