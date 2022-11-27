const express = require('express');

const app = express();

app.post('/api/auth/register', (req, res) => {
  return res.send({ message: 'user created' });
});

module.exports = app;
