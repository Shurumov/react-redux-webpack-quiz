'use strict';
const defaultEnvVariables = {
    NODE_ENV: 'development',
    HOST: 'localhost',
    PORT: 8020,
    API_DOMAIN: 'https://opentdb.com',
    API_VERSION: '',
};
const envVariables = Object.keys(process.env).reduce((accumulator, envName) => {
    if (Object.keys(defaultEnvVariables).includes(envName)) {
        accumulator[envName] = process.env[envName];
    }

    return accumulator;
}, {});

module.exports = {
    ...defaultEnvVariables,
    ...envVariables
};
