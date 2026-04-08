import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Teacher } from '../../interfaces/teachers.interface';
import { TEACHERS } from '../../data/teachers.data';

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  /**
   * Obtiene una lista de profesores desde el backend.
   *
   * @param countTeachers Número de profesores a obtener.
   * @returns Observable que emite un array de profesores.
   *
   * @example
   * ```ts
   * this.teachersService.getAllTeachers().subscribe(teachers => {
   *   console.log(teachers);
   * });
   * ```
   */
  getAllTeachers(): Observable<Teacher[]> {
    return of(TEACHERS);
  }
}
