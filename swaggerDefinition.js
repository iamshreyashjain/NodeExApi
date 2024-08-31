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
        url: 'https://special-doodle-6wr49jv6w6vc56q9-3003.app.github.dev/', // Your server URL
        description: 'Development server',
      },
    ],
  };
  
  module.exports = swaggerDefinition;
