import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { COURSES_MOCK } from '../../mocks/courses.mocks';
import { CoursesTableComponent } from './courses-table.component';
import { CurrencyPipe } from '@angular/common';

describe('CoursesTableComponent', () => {
  let component: CoursesTableComponent;
  let fixture: ComponentFixture<CoursesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesTableComponent);
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

it('debería renderizar una fila por cada curso', () => {
    component.courses = COURSES_MOCK;
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.courses.length);
});
it('debería mostrar los datos del producto en cada columna', () => {
    component.courses = COURSES_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const course = component.courses[index];
      const productPrice = new CurrencyPipe('en-US').transform(course.credits);

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(course.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(course.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(productPrice);
      expect(columns[3].nativeElement.textContent.trim()).toBe(course.category);
    });
  });

  it('debería mapear cada ingeniería a su BadgeType correcto', () => {
    expect(component.categoryMap['Programación']).toBe('primary');
    expect(component.categoryMap['Bases de Datos']).toBe('success');
    expect(component.categoryMap['Redes']).toBe('warning');
    expect(component.categoryMap['Arquitectura']).toBe('info');
    expect(component.categoryMap['IA']).toBe('danger');
  });
});
