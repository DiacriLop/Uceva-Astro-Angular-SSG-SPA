import { Product } from "../interfaces/products.interface";

/**
 * Datos simulados (mock) de productos.
 *
 * @remarks
 * Esta constante representa un conjunto de productos utilizados
 * durante el desarrollo y las pruebas de la aplicación.
 *
 * Los datos mock permiten trabajar con la interfaz `Product`
 * sin necesidad de conectarse a un backend o base de datos real.
 *
 * Estos datos se utilizan principalmente para:
 * - Desarrollo de componentes
 * - Pruebas unitarias
 * - Simulación de respuestas de servicios
 *
 * @example
 * ```ts
 * import { PRODUCTS_MOCK } from '../data/products.mock';
 *
 * console.log(PRODUCTS_MOCK);
 * ```
 *
 * @see Product
 */
export const PRODUCTS_MOCK: Product[] = [
  {
    id: 1,
    name: 'Leche entera',
    category: 'Lacteos',
    price: 4500,
  },
  {
    id: 2,
    name: 'Manzana roja',
    category: 'Frutas',
    price: 3200,
  }
];