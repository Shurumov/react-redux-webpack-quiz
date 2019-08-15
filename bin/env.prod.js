'use strict';
const defaultEnvVariables = {
    NODE_ENV: 'production',
    HOST: '0.0.0.0',
    PORT: 8020,
    API_DOMAIN: 'https://anova-dev.azurewebsites.net',
    API_VERSION: '',
    UPLOAD_FILES_URL: '',
    UPLOAD_IMAGES_URL: '',
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
