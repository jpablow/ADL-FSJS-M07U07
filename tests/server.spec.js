const request = require('supertest');
const server = require('../index');

describe('Operaciones CRUD de cafes', () => {
  // 1. Testea que la ruta GET /cafes devuelve un status code 200 y el tipo de dato recibido es un arreglo con por lo menos 1 objeto. (3 Puntos)

  it('Ruta GET /cafes devuelve código 200, tipo de dato recibido es Array con al menos un objeto', async () => {
    const response = await request(server).get('/cafes').send();
    const respStatusCode = response.statusCode;
    const respBody = response.body;
    expect(respStatusCode).toBe(200);
    expect(respBody).toBeInstanceOf(Array);
    expect(respBody.length).toBeGreaterThan(0);
  });

  // 2. Comprueba que se obtiene un código 404 al intentar eliminar un café con un id que no existe. (2 Puntos)
  // 3. Prueba que la ruta POST /cafes agrega un nuevo café y devuelve un código 201. (2 Puntos)
  // 4. Prueba que la ruta PUT /cafes devuelve un status code 400 si intentas actualizar un café enviando un id en los parámetros que sea diferente al id dentro del payload. (3 Puntos)
});
