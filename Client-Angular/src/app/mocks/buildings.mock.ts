import { Building } from "../interfaces/buildings.interface";

export const BUILDING_MOCK: Building[] = [
    {
        id: 1,
        name: 'Bloque A',
        floors: 4,
        capacity: 500,
        yearBuilt: 2005,
        hasElevator: true,
        type: 'Academico'
    },
    {
        id: 2,
        name: 'Bloque B',
        floors: 3,
        capacity: 300,
        yearBuilt: 2010,
        hasElevator: false,
        type: 'Administrativo'
    }
];