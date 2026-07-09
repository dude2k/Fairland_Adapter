const path = require('path');
const { tests } = require('@iobroker/testing');

tests.integration(path.join(__dirname, '..'));
