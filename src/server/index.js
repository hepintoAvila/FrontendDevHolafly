const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const kitten = require('./components/Kitten/network.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('images'));
// ROUER
app.use('/kitten', kitten);
app.get('/images/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  res.sendFile(`${__dirname}/images/${imageName}`);
});
app.listen(config.api.port, () => {
  console.log('Api escuchando en el puerto ', config.api.port);
});