/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
// eslint-disable-next-line no-unused-vars
const cors = require('cors');

const routes = require('./routes/api');

class App {
  constructor() {
    this.app = express();
  }

  async initialize() {
    try {
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: true }));
      this.app.use(helmet());
      this.app.use(cors({ origin: process.env.CORS_ORIGIN.split(',') }));
      // this.app.use(compression());
      this.app.use(
        morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev')
      );

      this.app.use(process.env.API_PREFIX, routes);

      this.initExceptionHandler();
    } catch (error) {
      console.log(error);
    }
  }

  async initExceptionHandler() {
    const notFound = (req, res, next) => {
      const error = new Error(`Not Found ${req.originalUrl}`);
      res.status(404);
      next(error);
    };

    // eslint-disable-next-line no-unused-vars
    const errorHandler = (error, req, res, next) => {
      const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
      res.status(statusCode);
      res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack,
      });
    };

    this.app.use(notFound);
    this.app.use(errorHandler);
  }

  async start() {
    this.app.listen(process.env.PORT || 3001, () =>
      console.log(`server started ${process.env.PORT || 3001}`)
    );
  }
}

module.exports = App;
