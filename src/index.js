const run = require('./app/app');
const AlertService = require('./app/alert.service');

const alertService = new AlertService();

run(alertService);