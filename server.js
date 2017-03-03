'use strict';

const express = require('express');
const volleyball = require('volleyball');
const app = express();
const articles = require('./articles.json');

app.use(volleyball);
app.use(express.static(__dirname));

app.get('/api/articles', (req, res) => {
  res.json(articles.items)
});

app.listen(process.env.PORT || 8000, () => {
  console.log('Server listening on port', 8000);
});

