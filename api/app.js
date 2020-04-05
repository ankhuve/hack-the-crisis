const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const mapsRouter = require('./routes/maps');
const pingRouter = require('./routes/ping');
const usersRouter = require('./routes/users');
const bankIdAuthRouter = require('./routes/auth/bankid');
const errandsRouter = require('./routes/errands');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/ping', pingRouter);
app.use('/users', usersRouter);
app.use('/auth/bankid', bankIdAuthRouter);
app.use('/errands', errandsRouter);
app.use('/maps', mapsRouter);


const swaggerDefinition = {
  swagger: '2.0',
  info: {
    title: 'Hack the Crisis',
    version: '1.0.0'
  }
}

const swaggerDocOptions = {
  swaggerDefinition,
  apis: ['./routes/**/*.js']
}

const swaggerSpec = swaggerJSDoc(swaggerDocOptions);

app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
  res.json({message: err.message || 'Something went wrong'});
});

module.exports = app;
