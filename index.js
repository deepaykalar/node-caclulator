const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const number=parseInt(prompt("enter  num1"));
