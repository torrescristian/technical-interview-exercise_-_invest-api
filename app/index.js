const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log(`starting server on http://localhost:${port}`);
});
