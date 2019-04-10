const common = require('../common');
const controller = require('../../app/controllers/shares.controller');
const service = require('../../app/services/shares.service');
const stub = require('../stubs/shares.stub');

let response = {};
describe('test the "get" method', () => {
  beforeAll(async () => {
    // mock the service
    service.get = jest.fn().mockResolvedValue(stub);

    const req = common.createRequest();
    const res = common.createResponse();

    req.params.symbol = 'FB';
    await controller.get(req, res);
    response = JSON.parse(res._getData());
  });

  it('should be a object', (next) => {
    expect(response).toBeInstanceOf(Object);
    next();
  });

  it('should have these properties', (next) => {
    expect(response).toHaveProperty('change_value');
    expect(response).toHaveProperty('change_percent');
    expect(response).toHaveProperty('color_code');
    expect(response).toHaveProperty('previous');
    expect(response).toHaveProperty('symbol');
    expect(response).toHaveProperty('value');
    next();
  });

  it('should have properties with these values', (next) => {
    expect(response.change_percent).toBe('1.02');
    expect(response.change_value).toBe('3.63');
    expect(response.color_code).toBe('green');
    expect(response.previous).toBe('174.93');
    expect(response.symbol).toBe('FB');
    expect(response.value).toBe('178.56');
    next();
  });
});
