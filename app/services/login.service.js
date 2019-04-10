const jwt = require('jsonwebtoken');
const config = require('config');

function isAnRegisteredUser({ name, email, password }) {
  return (
    name === 'cristian' && email === 'cristian@gmail.com' && password === '1234'
  );
}

module.exports = {
  /**
   * @returns {string}
   * @param {object} options
   */
  create(options) {
    const { name, email } = options;
    if (!isAnRegisteredUser(options)) {
      const err = new Error(
        'There is not user with that name, mail or password',
      );
      err.code = '400';
      throw err;
    }
    return jwt.sign({ name, email }, config.get('jwt.secret_key'), {
      expiresIn: config.get('jwt.expiresIn'),
    });
  },

  /**
   * @returns {boolean}
   * @param {string} token
   */
  tokenIsValid(token) {
    const decoded = jwt.verify(token, config.get('jwt.secret_key'));
    const current_time = Date.now() / 1000;
    return decoded.exp && decoded.exp > current_time;
  },
};
