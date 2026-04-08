import { Component, inject } from '@angular/core';
import { BuildingsTableComponent } from '../../components/buildings-table/buildings-table.component';
import { Building } from '../../interfaces/buildings.interface';
import { BuildingsService } from '../../services/buildings/buildings.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'app-buildings',
  imports: [BuildingsTableComponent, AlertComponent],
  templateUrl: './buildings.page.html',
})
export class BuildingsPage {
  /**
   * Listado de productos obtenidos desde el servicio.
   * @type {Building[]}
   */
  buildings: Building[] = [];
  /**
     * Estado actual del componente.
     *
     * @default 'init'
     */
    state: State = 'init';
  

  /**
   * Servicio para obtener productos.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private buildingsService = inject(BuildingsService);

  /**
   * Inicializa el componente y carga los edificios.
   * @remarks
   * Se suscribe al método `getAllBuildings()` del servicio y
   * asigna los datos recibidos a la propiedad `products`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.buildingsService.getAllBuildings().subscribe({
      next: (buildings) => {
        this.buildings = buildings;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }

}
