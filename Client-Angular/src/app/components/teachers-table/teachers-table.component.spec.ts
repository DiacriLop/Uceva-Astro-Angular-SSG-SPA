import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyPipe } from '@angular/common';
import { By } from '@angular/platform-browser';
import { TEACHERS_MOCK } from '../../mocks/teachers.mocks';
import { TeachersTableComponent } from './teachers-table.component';

describe('TeachersTableComponent', () => {
  let component: TeachersTableComponent;
  let fixture: ComponentFixture<TeachersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersTableComponent);
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

  it('debería renderizar una fila por cada profesor', () => {
      component.teachers = TEACHERS_MOCK;
      fixture.detectChanges();
  const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.teachers.length);
});
  it('debería mostrar los datos del profesor en cada columna', () => {
    component.teachers = TEACHERS_MOCK;
    fixture.detectChanges();

const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const teacher = component.teachers[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(teacher.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(teacher.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(teacher.lastName);
      expect(columns[3].nativeElement.textContent.trim()).toBe(teacher.age.toString());
      expect(columns[4].nativeElement.textContent.trim()).toBe(teacher.email);
      expect(columns[5].nativeElement.textContent.trim()).toBe(teacher.department);
    });
  });

  it('debería mapear cada ingeniería a su BadgeType correcto', () => {
    expect(component. departmentMap['Sistemas']).toBe('success');
    expect(component.departmentMap['Electronica']).toBe('primary');
    expect(component.departmentMap['Industrial']).toBe('warning');
    expect(component.departmentMap['Matematicas']).toBe('danger');
    expect(component.departmentMap['Ciencias']).toBe('secondary');
  });

  }
);
