// const config = require('config');
const common = require('../common');
const controller = new (require('../../app/controllers/shares.controller'))();

let response = {};
describe('test the "get" method', () => {
  beforeAll(async () => {
    const axios = require('axios');
    axios.get = jest.fn().mockResolvedValue({
      data: require('../stubs/shares.stub'),
    });

    const req = common.createRequest();
    req.params.symbol = 'FB';
    const res = common.createResponse();
    await controller.get(req, res);
    response = JSON.parse(res._getData());
  });

  afterAll(() => {
    common.cleanAll();
  });

  it('should be an object', (next) => {
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
