export interface Course {
id: number;
name: string;
teacher: string;
credits: number;
category: CourseCategory;
}

export type CourseCategory =
| 'Programación'
| 'Bases de Datos'
| 'Redes'
| 'Arquitectura'
| 'IA';