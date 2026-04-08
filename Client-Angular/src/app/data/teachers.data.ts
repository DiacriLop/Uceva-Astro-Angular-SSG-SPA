import { Teacher } from '../interfaces/teachers.interface';

/**
 * Datos mock de profesores.
 *
 * @remarks
 * Esta data simula la respuesta de un backend para el listado
 * de profesores dentro del sistema académico.
 *
 * Se utiliza principalmente en el mock `teachers.mock.ts`
 * para devolver los datos mediante un Observable.
 */
export const TEACHERS: Teacher[] = [
{
    id: 1,
    name: 'Laura',
    lastName: 'González',
    age: 40,
    email: 'laura.gonzalez@uceva.edu.co',
    department: 'Sistemas'
},
{
    id: 2,
    name: 'Carlos',
    lastName: 'Martínez',
    age: 45,
    email: 'carlos.martinez@uceva.edu.co',
    department: 'Electronica'
},
{
    id: 3,
    name: 'Ana',
    lastName: 'López',
    age: 38,
    email: 'ana.lopez@uceva.edu.co',
    department: 'Industrial'
},
{
    id: 4,
    name: 'Jorge',
    lastName: 'Ramírez',
    age: 50,
    email: 'jorge.ramirez@uceva.edu.co',
    department: 'Matematicas'
},
{
    id: 5,
    name: 'Paula',
    lastName: 'Castro',
    age: 42,
    email: 'paula.castro@uceva.edu.co',
    department: 'Ciencias'
},
{
    id: 6,
    name: 'Andrés',
    lastName: 'Morales',
    age: 37,
    email: 'andres.morales@uceva.edu.co',
    department: 'Sistemas'
},
{
    id: 7,
    name: 'Diana',
    lastName: 'Torres',
    age: 39,
    email: 'diana.torres@uceva.edu.co',
    department: 'Industrial'
},
{
    id: 8,
    name: 'Miguel',
    lastName: 'Rojas',
    age: 47,
    email: 'miguel.rojas@uceva.edu.co',
    department: 'Electronica'
}
];