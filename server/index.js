
let
  path = require('path');

const
  config = require('config'),
  express = require('express'),
  app = express(),
  routes = require('././routes/index');




app.use('/', routes);

/// catch 404 and forwarding to error handler
app.use((req, res, next) => {
  let
    err = new Error('Not Found');
  err.status = 404;

  next(err);
});

// development error handler
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res
      .status(err.status || 500)
      .send({
        message: err.message,
        error: err,
        log: console.log(err)
    });
  });
}

// production error handler
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({
      message: err.message,
      error: err
    });
});


app.run = () => app.listen(config.port, () => {
  console.log('Server running on ' + config.port + ' ' + config.env);
});

module.exports = app;