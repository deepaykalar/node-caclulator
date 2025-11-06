const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.post('/calculate', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const operation = req.body.operation;
  let result;

  if (operation === 'add') result = num1 + num2;
  else if (operation === 'subtract') result = num1 - num2;
  else if (operation === 'multiply') result = num1 * num2;
  else if (operation === 'divide') result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
  else result = 'Invalid operation';

  res.send(`
    <h1>Result: ${result}</h1>
    <a href="/">Go Back</a>
  `);
});


app.listen(5100, (err) => {
    if (err) console.log(err)
    else console.log(5100)
})