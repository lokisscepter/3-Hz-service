const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 6969;
const Model = require('../db/model.js');

const m = new Model;

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/api/items/:item_id/info', (req, res) => {
  m.getItem(req.params.item_id)
    .then(qR => res.json(qR[0]))
    .catch(err => {
      res.status(404).end();
      console.log(err);
    });
})

app.get('/api/items/:item_id/styles', (req, res) => {
  m.getStyles(req.params.item_id)
    .then(qR => res.json(qR[0]))
    .catch(err => {
      res.status(404).end();
      console.log(err);
    });
})

app.get('/api/items/:item_id/sizes', (req, res) => {
  m.getSizes(req.params.item_id)
  .then(qR => res.json(qR[0]))
  .catch(err => {
    res.status(404).end();
    console.log(err);
  });
})

app.get('/api/items/:item_id/photos', (req, res) => {
  m.getPhotos(req.params.item_id)
  .then(qR => res.json(qR[0]))
  .catch(err => {
    res.status(404).end();
    console.log(err);
  });
})


app.listen(PORT, () => console.log(`express is listening on port ${PORT}`));