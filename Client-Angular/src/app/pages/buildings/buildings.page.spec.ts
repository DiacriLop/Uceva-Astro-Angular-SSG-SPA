import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsPage } from './buildings.page';
import { provideHttpClient } from '@angular/common/http';
import { BuildingsService } from '../../services/buildings/buildings.service';
import { BuildingsTableComponent } from '../../components/buildings-table/buildings-table.component';
import { of, throwError } from 'rxjs';
import { BUILDINGS_MOCK } from '../../mocks/buildings.mocks';
import { By } from '@angular/platform-browser';


describe('BuildingsPage', () => {
  let component: BuildingsPage;
  let fixture: ComponentFixture<BuildingsPage>;
  let buildingsService: BuildingsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingsPage, BuildingsTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingsPage);
    component = fixture.componentInstance;
    buildingsService = TestBed.inject(BuildingsService);
  });

it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllBuildings al iniciar', () => {
    const spyGetAllBuildings = jest.spyOn(buildingsService, 'getAllBuildings').mockReturnValue(of(BUILDINGS_MOCK));
    fixture.detectChanges();
    expect(spyGetAllBuildings).toHaveBeenCalled();
  });

  it('debería asignar los edificios recibidos del servicio', () => {
    jest.spyOn(buildingsService, 'getAllBuildings').mockReturnValue(of(BUILDINGS_MOCK));
    fixture.detectChanges();
    expect(component.buildings).toEqual(BUILDINGS_MOCK);
  });

  it('debería pasar los edificios al componente buildings-table', () => {
    jest.spyOn(buildingsService, 'getAllBuildings').mockReturnValue(of(BUILDINGS_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(BuildingsTableComponent))
      .componentInstance;
    expect(tableComponent.buildings).toEqual(BUILDINGS_MOCK);
  });

  it('debería manejar el error cuando falla getAllBuildings', () => {
    component.buildings = [];
    const errorResponse = new Error('Error al cargar edificios');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(buildingsService, 'getAllBuildings').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(buildingsService.getAllBuildings).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.buildings.length).toBe(0);
  });
});
