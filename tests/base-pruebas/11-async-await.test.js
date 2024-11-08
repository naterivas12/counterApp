import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Prueba 11-async-await', () => { 
  test('detImagen rebe retornar un URL de la imagen', async() => { 
    const url = await getImagen();
    console.log(url);
    expect (typeof url).toBe('string');
  })
 })