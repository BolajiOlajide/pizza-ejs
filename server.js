const express = require('express');
const bodyParser = require('body-parser');
const PriceCalculator = require('./pricing');

const app = express();


app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', 3000);

app.listen(app.get('port'),function() {
  console.log('Pizza App running. To terminate press Ctrl + C.');
});

app.get('/', function(req,res) {
  res.render('index');
});

app.post('/order', function(req,res) {
  const payload = req.body;
  console.log(payload);

  if(!payload.topping) {
    payload['topping'] = []
  } else if (typeof payload.topping === 'string') {
    payload['topping'] = [payload.topping]
  }
  const total = new PriceCalculator(payload).calculateTotal();
  payload['total'] = total;
  res.render('order', payload);
});
