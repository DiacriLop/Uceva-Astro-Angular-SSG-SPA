import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Teacher } from '../../interfaces/teachers.interface';
import { TEACHERS } from '../../data/teachers.data';

/**
 * Servicio encargado de gestionar la información de los profesores.
 *
 * @remarks
 * Proporciona métodos para obtener datos relacionados con los profesores.
 * Actualmente utiliza una fuente de datos local (`TEACHERS`) que simula
 * una respuesta de backend mediante Observables.
 *
 * En una implementación real, este servicio podría consumir una API REST.
 *
 * @see Teacher
 */
@Injectable({
  providedIn: 'root',
})
export class TeachersService {

  /**
   * Obtiene el listado completo de profesores.
   *
   * @returns Observable que emite un array de profesores.
   */
  getAllTeachers(): Observable<Teacher[]> {
    return of(TEACHERS);
  }
}