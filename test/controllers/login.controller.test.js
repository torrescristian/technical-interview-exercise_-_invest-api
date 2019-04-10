const common = require('../common');
const controller = require('../../app/controllers/login.controller');
const service = require('../../app/services/login.service');
const stub = require('../stubs/login.stub');

let response = {};
describe('test the "create" method', () => {
  beforeAll(() => {
    // mock the service
    service.create = jest.fn(() => stub);

    const req = common.createRequest();
    const res = common.createResponse();

    req.body = {
      name: 'cristian',
      email: 'cristian@gmail.com',
      password: '1234',
    };
    controller.create(req, res);
    response = JSON.parse(res._getData());
  });

  it('should be a object', (next) => {
    expect(response).toBeInstanceOf(Object);
    next();
  });

  it('should have these properties', (next) => {
    expect(response).toHaveProperty('token');
    next();
  });

  it('should have properties with these values', (next) => {
    expect(response.token).toBe(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY3Jpc3RpYW4iLCJpYXQiOjE1NTQ5MDc4NTAsImV4cCI6MTU1NDkxNTA1MH0.w1MAUfTdKIe5yqE2ZoX7WVanvO6UWuHjlGF4eaKxBlc',
    );
    next();
  });
});
