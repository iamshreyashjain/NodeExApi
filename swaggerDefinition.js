// swaggerDefinition.js

const swaggerDefinition = {
    openapi: '3.0.0', // OpenAPI version
    info: {
      title: 'Shreyash Jain', // Title of the API
      version: '2.0.0', // Version of the API
      description: 'Just for testing and learning', // Short description of the API
    },
    servers: [
      {
        url: 'https://nodeexapi.onrender.com/swagger', // Your server URL
        description: 'Development server',
      },
    ],
  };
  
  module.exports = swaggerDefinition;
