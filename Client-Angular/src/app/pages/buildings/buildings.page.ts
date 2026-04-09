import { Component, inject } from '@angular/core';
import { BuildingsTableComponent } from '../../components/buildings-table/buildings-table.component';
import { Building } from '../../interfaces/buildings.interface';
import { BuildingsService } from '../../services/buildings/buildings.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Página encargada de mostrar el listado de edificios.
 *
 * @remarks
 * Este componente se encarga de:
 * - Obtener los edificios desde `BuildingsService`
 * - Controlar el estado de carga de la página
 * - Mostrar los datos en `BuildingsTableComponent`
 *
 * También gestiona los estados de la interfaz:
 * - `init` → estado inicial
 * - `loading` → cargando datos
 * - `success` → datos cargados correctamente
 * - `error` → ocurrió un error al cargar los datos
 *
 * @see BuildingsService
 * @see BuildingsTableComponent
 */
@Component({
  selector: 'app-buildings',
  imports: [BuildingsTableComponent, AlertComponent],
  templateUrl: './buildings.page.html',
})
export class BuildingsPage {

  /**
   * Listado de edificios obtenidos desde el servicio.
   *
   * @type {Building[]}
   */
  buildings: Building[] = [];

  /**
   * Estado actual del componente.
   *
   * @remarks
   * Se utiliza para controlar la visualización de la interfaz
   * dependiendo del proceso de carga de los datos.
   *
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio encargado de obtener los edificios.
   *
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular
   * en lugar de hacerlo mediante el constructor.
   */
  private buildingsService = inject(BuildingsService);

  /**
   * Método del ciclo de vida que se ejecuta al inicializar el componente.
   *
   * @remarks
   * Realiza la petición al servicio `getAllBuildings()` para obtener
   * la lista de edificios y actualizar el estado del componente.
   */
  ngOnInit(): void {
    this.state = 'loading';

    this.buildingsService.getAllBuildings().subscribe({
      next: (buildings) => {
        this.buildings = buildings;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }

}
