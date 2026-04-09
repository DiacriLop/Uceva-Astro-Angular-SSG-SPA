import { TestBed } from '@angular/core/testing';
import { BuildingsService } from './buildings.service';
import { BUILDINGS } from '../../data/buildings.data';

describe('BuildingsService', () => {
  let service: BuildingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildingsService);
  });

describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllBuildings debería retornar un observable con los edificios', (done) => {
      service.getAllBuildings().subscribe(buildings => {
        expect(buildings).toEqual(BUILDINGS);
        expect(buildings.length).toBe(BUILDINGS.length);
        done();
      });
    });

  });

});
