// swaggerDefinition.js

const swaggerDefinition = {
    openapi: '3.0.0', // OpenAPI version
    info: {
      title: 'ShreyashJain', // Title of the API
      version: '1.0.0', // Version of the API
      description: 'Just for testing and learning', // Short description of the API
    },
    servers: [
      {
        url: 'https://jubilant-zebra-9wqj7p6vrvx27q67.github.dev/shreyashJain/swagger', // Your server URL
        description: 'Development server',
      },
    ],
  };
  
  module.exports = swaggerDefinition;
