'use strict';

const express = require('express');
const volleyball = require('volleyball');
const app = express();
const articles = require('./articles.json');

app.use(volleyball);
app.use(express.static(__dirname));

app.listen(8000, function () {
  console.log('Server listening on port', 8000);
});

