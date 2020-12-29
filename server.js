var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride= require('method-override')
const stripe = require('stripe')('sk_test_51I3WVwKUWk9p77CmxmcphtVtpaXSSk73Di2ESiWb7PWELhhUill2jbnmsL3TK7CbZO7KEVkFUq16uSizoMyiNp1h00iugAXnm7');


require('dotenv').config();
require('./config/database');

var homeRouter = require('./routes/home');
var galleryRouter = require('./routes/gallery');
const bioRouter = require('./routes/bio');
const contactRouter = require('./routes/contact');
const cartRouter = require('./routes/cart');
const successRouter =require('./routes/success');
const cancelRouter = require('./routes/cancel')


var app = express();

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: '',
            images: [''],
          },
          unit_amount: '',
        },
        quantity: '',
      },
    ],
    mode: 'payment',
    success_url: `https://thehappycrafter.herokuapp.com/success`,
    cancel_url: `https://thehappycrafter.herokuapp.com/cancel`,
  });
  res.json({ id: session.id });
});
app.listen(4242, () => console.log('Running on port 4242'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/gallery', galleryRouter);
app.use('/bio', bioRouter);
app.use('/contact', contactRouter);
app.use('/shoppingcart', cartRouter);
app.use('/success', successRouter);
app.use('/cancel', cancelRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
