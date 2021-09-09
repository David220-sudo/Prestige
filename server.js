const express = require('express');
const app = express();
const path = require('path');
/*-----------------------------*/
const shoesRouter = require('./routes/shoesRouter');
const basketRouter = require('./routes/basketRouter');
const closeRouter = require('./routes/closeRouter');
const productCardRouter = require('./routes/product-card');
//View engine
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'views')));
//Router
app.use(shoesRouter);
app.use(basketRouter);
app.use(closeRouter);
app.use(productCardRouter);

app.listen(10000);