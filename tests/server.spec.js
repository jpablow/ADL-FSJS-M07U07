const request = require('supertest');
const server = require('../index');

describe('Operaciones CRUD de cafes', () => {
  // 1. Testea que la ruta GET /cafes devuelve un status code 200 y el tipo de dato recibido es un arreglo con por lo menos 1 objeto. (3 Puntos)

  it('1️⃣➖Ruta GET /cafes devuelve código 200, tipo de dato recibido es Array con al menos un objeto', async () => {
    const response = await request(server).get('/cafes').send();
    const respStatusCode = response.statusCode;
    const respBody = response.body;
    expect(respStatusCode).toBe(200);
    expect(respBody).toBeInstanceOf(Array);
    expect(respBody.length).toBeGreaterThan(0);
  });

  // 2. Comprueba que se obtiene un código 404 al intentar eliminar un café con un id que no existe. (2 Puntos)

  it('2️⃣➖Entrega código 404 al eliminar un café con id inexistente', async () => {
    const jwt = 'token';
    const response = await request(server)
      .delete('/cafes/26')
      .set('authorization', jwt)
      .send();
    const respStatusCode = response.statusCode;
    expect(respStatusCode).toBe(404);
  });

  // 3. Prueba que la ruta POST /cafes agrega un nuevo café y devuelve un código 201. (2 Puntos)

  it('3️⃣➖Ruta POST /cafes agrega nuevo café y devuelve código 201', async () => {
    const cafePrueba = { id: 26, nombre: 'Café de Prueba' };
    const response = await request(server).post('/cafes').send(cafePrueba);
    const respStatusCode = response.statusCode;
    expect(respStatusCode).toBe(201);
  });

  // 4. Prueba que la ruta PUT /cafes devuelve un status code 400 si intentas actualizar un café enviando un id en los parámetros que sea diferente al id dentro del payload. (3 Puntos)

  it('4️⃣➖Ruta PUT /cafes devuelve código 400 al enviar id en params distinto a id en payload', async () => {
    const cafeModificado = { id: 2, nombre: 'Americano' };
    const response = await request(server)
      .put('/cafes/26')
      .send(cafeModificado);
    const respStatusCode = response.statusCode;
    expect(respStatusCode).toBe(400);
  });
});
