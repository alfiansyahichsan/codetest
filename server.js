const dotenv = require('dotenv');
const App = require('./src/app');

/** main */
(async () => {
  dotenv.config();
  const app = new App();
  await app.initialize();
  await app.start();
})();
