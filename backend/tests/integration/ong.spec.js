const app = require('../../src/app');
const connection = require('../../src/database/connection');
const request = require('supertest');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async() => {
    await connection.destroy();
  });
  
  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name:"AACD",
        email:"aacd@gmail.com",
        whatsapp:"62995490005",
        city:"Florianópolis",
        uf:"SC"
      });

      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
  });
});