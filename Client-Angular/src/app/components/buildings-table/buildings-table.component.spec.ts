import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildingsTableComponent } from './buildings-table.component';
import { By } from '@angular/platform-browser';
import { BUILDINGS_MOCK } from '../../mocks/buildings.mocks';
import { PRODUCTS_MOCK } from '../../mocks/products.mocks';


describe('BuildingsTableComponent', () => {
  let component: BuildingsTableComponent;
  let fixture: ComponentFixture<BuildingsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada edificio', () => {
    component.buildings = BUILDINGS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.buildings.length);
  });

  it('debería mostrar los datos del edificio en cada columna', () => {
    component.buildings = BUILDINGS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const building = component.buildings[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(building.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(building.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(String(building.floors));
      expect(columns[3].nativeElement.textContent.trim()).toBe(String(building.capacity));
      expect(columns[4].nativeElement.textContent.trim()).toBe(String(building.yearBuilt));
      expect(columns[5].nativeElement.textContent.trim()).toBe(building.type);
          
    });
  });

  it('debería mapear cada ingeniería a su BadgeType correcto', () => {
    expect(component.categoryMap['Academico']).toBe('danger');
    expect(component.categoryMap['Administrativo']).toBe('warning');
    expect(component.categoryMap['Laboratorio']).toBe('primary');
    expect(component.categoryMap['Biblioteca']).toBe('success');
    expect(component.categoryMap['Deportivo']).toBe('info');
  });
});
