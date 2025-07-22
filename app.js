const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();
app.use(bodyParser.json());

app.use('/api/users', require('./routes/users'));
app.use('/api/pets', require('./routes/pets'));

db.sequelize.sync({ alter: true })
  .then(() => console.log('Database synced.'))
  .catch((err) => console.error('DB sync error:', err));

module.exports = app;
