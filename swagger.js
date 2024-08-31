const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('./swaggerDefinition');

const options = {
  swaggerDefinition,
  apis: [
    './userSwagger.js',       // Path to the user routes
    './productSwagger.js'     // Path to the product routes
  ], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
  app.use('/shreyashJain', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
