'use strict';
const envDev = require('./env.dev');
const envProd = require('./env.prod');
const paths = require('./paths');

module.exports = {
    paths,
    envDev,
    envProd,
};
