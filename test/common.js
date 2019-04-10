const httpMocks = require('node-mocks-http');

module.exports = {
  createRequest() {
    return httpMocks.createRequest();
  },

  createResponse() {
    return httpMocks.createResponse();
  },
};
