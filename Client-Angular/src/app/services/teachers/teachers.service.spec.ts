import { TestBed } from '@angular/core/testing';
import { TeachersService } from './teachers.service';
import { TEACHERS } from '../../data/teachers.data';

describe('TeachersService', () => {
  let service: TeachersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeachersService);
  });

describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllProducts debería retornar un observable con los profesores', (done) => {
      service.getAllTeachers().subscribe(teachers => {
        expect(teachers).toEqual(TEACHERS);
        expect(teachers.length).toBe(TEACHERS.length);
        done();
      });
    });
});
});
